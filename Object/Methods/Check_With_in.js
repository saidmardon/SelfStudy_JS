let obj = { //Оператор "in" проверяет
      "name": "saymumin",
      "phone": "900330687",
      "hobby": {
            "first": "coding",
            "second": "football"
      }
}
if("name" in obj){
      console.log(obj.name)//saymumin
}