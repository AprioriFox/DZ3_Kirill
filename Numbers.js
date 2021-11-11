const numbers = (num1, num2) => {
    if (num1 > num2) {
        console.log("Перввое число больше второго")
    }
    else if (num1<num2){
        console.log("Второе число больше первого")
    }
    else {
        console.log("Числа равны")
    }
}
let number1 = prompt("ВВедите первое число");
let number2 = prompt("ВВедите второе число");
let num1=Number(number1);
let num2=Number(number2);
numbers(num1, num2);