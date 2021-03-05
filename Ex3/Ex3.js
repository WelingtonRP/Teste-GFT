var number = parseInt(prompt("Digite o valor do multiplicando entre 0 e 5000: "));

if (number < 0 || number > 5000) {
    throw alert("Favor seguir as regras.");
}

var number2 = parseInt(prompt("Digite o valor do início do intervalo entre 0 e 5000: "));

if (number2 < 0 || number2 > 5000) {
    throw alert("Favor seguir as regras.");
}

var number3 = parseInt(prompt("Digite o valor do fim do intervalo entre 0 e 5000 e maior que o início do intervalo: "));

if (number3 < 0 || number3 > 5000 || number3 <= number2 || (number3 - number2 >= 10)) {
    throw alert("Favor seguir as regras.");
}

for (var i = number2; i <= number3; i++) {
    console.log(number +" x "+ i + " = " + number * i);
}