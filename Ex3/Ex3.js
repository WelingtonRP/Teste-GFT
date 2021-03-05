//pegando o valor do usuário para o multiplicando
var number = parseInt(prompt("Digite o valor do multiplicando entre 0 e 5000: "));

//colocando as condições impostas
if (number < 0 || number > 5000) {
    //disparando erro
    throw alert("Favor seguir as regras.");
}

//pegando o valor do usuário para o início do intervalo
var number2 = parseInt(prompt("Digite o valor do início do intervalo entre 0 e 5000: "));

//colocando as condições impostas
if (number2 < 0 || number2 > 5000) {
    //disparando erro
    throw alert("Favor seguir as regras.");
}

//pegando o valor do usuário para o fim do intervalo
var number3 = parseInt(prompt("Digite o valor do fim do intervalo entre 0 e 5000 e maior que o início do intervalo: "));

//colocando as condições impostas
if (number3 < 0 || number3 > 5000 || number3 <= number2 || (number3 - number2 >= 10)) {
    //disparando erro
    throw alert("Favor seguir as regras.");
}

//fazendo o loop
for (var i = number2; i <= number3; i++) {
    console.log(number +" x "+ i + " = " + number * i);
}