function gerar(){
    let numero = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

     if(numero.value.length == 0){
        window.alert('[ERRP]')
     }
     else{
        let num = Number(numero.value)
        tab.innerHTML = ''
        //usando while
        /*let mult = 1
        while (mult < 10) {
            let item = document.createElement('option')
            item.text = `${num} X ${mult} = ${num*mult}`
            tab.appendChild(item)
            mult++
        }*/

        //usando for
        for(let mult = 1; mult < 10; mult++){
            let item = document.createElement('option')
            item.text = `${num} X ${mult} = ${num*mult}`
            tab.appendChild(item)
        }
     }
}