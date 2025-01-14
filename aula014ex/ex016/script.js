function cont(){
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let cont = document.getElementById('cont')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert ('[ERRO]')
        cont.innerHTML = 'Não foi possível contar'
    }
    else{
        cont.innerHTML = 'Contando: '

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert ('O passo definido é inválido, considerando passo = 1')
            p = 1
        }
        if(i < f){
            for(let c = i; c <= f; c += p){
            cont.innerHTML +=`${c}, \u{1F449}`
            }
        }
        else{
            for(let c = i; c >= f; c -= p)
            cont.innerHTML +=`${c}, \u{1F449}`
        }
        cont.innerHTML += `\u{1F911}`
    }
}