let arr = [2, "said", true]
console.log(arr.join()) //объединить элементы массива в строку
// 2,said,true
console.log(arr.join("")) //все склеиваються
//2saidtrue
console.log(arr.join("-")) // склеиваються через дефис
//2-said-true
console.log(arr.join(" / "))
//2 / said / true