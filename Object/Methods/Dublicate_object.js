let student = {  //Дублирование объектов (Object.assign)
      "name": "Saymumin",
      "age": 34
}
let user = Object.assign({}, student)
user.age = 40

console.log(student)//{ name: 'Saymumin', age: 34 }
console.log(user)//{ name: 'Saymumin', age: 40 }


//Синтаксис
//Object.assign(куда(объект), что(свойство #1), что(свойство #2), ...)