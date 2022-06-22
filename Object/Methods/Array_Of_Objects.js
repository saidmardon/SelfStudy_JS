let obj = [     //Массив из объектов
{
     "color": "green",
     "numbers": ["2222","3333"],
     "checked": true
},
{
     "color": "yellow",
     "numbers": ["1111","4444"],
     "checked": false
},
{
     "color": "blue",
     "numbers": ["5555","8888"],
     "checked": true
}
]
console.log(obj[1]["color"])//yellow
console.log(obj[2]["numbers"][1])//8888
console.log(obj)
/* [
      { color: 'grren', numbers: [ '2222', '3333' ], checked: true },  { color: 'grren', numbers: [ '1111', '4444' ], checked: false },
      { color: 'grren', numbers: [ '5555', '8888' ], checked: true }
] */