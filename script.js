function calculadora(){
    if (document.getElementById("txt0").value == 1){
        let num1 = document.getElementById("txt1").value;
        let num2 = document.getElementById("txt2").value;
        let total = (parseInt(num1)+parseInt(num2));
        swal(`O valor total da soma é:`, `${total}`);
    }
    else if (document.getElementById("txt0").value == 2) {
        let num1 = document.getElementById("txt1").value;
        let num2 = document.getElementById("txt2").value;
        let total = (num1-num2);
        swal(`O valor total da subtração é:`, `${total}`);
    }
    else if (document.getElementById("txt0").value == 3) {
        let num1 = document.getElementById("txt1").value;
        let num2 = document.getElementById("txt2").value;
        let total = (num1*num2);
        swal(`O valor total da multiplicação é:`, `${total}`);
    }
    else if (document.getElementById("txt0").value == 4) {
        let num1 = document.getElementById("txt1").value;
        let num2 = document.getElementById("txt2").value;
        let total = (num1/num2);
        swal(`O valor total da divisão é:`, `${total}`);
    }
    else{
        swal(`ERRO!`, `A opção está inválida!`);
    }
}

//o Swal substitui o Alert, deixando o design mais bonito.


// let opcao = prompt ("Escolha uma opção: 1 soma, 2 subtracao, 3 multiplicacao, 4 divisao.");
// let soma, div, mult, sub, resultado;
// let num1 = prompt ("Informe o numero 1");
// let num2 = prompt ("Informe o numero 2");

// if(opcao > 0 && opcao < 5){
//     switch(opcao){
//         case "1":
//             soma = (parseint(num1) + parseint(num2));
//             resultado = soma;
//             console.log(`O resultado da soma é: ${resultado}`);
//             break;
//         case "2":
//             sub = (num1 - num2);
//             resultado = sub;
//             console.log(`O resultado da subtracao é: ${resultado}`);
//             break;
//         case "3":
//             mult = (num1 * num2);
//             resultado = mult;
//             console.log(`O resultado da multiplicacao é: ${resultado}`);
//             break;
//         case "4":
//             div = (num1 / num2);
//             resultado = div;
//             console.log(`O resultado da divisao é: ${resultado}`);
//             break;
//     }
// }




