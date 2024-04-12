// code

function calcular(){
    let peso = parseFloat(document.getElementById("idpeso").value.replace(",", "."));
    let altura = parseFloat(document.getElementById("idaltura").value.replace(",", "."));
    let resultado = document.getElementById("imc_resultado");
    
    if(!isNaN(peso) && !isNaN(altura)) {
        var imc = peso / (altura * altura);
        var status = "";

        if (imc < 18.5) {
            status = 'Abaixo do peso';
        } else if (imc < 24.9) {
            status = 'Peso normal';
        } else if (imc < 29.9) {
            status = 'Sobrepeso';
        } else if (imc < 34.9) {
            status = 'Obesidade grau 1';
        } else if (imc < 39.9) {
            status = 'Obesidade grau 2';
        } else if (imc >= 39.9){
            status = 'Obesidade grau 3';
        } else {
            status = 'Nenhum valor inserido';
        }
    }

    resultado.innerHTML = `<h1 style="background-color: #364fdb9a;">Resultado</h1><h2>Valor IMC: ${imc.toFixed(2)}</h2>`;
    resultado.innerHTML += `<h2>Status: ${status}</h2>`;

}

function limpar() {
    let clear = document.getElementById("imc_resultado");
    clear.innerHTML = `<h1 style="background-color: #364fdb9a;">Resultado</h1><h2>Valor IMC: </h2><h2>Status: </h2>`;
}