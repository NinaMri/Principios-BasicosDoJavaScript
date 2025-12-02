//ATIVIDADE 1
function atividade1() {
    let numero = Number(prompt("Informe um número: "));
    let mensagem = "";

    if (numero > 0) {
        mensagem = "Número positivo!";
    } else if (numero < 0) {
        mensagem = "Número negativo!";
    } else {
        mensagem = "Número zero.";
    }

    alert(mensagem);
    console.log(`(${numero}) ${mensagem}`);
}
//----------------------------------------------------------------------
//ATIVIDADE 2
function atividade2() {
    let idade = Number(prompt("Informe sua idade: "));
    let mensagem = "";

    if (idade >= 18) {
        mensagem = "Você é maior de idade!";
    } else {
        mensagem = "Você é menor de idade!";
    }
    
    alert(mensagem);
    console.log(`(${idade}) ${mensagem}`);
}
//----------------------------------------------------------------------
//ATIVIDADE 3
function atividade3() {
    let numero = Number(prompt("Informe um número: "));
    let mensagem = "";

    if (numero % 2 === 0) {
        mensagem = "Número par!";
    } else {
        mensagem = "Número ímpar!";
    }

    alert(mensagem);
    console.log(`(${numero}) ${mensagem}`);
}
//----------------------------------------------------------------------
//ATIVIDADE 4
function atividade4() {
    let n1 = Number(prompt("Informe um número: "));
    let n2 = Number(prompt("Informe outro número: "));
    let mensagem = "";

    if (n1 > n2) {
        mensagem = "O primeiro número ("+n1+") é maior!";
    } else if (n1 < n2) {
        mensagem = "O segundo número ("+n2+") é maior!";
    } else {
        mensagem = "Números iguais!";
    }

    alert(mensagem);
    console.log(`(${n1}, ${n2}) ${mensagem}`);
}
//----------------------------------------------------------------------
//ATIVIDADE 5
function atividade5() {
    let nota = Number(prompt("Informe sua nota: "));
    let mensagem = "";

    if (nota >= 0 && nota <= 4) {
        mensagem = "Nota baixa.";
    } else if (nota >= 5 && nota <= 7) {
        mensagem = "Nota média.";
    } else if (nota >= 8 && nota <= 10) {
        mensagem = "Nota alta.";
    } else {
        mensagem = "Nota inválida.";
    }

    alert(mensagem);
    console.log(`(${nota}) ${mensagem}`);
}
//----------------------------------------------------------------------
//ATIVIDADE 6
function atividade6() {
    let peso = Number(prompt("Informe seu peso(kg): "));
    let altura = Number(prompt("Informe sua altura(m Ex:1.60): "));
    let imc = peso / (altura * altura);
    let imcFormatado = imc.toFixed(2);
    let mensagem = "";

    if (imc < 18.5) {
        mensagem = "IMC = "+imcFormatado+" - Abaixo do peso.";
    } else if (imc >= 18.5 && imc < 25) {
        mensagem = "IMC = "+imcFormatado+" - Peso normal.";
    } else {
        mensagem = "IMC = "+imcFormatado+" - Acima do peso.";
    }

    alert(mensagem);
    console.log(`(Peso: ${peso}, Altura: ${altura}) ${mensagem}`);
}
//----------------------------------------------------------------------
//ATIVIDADE 7
function atividade7() {
    let n1 = Number(prompt("Informe um número: "));
    let op = prompt("Informe o operador (+)(-)(*)(/): ");
    let n2 = Number(prompt("Informe outro número: "));
    let mensagem = "";

    switch (op) {
        case "+":
            mensagem = "Resultado de "+n1+" + "+n2+" = "+(n1 + n2);
            break;
        case "-":
            mensagem = "Resultado de "+n1+" - "+n2+" = "+(n1 - n2);
            break;
        case "*":
            mensagem = "Resultado de "+n1+" x "+n2+" = "+(n1 * n2);
            break;
        case "/":
            if (n2 === 0) {
                mensagem = "Não é possível dividir por zero!";
            } else {
                mensagem = "Resultado de "+n1+" / "+n2+" = "+(n1 / n2);
            }
            break;

        default:
            mensagem = "Operação inválida.";
            break;
    }

    alert(mensagem);
    console.log(mensagem);
}
//----------------------------------------------------------------------
//ATIVIDADE 8
function atividade8() {
    let numero = Number(prompt("Informe um número: "));
    let mensagem = "";

    switch (numero) {
        case 1: mensagem = "Domingo!"; break;
        case 2: mensagem = "Segunda!"; break;
        case 3: mensagem = "Terça!"; break;
        case 4: mensagem = "Quarta!"; break;
        case 5: mensagem = "Quinta!"; break;
        case 6: mensagem = "Sexta!"; break;
        case 7: mensagem = "Sábado!"; break;
        default: mensagem = "Número inválido.";
        break;
    }
    
    alert(mensagem);
    console.log(`(${numero}) ${mensagem}`);
}
//----------------------------------------------------------------------
//ATIVIDADE 9
function atividade9() {
    let n1 = Number(prompt("Informe um número: "));
    let n2 = Number(prompt("Informe outro número: "));
    let mensagem = "";

    if (n2 === 0) {
        mensagem = "Não é possível dividir por zero!"
    } else if (n1 % n2 === 0) {
        mensagem = "O primeiro número é múltiplo do segundo.";
    } else {
        mensagem = "Não é múltiplo.";
    }

    alert(mensagem);
    console.log(`(${n1}, ${n2}) ${mensagem}`);
}
//----------------------------------------------------------------------
//ATIVIDADE 10
function atividade10() {
    let usuario = prompt("Usuário:");
    let senha = prompt("Senha:");
    let mensagem = ""

    if (usuario === "Usu4r10" && senha === "1234") {
        mensagem = "Login bem-sucedido!";
    } else {
        mensagem = "Usuário ou senha incorretos.";
    }

    alert(mensagem);
    console.log(`(${usuario}, ${senha}) ${mensagem}`);
}