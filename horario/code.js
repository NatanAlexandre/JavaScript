// code

function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${horas} horas.`

    if (hora >= 0 && hora < 12){
        // Bom dia!
        img.src = 'fotomanha.png'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde!
        img.src = 'fototarde.png'
    } else {
        // Boa noite!
        img.src = 'fotonoite.png'
    }
}