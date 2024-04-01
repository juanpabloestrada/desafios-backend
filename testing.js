const ProductManager = require("./productManager.js");

const producto = new ProductManager();

console.log(
  producto.addProduct(
    "Laptop",
    "Lenovo 29",
    5000,
    "https://img1.com",
    "s23hg6",
    20
  )
);
console.log(
  producto.addProduct(
    "Laptop",
    "Lenovo 28",
    5000,
    "https://img1.com",
    "s23hg67",
    25
  )
);

console.log(producto.getProducts());
