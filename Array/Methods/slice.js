let arr = ["yes", "no", 3, 6, 8]
console.log(arr.slice(1)) //[ 'no', 3, 6, 8 ]
console.log(arr.slice(1, 4)) //не включая четвертый индекс [ 'no', 3, 6 ]
console.log(arr.slice(-2)) //[ 6, 8 ]

let arr2 = [false, 2, "said", true, "add"]
console.log(arr2.slice(-3, -1)) //[ 'said', true ]

let arr3 = [false, 2, "said", true, "add"]
console.log(arr3.slice(-3, -2)) //[ 'said' ]





/* Он возвращает новый массив, в который копирует элементы, 
начиная с индекса start и до end (не включая end). 
Оба индекса start и end могут быть отрицательными. 
В таком случае отсчёт будет осуществляться с конца массива. */