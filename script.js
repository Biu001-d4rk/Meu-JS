//Faz o "submit" não recarregar a página após a função do "Enter"
document.getElementById("Enter").addEventListener("submit", function (event) {
    event.preventDefault(); })

  //Função de adicionar a tarefa
function adicionarTarefa() {
   
  // Mensagem exibida ao adicionar uma tarefa
    let mensagem = "Tarefa adicionada com sucesso!";
    let mensagemErro = "Escreva algo no campo de digitação"
    
    // Obtém o input onde o usuário digita a tarefa
    let inputTarefa = document.getElementById("inputTarefa")

    // Pega o texto digitado no input
      let tarefa = inputTarefa.value

      //Exibe a mensagem de Erro na tela
      if ( !(inputTarefa.value).trim() )
        //Mostra o Erro
         {document.getElementById("mensagemErro").textContent = mensagemErro
         //Garante com que a mensagem de sucesso suma
         document.getElementById("mensagem").textContent =""; return;
      }
      // Exibe a mensagem de sucesso na tela
     document.getElementById("mensagem").textContent = mensagem;
     document.getElementById("mensagemErro").textContent ="";

      // Obtém a lista de tarefas (ul ou ol)
      let listaTarefas = document.getElementById("listaTarefas")

      // Cria um novo item de lista (li)
      let novatarefa = document.createElement("li")

      // Define o texto da nova tarefa
      novatarefa.textContent = tarefa

    //está criando uma nova tarefa dentro da lista de tarefas
    listaTarefas.appendChild(novatarefa)

    // Limpa o campo de input
      inputTarefa.value = ""
 }