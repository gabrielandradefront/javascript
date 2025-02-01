//function está criando a ação que vai ser executada

function adicionarTarefa() {

  let tarefas = []
  let suaTarefa = document.getElementById("suaTarefa")

  //Variaável que pega o valor dentro do elemento acima
  let tarefa = suaTarefa.value.trim()

  if (tarefa == "") {
    window.alert("Escreva uma atividade no campo abaixo")

  } else {

    let mensagem = "Tarefa Adicionada"

    //Variável do elemento input (lugar onde tem entrada de informação)

    document.getElementById("mensagem").textContent = mensagem;

    tarefas.push(tarefa)
    renderizarT()
  }
  
  suaTarefa.value = ""

  function renderizarT() {
    let listaT = document.getElementById("listaT")

    let ini = 0
    for(ini; ini <  tarefas.length; i++){
    
    //Essa linha está criando um novo elemento, e transformando ele numa variável
    let novaT = document.createElement("li")

    novaT.textContent = tarefa

    //posiciona o elemento li no lugar certo, sem o posicionamento a tag não funciona
    listaT.appendChild(novaT)
    }
  }
  }
  