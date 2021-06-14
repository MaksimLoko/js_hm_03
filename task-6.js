/*
Задание 6
Напиши функцию calculateTotalPrice(allProdcuts, productName), 
которая получает массив объектов и имя продукта (значение свойства name). 
Возвращает общую стоимость продукта (цена * количество).
Вызовы функции для проверки работоспособности твоей реализации.
*/

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

// let newProd = [];
// for (let product of products) {
//   // console.log(product);
//   newProd.push(product.price * product.quantity);
// }
// console.log(newProd[0]);
// console.log(newProd[2]);
const calculateTotalPrice = function (allProdcuts, productName) {
  for (let product of allProdcuts) {
    if (productName === product.name) {
      // console.log(product.name);
      let Sum = product.price * product.quantity;
      return Sum;
    }
  }
};

console.log(calculateTotalPrice(products, "Радар")); // 5200
console.log(calculateTotalPrice(products, "Дроид")); // 2800
