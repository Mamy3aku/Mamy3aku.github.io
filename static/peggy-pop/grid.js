document.addEventListener("DOMContentLoaded", function () {
  var grid = document.getElementById("peggy-grid");
  var dataElement = document.getElementById("peggy-goods-data");
  var fallback = document.getElementById("peggy-fallback");

  if (!grid || !dataElement || !fallback || typeof Tabulator === "undefined") {
    return;
  }

  try {
    var goods = JSON.parse(dataElement.textContent);
    function imageLinkFormatter(cell) {
      var item = cell.getRow().getData();
      var link = document.createElement("a");
      var image = document.createElement("img");
      link.href = item.url;
      link.setAttribute("aria-label", item.name + "の詳細を見る");
      image.src = item.image;
      image.alt = item.category + "の仮イラスト";
      image.width = 60;
      image.height = 60;
      link.appendChild(image);
      return link;
    }
    new Tabulator(grid, {
      data: goods,
      layout: "fitColumns",
      placeholder: "グッズは準備中です。",
      columns: [
        { title: "画像", field: "image", formatter: imageLinkFormatter, width: 78, minWidth: 78, headerSort: false },
        { title: "品名", field: "name", minWidth: 105, formatter: "textarea", variableHeight: true },
        { title: "種類", field: "category", minWidth: 85 },
        { title: "説明", field: "description", minWidth: 170, widthGrow: 2, formatter: "textarea", variableHeight: true },
        { title: "詳細", field: "url", formatter: "link", formatterParams: { label: "詳細を見る" }, minWidth: 90, headerSort: false }
      ]
    });
    fallback.hidden = true;
  } catch (error) {
    grid.replaceChildren();
    console.error("グッズ一覧を表示できませんでした。", error);
  }
});
