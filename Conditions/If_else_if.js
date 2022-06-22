/* ///диалоговые окна браузера

let age = prompt("How old are you?")
alert(`I am ${age} years old`)

let phone = prompt("What is your phone number?")
if(phone != null){
      alert(`My phone number is ${phone}`) //Если нажиматӣ ОТМЕНУ ничего не вводить
} else{
      alert("You press Cancel")
}


if(confirm("Delete your account?")){
      alert("Deleted")
}else{
      alert("Canceled")
}

//Тернарные операторы  "?:"
confirm("What is your email?") ? alert("My email is saidmardon") : alert("I have not an email")

//Both of them same */

let age = prompt("Enter your age")
if(age < 18){
      alert("Your age is smaller than 18")
}else if(age > 18){
      alert("Your age is bigger than 18")
}else {
      alert("Your age is equal to 18")
}

