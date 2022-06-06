let arr = prompt("Введите число или несколько чисел через запятую",);
let n = [arr];
let isPrime
for (let i = 2; i < n.length; i++) {

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrime = false
            console.log('НЕ является простым')
            break
        }
        else {
            isPrime = true
            console.log('является простым')
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



