var input = prompt("Введите число или несколько чисел через запятую",);
let n = [input];

let isPrime;

for (index = 0; index < n.length; ++index) {

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

if (isPrime)
{
    alert($i, 'является простым')
}
else
{
    alert($i, 'НЕ является простым')
}

}
