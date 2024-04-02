const { log } = require("console");
const ProductManager = require("./productManager.js");

const producto = new ProductManager();

/*console.log(
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
console.log(
  producto.addProduct(
    "Laptop",
    "Lenovo 28",
    5000,
    "https://img1.com",
    "s23hg68",
    25
  )
);*/

// console.log(producto.getProducts());
// console.log(producto.getProductById(1));

//console.log(producto.deleteProduct(1));

const productoActualizar = {
    "id":39,
    "title":"Lapto 3",
    "description":"hp 39",
    "price":100,
    "thumbnail":"https://img10.com",

}


console.log(producto.updateProduct(3, productoActualizar));