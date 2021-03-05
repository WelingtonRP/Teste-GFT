//inicializando as variáveis
var number = 0;
var sum = 0;

//iniciando o loop
while (sum < 157) {
    //recebendo os valores do usuário no loop
    number = parseInt(prompt("Digite um número: "));
    if (number < 0) {
        //excluindo números negativos
        alert("Números negativos não são permitidos");
        sum -= number;
    }
    //finalizando a soma
    sum += number;
}

//mostrando o valor da soma
alert("O somatório foi " + sum);