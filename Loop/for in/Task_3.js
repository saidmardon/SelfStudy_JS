//Цикл for in не рекомендуеться использовать к обычным массивам  

let obj = {
      name: "Saymumin",
      age: 35,
      phone: 900330687
}
for(let key in obj){
      console.log(`Key ${key}, Value ${obj[key]}`)
}