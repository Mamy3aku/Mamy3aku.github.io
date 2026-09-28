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
      image.alt = item.name + "の画像";
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
        { title: "品名", field: "name", minWidth: 150, widthGrow: 2, formatter: "textarea", variableHeight: true },
        { title: "製造年", field: "productionYear", minWidth: 90 },
        { title: "入手日", field: "acquiredDate", minWidth: 110 }
      ]
    });
    fallback.hidden = true;
  } catch (error) {
    grid.replaceChildren();
    console.error("グッズ一覧を表示できませんでした。", error);
  }
});
