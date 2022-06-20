//Универсальный метод Умеет всё: добавлять, удалять и заменять элементы.

let arr = ["said", "mard", true, "man", false]
arr.splice(1, 2, "OK", "See you") 
//начиная с позиции (индекс) 1, удалить 2 элемента, вместо них добавит новый элемент
console.log(arr)
//[ 'said', 'OK', 'See you', 'man', false ]

arr.splice(-1, 0, "Said") //добавляет элемент перед последним элементом массива
console.log(arr)
//[ 'said', 'OK', 'See you', 'man', 'Said', false ]

arr.splice(1) //Удаляет все с первого индекса до конца
console.log(arr) 
//[ 'said' ]