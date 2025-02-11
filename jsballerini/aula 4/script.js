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

    for(let ini = 0; ini <  tarefas.length; ini++){
    
    let novaT = document.createElement("li")

    novaT.textContent = tarefas[ini]

    let botaoL = document.createElement("button")
    botaoL.className = "remover"
    botaoL.textContent = "Remover"
    botaoL.onclick = () => removerTarefa(ini)

    novaT.appendChild(botaoL)
    listaT.appendChild(novaT)
    }
  }
  }
  function removerTarefa(ini) {
    tarefas.splice(ini, 1)
  }
  