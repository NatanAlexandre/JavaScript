// code.js

function calcularResultado() {
    var num = document.querySelector('input#num')
    var num1 = document.querySelector('input#num1')
    var opcoes = document.getElementById('opcoes')
    var result = document.getElementById('res')

    var operacao = opcoes.value;

    if (num.value !== '' && num1.value !== '') {
        if (operacao === 'mais') {
            var soma = Number(num.value) + Number(num1.value)
            result.innerHTML = `<h1>${num.value} + ${num1.value} = ${soma}</h1>`
        }
    
        if (operacao === 'menos') {
            var menos = Number(num.value) - Number(num1.value)
            result.innerHTML = `<h1>${num.value} - ${num1.value} = ${menos}</h1>`
        }
    
        if (operacao === 'dividir') {
            var divisao = Number(num.value) / Number(num1.value)
            result.innerHTML = `<h1>${num.value} / ${num1.value} = ${divisao}</h1>`
        }
    
        if (operacao === 'multiplicar') {
            var multiplicacao = Number(num.value) *  Number(num1.value)
            result.innerHTML = `<h1>${num.value} * ${num1.value} = ${multiplicacao}</h1>`
        }
    
        
        if (operacao === 'novalue') {
            result.innerHTML = '<h1>Selecione uma operação matemática para o resultado</h1>'
        }
    } else {
        result.innerHTML = '<h1>Digite um valor válido</h1>'
    }

}

function Limpar(){
    var clear = window.document.querySelector('div#res')
    clear.innerHTML = '<h1></h1>'
}