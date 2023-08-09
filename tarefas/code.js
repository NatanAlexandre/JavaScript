function AdicionarLinha(){
    var tabela = window.document.querySelector('tbody')
    var linha = tabela.insertRow(tabela.rows.length)
    var tarefa = linha.insertCell(0)
    var feito = linha.insertCell(1)
    var data = linha.insertCell(2)
    
    tarefa.innerHTML = '<input type="text" class="tarefa_input" placeholder="Digite sua tarefa"'
    feito.innerHTML = '<input type="checkbox" name="feito">'
    data.innerHTML = '<input type="date">'
}

function ApagarLinha(){
    var tabela = window.document.querySelector('tbody')
    var linha = tabela.deleteRow(tabela.rows)
}