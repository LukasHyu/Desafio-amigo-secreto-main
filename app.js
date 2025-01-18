// Array para armazenar os amigos
let amigos = [];

// Função para adicionar amigo ao array e atualizar a lista 
function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo'); // Pega o valor do input da página HTML
    let listaAmigos = document.getElementById('listaAmigos'); // Pega a lista de amigos da página HTML

    let nome = nomeAmigo.value.trim(); // Remove espaços em branco no início e no fim do nome
    if (nome) {
        amigos.push(nome); // Adiciona o nome ao array
        atualizarLista(); // Atualiza a lista
        nomeAmigo.value = ''; // Limpa o campo de entrada
        nomeAmigo.focus(); // Retorna o foco para o input
    } else {
        alert('Informe o nome do amigo!'); // Exibe alerta caso o campo esteja vazio
    }
}

// Função para atualizar a lista de amigos
function atualizarLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista

    // Adiciona cada amigo do array como um item na lista
    amigos.forEach((amigo) => {
        let li = document.createElement('li'); // Cria um elemento <li>
        li.textContent = amigo; // Define o texto do <li> com o nome do amigo
        listaAmigos.appendChild(li); // Adiciona o <li> à lista
    });
}

// Função para sortear um amigo do array e remover o nome sorteado
function sortearAmigo() {
    let resultado = document.getElementById('resultado'); // Pega o elemento para exibir o resultado

    if (amigos.length > 0) {
        let indiceSorteado = Math.floor(Math.random() * amigos.length); // Sorteia um índice aleatório
        let nomeSorteado = amigos.splice(indiceSorteado, 1)[0]; // Remove o amigo sorteado do array e obtém o nome

        atualizarLista(); // Atualiza a lista após a remoção
        resultado.innerHTML = `<li>Amigo sorteado: <strong>${nomeSorteado}</strong></li>`; // Exibe o nome sorteado
    } else {
        resultado.innerHTML = '<li>A lista está vazia. Adicione amigos primeiro!</li>'; // Exibe mensagem se o array estiver vazio
    }
}
