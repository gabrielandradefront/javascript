//function está criando a ação que vai ser executada
function adicionarTarefa() {

    let mensagem = "Tarefa Adicionada"

    //Variável do elemento input (lugar onde tem entrada de informação)
    let suaTarefa = document.getElementById("suaTarefa")

    //Variaável que pega o valor dentro do elemento acima
    let tarefa = suaTarefa.value

    document.getElementById("mensagem").textContent = mensagem;

    let listaT = document.getElementById("listaT")
    
    //Essa linha está criando um novo elemento, e colocando transformando ele numa variável
    let novaT = document.createElement("li")

    novaT.textContent = tarefa

    //posiciona o elemento li no lugar certo, sem o posicionamento a tag não funciona
    listaT.appendChild(novaT)

    suaTarefa.value = ""
  }
  