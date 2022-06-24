
function calculatePolish(expression){

 // задаем результат  = 0
const stack = [];

//устаавливаем разделитель по которому отеляем вх. значения:
const arr = expression.split(' ');

while (arr.length){
  const el = arr.pop();
  const numberedEl = Number(el);
  if (!isNaN(numberedEl)) {
    stack.push(numberedEl);
    continue;
  }

 const firstNumber = stack.pop();
 const secondNum  = stack.pop();

 switch(el){
  case '+':
    stack.push(firstNumber + secondNum);
    break;
  case '-':
    stack.push(firstNumber - secondNum);
    break;
  case '*':
    stack.push(firstNumber * secondNum);
    break;
  case '/':
    stack.push(firstNumber / secondNum);
    break;
 }
}
return stack[0];
}


console.log(calculatePolish('+ 3 4'));
console.log(calculatePolish('*(− 5 6) 7'));



// проверка на вхдящие символы
// if (typeof termInReversePolish !== 'string') {
//   throw new Error(
//     `No valid parameter given. String expected but ${typeof termInReversePolish} found.`);
// }

// if (termInReversePolish.search(/[^\d,+*\/-]/g) != -1) {
//     throw new Error(
//       'Given parameter contains illegal characters. Valid characters are: + - * / , 0-9');
// }

// проверка на последовательность
// проверка на корректность ввода: что есть пробелы






// читаем инпут



// в цикле
// определем символ
//  если это +-*/  запоминаем
//  если это (  - запоминаем
//  если это число
//  читаем следующий символ
