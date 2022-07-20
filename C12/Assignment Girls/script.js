const getMakeUpBrand = function (brand, index) {
  fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);

      for (let i = 0; i < result.length; i++) {
        let productHtml = createProdEl(result[i], i);
        document
          .querySelector(".brand:nth-of-type(" + index + ")")
          .insertAdjacentHTML("beforeend", productHtml);
      }
    })
    .catch((error) => console.log("error", error));
};

const createProdEl = function (result) {
  let html = `
  <div class="product-container">
    <a href="${result.product_link}" target="_blank">
          <div class="brandName">${result.brand}</div>
          <div class="makeUpName">${result.name}</div>
          <div class="makeUpImg">
            <img class="img" src="${result.image_link}"
          </div>`;

  html += result.price_sign
    ? `<div class="price">${result.price}${result.price_sign}</a></div>`
    : `<div class="price">${result.price}</a></div>`; 
 
  return html;
};

window.addEventListener("load", (event) => {
  const container = document.querySelector(".container");

  const brands = ["maybelline", "l'oreal", "revlon"];
  for (let i = 0; i < brands.length; i++) {
    container.insertAdjacentHTML("beforeend",'<div class="brand"></div> <hr>');
    getMakeUpBrand(brands[i], i + 1);
  }
});
