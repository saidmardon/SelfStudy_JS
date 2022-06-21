let str = "Hello world";
console.log(str.length)//это числовое свойство, а не функция, добавлять скобки не нужно
//11
console.log(str.length-1)
//10
for(const char of str){
      console.log(char)
}
/* 
H
e
l
l
o

w
o
r
l
d 
*/


let str1 = str[0]
let str2 = str[6]
console.log(str1, str2) //H w
console.log(typeof str1) //string