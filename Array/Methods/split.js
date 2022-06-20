let names = "said, mansur, najib, golib";
let arr = names.split(", ") //разбивает строку на массив по заданному разделителю
console.log(arr)
//[ 'said', 'mansur', 'najib', 'golib' ]

let boys = "said-mansur-najib-golib";
let arr2 = boys.split("-") 
console.log(arr2)
//[ 'said', 'mansur', 'najib', 'golib' ]

let name = "saidmumin";
let arr3 = name.split("") //каждая буква становиться отдельным элементом массива
console.log(arr3)
/* [
      's', 'a', 'i',
      'd', 'm', 'u',
      'm', 'i', 'n'
] */
