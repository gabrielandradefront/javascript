function  carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora}h`
if (hora>=5 && hora<12) {
    img.src='imagens/manhãM.png'
    document.body.style.background= '#876B4F'
} else if(hora>=12 && hora<18){
    img.src='imagens/tardeM.png'
    document.body.style.background= '#FECB76'
}
else{
    img.src='imagens/noiteM.png'
    document.body.style.background= '#503A5A'

}
}