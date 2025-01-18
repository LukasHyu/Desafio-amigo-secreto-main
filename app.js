//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Função para adicionar amigo à lista
function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo'); // Pega o valor do input da pagina HTML
    let listaAmigos = document.getElementById('listaAmigos'); // Pega a lista de amigos da pagina HTML

    let nome = nomeAmigo.value.trim(); // Remove os espaços em branco do final do nome
    if (nome) {
        let li = document.createElement('li'); // Cria um elemento chamdo li
        li.textContent = nome; // Adiciona o nome do amigo na li
        listaAmigos.appendChild(li); // Adiciona o nome do amigo na lista de amigos
        nomeAmigo.value = ''; // Limpa o nome na pagina HTML
    } else {
        alert('Informe o nome do amigo!'); // Alerta para quando clicar em adcionar sem informar o nome
    }
}

// Função para fazer o sorteio dos nomes da lista

function sortearAmigo() {
    let listaAmigos = document.getElementById('listaAmigos'); // Pega a lista de amigos da pagina HTML
    let resultado = document.getElementById('resultado'); // Pega o resultado da pagina HTML
    let amigos = listaAmigos.getElementsByTagName('li'); // Pega os nomes da lista de amigos
    if (amigos.length > 0) { // Verifica se a lista de amigos não está vazia
        let indiceSorteado = Math.floor(Math.random() * amigos.length); // Sorteia um dos nomes da lista aleatoriamente
        let nomeSorteado = amigos[indiceSorteado].textContent; // Pega o nome sorteado

        // Remover o nome sorteado da lista
        listaAmigos.removeChild(amigos[indiceSorteado]);

    // Exibe o nome sorteado
    resultado.innerHTML = `<li>Amigo sorteado: <strong>${nomeSorteado}</strong></li>`; // Exibe o nome sorteado
} else {
    resultado.innerHTML = '<li>A lista está vazia. Adicione amigos primeiro!</li>'; // Exibe uma mensagem caso a lista esteja vazia
}
}