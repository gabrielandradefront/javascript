let tarefas = []

function adicionarTarefa() {

  let suaTarefa = document.getElementById("suaTarefa")

  //Variaável que pega o valor dentro do elemento acima
  let tarefa = suaTarefa.value.trim()

  if (tarefa == "") {
    window.alert("Escreva uma atividade no campo abaixo")

  } else {


    document.getElementById("mensagem").textContent = "Tarefa Adicionada com ssucesso";

    tarefas.push(tarefa)
    renderizarT()
    suaTarefa.value = ""
  }
  }
  

  function renderizarT() {
    let listaT = document.getElementById("listaT")

    listaT.innerHTML = ""

    for(let ini = 0; ini <  tarefas.length; ini++){
    
    let novaT = document.createElement("li")

    novaT.textContent = tarefas[ini]

    let botaoL = document.createElement("button")
    botaoL.className = "remover"
    botaoL.textContent = "Remover"
    botaoL.onclick = () => removerTarefa(ini)

    let botaoEd = document.createElement("button")
    botaoEd.className = "editar"
    botaoEd.textContent = "Editar"
    botaoEd.onclick = () => editarT(ini)

    novaT.appendChild(botaoL)
    novaT.appendChild(botaoEd)
    listaT.appendChild(novaT)
    }
  }
  function removerTarefa(ini) {
    tarefas.splice(ini, 1)
    renderizarT()
  }
  
  function editarT(ini) {
    let tarefaEditada = window.prompt('Edite a Tarefa')
    
    if (tarefaEditada.trim() !== "") {
      tarefas[ini] = tarefaEditada
      renderizarT()
    }
  }
  function excluirTarefas() {
    tarefas.length = 0
    renderizarT()
    document.getElementById("mensagem").textContent = "Lista limpa";
  }
  