var agora = new Date()
var hora= agora.getHours()
if(hora<12 && hora>6){
    console.log('Bom dia!!')
}
else if(hora>=12 && hora<18){
    console.log('Boa Tarde')
}
else{
    console.log('Boa Noite')
}