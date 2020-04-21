const calculadora = require("./calc");
const prompt = require("prompt-sync")();

function options() {
  console.log(`
  1 - somar
  2 - subtrair
  3 - multiplicar
  4 - dividir
  0 - sair`);
}

function optionSelected(opcao) {
  const num1 = Number(prompt("Digite o primeiro número: "));
  const num2 = Number(prompt("Digite o segundo número: "));

  if (opcao == "1") {
    return calculadora.soma(num1, num2);
  }
  if (opcao == "2") {
    return calculadora.subtracao(num1, num2);
  }
  if (opcao == "3") {
    return calculadora.multiplicacao(num1, num2);
  }
  if (opcao == "4") {
    return calculadora.divisao(num1, num2);
  }
}

let opcao;
while (opcao != "0") {
  options();
  opcao = prompt("Qual a opção? ");
  if (opcao != "0") {
    const resultado = optionSelected(opcao);
    console.log(`O resultado é ${resultado}`);
  } else {
    console.log("Tchau!");
  }
}
