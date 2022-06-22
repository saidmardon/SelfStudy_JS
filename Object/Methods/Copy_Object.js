let obj = { 
      "name": "saymumin",
      "phone": "900330687",
      "hobby": {
            "first": "coding",
            "second": "football"
      }
}
let obj2 = obj
obj2.phone = "9999"
console.log(obj)
/* {
      name: 'saymumin',
      phone: '9999',
      hobby: { first: 'coding', second: 'football' }
} */


/* При копировании объекта в другую переменную сам объект не дублируется, 
а копируется только ссылка на него */