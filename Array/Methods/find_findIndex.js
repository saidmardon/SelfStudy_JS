let people = [
      {id: 1, name: "said"},
      {id: 2, name: "mard"},
      {id: 3, name: "golib"},
      {id: 4, name: "najib"}
]
let a = people.find(function(item){
      if(item.id==3) return item
})
console.log(a) //{ id: 3, name: 'golib' }


let b = people.findIndex(function(item){ //Возврашает индекс этого элемента
      if(item.id==2) return item
})
console.log(b) //1