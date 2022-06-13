let number = 123.2341  //округляет строку до указанного числа десятичных знаков 
//(Если количество знаков после запятой больше, чем в числе, добавляются нули)
console.log(number.toFixed())//123
console.log(number.toFixed(1))//123.2
console.log(number.toFixed(2))//123.23
console.log(number.toFixed(3))//123.234