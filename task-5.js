/*
Задание 5
Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов 
и имя свойства. Возвращает массив значений определенного свойства prop из 
каждого объекта в массиве.
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
//   newProd.push(product.name);
// }
// console.log(newProd);

function getAllPropValues(arr, prop) {
  let newProd = [];
  for (let product of arr) {
    if (product[prop]) {
      newProd.push(product[prop]);
    }
  }
  return newProd;
}
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']
console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]
console.log(getAllPropValues(products, "category")); // []

//===========================================================
// МАСТЕР-КЛАСС ОТ РОМАНА БОБРОВСКОГО (решение двумя способами)

// 1-й способ ================================
// const getAllPropValues = function (arr, prop) {
//   let newProd = [];
//   for (let newArr = 0; newArr < arr.length; newArr += 1) {
//     let calc = arr[newArr];
//     if (calc[prop]) {
//       newProd.push(calc[prop]);
//
//     }
//   }
//   return newProd;
// };
// 2-й способ ================================
// const getAllPropValues = function (arr, prop) {
//   let newProd = [];
//   for (const iterator of arr) {
//     let newArr = iterator[prop];
//     if (newArr) {
//       newProd.push(newArr);
//
//     }
//   }
//   return newProd;
// };
