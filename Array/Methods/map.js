//Работает так же как и forEach, но он позволяет создавать новый массив

let arr = [1, 2, 4, 6]
let newArr = arr.map(function(item){
     return item*3
})
console.log(newArr)//[ 3, 6, 12, 18 ] Новый массив
console.log(arr)//[ 1, 2, 4, 6 ] Прежний массив не изменился