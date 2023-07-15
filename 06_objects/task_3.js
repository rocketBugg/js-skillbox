let objects = [
  { name: 'Василий', surname: 'Васильев' },
  { name: 'Иван', surname: 'Иванов' },
  { name: 'Пётр', surname: 'Петров' },
]


function filter(arr, prop, value){
let emptyArray= [];
for (i = 0; i < arr.length; i++) {
  let entries = Object.entries(arr[i]);
 for (let [keys, values] of entries) {
   if (keys === prop && values === value) {
    emptyArray.push(arr[i])
   } ;
 }
}
return emptyArray
}
let result = filter(objects, 'name', 'Иван');
console.log(result);

// Решил 2 способами, какой из них на реальной практике будет лучше, чтобы им воспользоваться? (2 способ указал ниже)

// function filter(arr, prop, value){
//   let emptyArray= [];
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i][prop] === value) {
//       emptyArray.push(arr[i]);
//     }
//   }
//   return emptyArray;
// }
//   let result = filter(objects, 'name', 'Иван');
//   console.log(result);

