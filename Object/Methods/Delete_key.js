let obj = {
      "name": "saymumin",
      "phone": "900330687",
      "hobby": {
            "first": "coding",
            "second": "football"
      }
}
delete obj.hobby.second
console.log(obj) //{ name: 'saymumin', phone: '900330687', hobby: { first: 'coding' } }