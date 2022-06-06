var input = prompt("Введите число или несколько чисел через запятую",);
let n = [input];

let isPrime;
let i;
for (index = 2; index < n.length; index++) {

function Prime(n)
{
  for (let i = 2; i <= n; i++)
  {
    isPrime = true
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrime = false
            break
        }
    }
    if (isPrime) {
        console.log(i)
    }
  }
}
}
if (isPrime)
{
    alert( 'является простым')
}
else
{
    alert( 'НЕ является простым')
}


