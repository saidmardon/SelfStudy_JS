let obj = { // можно добавлять новые ствойство в объект
      "name": "saymumin",
      "phone": "900330687",
}

Object.assign(obj,{["I Like Javascript"]: true, city: "Kulob"})
console.log(obj)
/* {
      name: 'saymumin',  
      phone: '900330687',
      'I Like Javascript': true,
      city: 'Kulob'
} */

//Метод — это функция, хранимая как свойство