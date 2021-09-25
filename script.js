let numeroUnico = document.getElementById("numeroUnico");
let todosNumeros = document.getElementById("todosNumeros");
let btn1 = document.getElementById("btn1");
let btn6 = document.getElementById("btn6");

btn1.addEventListener("click", gerar1Numero);
btn6.addEventListener("click", gerar6Numeros);

function gerar1Numero() {
  let umNumero = Math.ceil(Math.random() * 60);
  if (umNumero < 10) {
    umNumero = "0" + umNumero;
  }
  numeroUnico.innerHTML = "<span>" + umNumero + "</span>";
}

function gerar6Numeros() {
  let numerosSorteados = [];

  while (numerosSorteados.length < 6) {
    let aleatorio = Math.ceil(Math.random() * 60);

    if (numerosSorteados.indexOf(aleatorio) == -1)
      numerosSorteados.push(aleatorio);
  }
  console.log(numerosSorteados);

  let teste = numerosSorteados.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
  });

  if (teste[0] < 10) {
    teste[0] = "0" + teste[0];
  }
  if (teste[1] < 10) {
    teste[1] = "0" + teste[1];
  }
  if (teste[2] < 10) {
    teste[2] = "0" + teste[2];
  }
  if (teste[3] < 10) {
    teste[3] = "0" + teste[3];
  }

  console.log(teste);
  let resultado = teste.map((x) => "<span>" + x + "</span>");

  console.log(resultado.join(" "));
  todosNumeros.innerHTML = resultado.join("");
}
