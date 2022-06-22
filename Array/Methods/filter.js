let people = [
      {id: 1, name: "said"},
      {id: 2, name: "mard"},
      {id: 3, name: "golib"},
      {id: 4, name: "najib"}
]
let a = people.filter(function(item){
      if(item.id<3) return item //получаем массив из двух элементов
})
console.log(a) //[ { id: 1, name: 'said' }, { id: 2, name: 'mard' } ]