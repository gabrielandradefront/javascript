function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano- Number (fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    

        if (fsex[0].checked){
            gênero = 'Homem'
            
            if (idade >= 0 && idade<12) {
                img.setAttribute('src', 'imagens/bbM.png')
            }
            else if(idade < 60){
                img.setAttribute('src', 'imagens/jovemM.png')
            }
            else{
                img.setAttribute('src', 'imagens/idosoM.png')
            }
        }
        else if (fsex[1].checked){
            gênero = 'Mulher'

            if (idade >=0 && idade<12) {
                img.setAttribute('src', 'imagens/bbF.png')
            }
            else if (idade < 60) {
                img.setAttribute('src', 'imagens/jovemF.png')
            }
            else{
                img.setAttribute('src', 'imagens/idosaF.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${gênero} de ${idade} anos`
        res.appendChild(img)

    }

    
}
