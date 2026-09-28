"""Keep only orientation and color space tags in staged JPEG EXIF metadata."""

import hashlib
import os
from pathlib import Path
import shutil
import subprocess
import sys


def git(root, *args, check=True):
    return subprocess.run(
        ["git", *args], cwd=root, check=check, stdout=subprocess.PIPE, stderr=subprocess.PIPE
    )


def exiftool_path():
    executable = shutil.which("exiftool") or shutil.which("ExifTool.exe")
    if executable:
        return executable
    if os.name == "nt" and os.environ.get("LOCALAPPDATA"):
        installed = Path(os.environ["LOCALAPPDATA"]) / "Programs" / "ExifTool" / "ExifTool.exe"
        if installed.is_file():
            return str(installed)
    raise RuntimeError("ExifTool is required. Install it before committing JPEG files.")


def main():
    root = Path.cwd().resolve()
    changed = git(root, "diff", "--cached", "--name-only", "--diff-filter=ACMR", "-z").stdout
    photos = [
        os.fsdecode(name)
        for name in changed.split(b"\0")
        if name and Path(os.fsdecode(name)).suffix.lower() in {".jpg", ".jpeg"}
    ]
    if not photos:
        return

    exiftool = exiftool_path()
    for name in photos:
        path = root / name
        if path.is_symlink() or not path.is_file() or not path.resolve().is_relative_to(root):
            raise RuntimeError(f"Expected a regular JPEG inside the repository: {name}")
        if git(root, "diff", "--quiet", "--", name, check=False).returncode != 0:
            raise RuntimeError(f"JPEG has unstaged changes; stage it first: {name}")

        before = hashlib.sha256(path.read_bytes()).digest()
        # ColorSpaceTags includes EXIF color tags and the ICC profile.  Deleting
        # only EXIF leaves other JPEG metadata and the existing ICC profile alone.
        subprocess.run(
            [exiftool, "-P", "-overwrite_original", "-EXIF:all=", "-tagsFromFile", "@",
             "-Orientation", "-ColorSpaceTags", str(path)],
            check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE,
        )
        if hashlib.sha256(path.read_bytes()).digest() != before:
            git(root, "add", "--", name)
            print(f"Removed JPEG EXIF metadata: {name}")
    print(f"Checked EXIF metadata in {len(photos)} staged JPEG file(s).")


if __name__ == "__main__":
    try:
        main()
    except (OSError, RuntimeError, subprocess.CalledProcessError) as error:
        print(f"JPEG EXIF check failed: {error}", file=sys.stderr)
        sys.exit(1)
