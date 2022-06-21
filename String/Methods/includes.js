let str = "Saymumin"
console.log(str.includes("mum")) //true если нам необходимо проверить, есть ли совпадение, но позиция не нужна
console.log(str.includes("mum", 4)) //false Необязательный второй аргумент позволяет начать поиск с определённой позиции
console.log(str.includes("mum", 3)) //true
console.log(str.includes("mum", 1)) //true