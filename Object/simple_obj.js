let student = {
      "name": "Saymumin",
      "age": 34,
      "hobby": "coding",
      "numbers": ["992900", "330687"],
      "checked": true
}
console.log(student.age)//34
console.log(student.numbers[0])//992900
console.log(student["numbers"][1])//330687

//Чтобы узнат какие ключи есть в объекте
console.log(Object.keys(student)) //Получаем массив из всех ключей объекта
//[ 'name', 'age', 'hobby', 'numbers', 'checked' ]

student["model"] = "Tayota"
console.log(student)
/* {
      name: 'Saymumin',
      age: 34,
      hobby: 'coding',
      numbers: [ '992900', '330687' ],
      checked: true,
      model: 'Tayota'
} */