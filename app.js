
let amigos = [];
let lista = document.getElementById('listaAmigos');
let amigoInput = document.getElementById('amigo');
let resultado = document.getElementById('resultado');

function apresentarLista() {
    lista.innerHTML = "";  
    amigos.forEach(amigo => {  
    let itemLista = document.createElement("li");
    itemLista.textContent = amigo;
    lista.appendChild(itemLista);
    });
}

// Adiciona evento para capturar a tecla "Enter"
amigoInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Evita o comportamento padrão do Enter em formulários
        adicionarAmigo();
    }
});

function adicionarAmigo() {
    let amigo = amigoInput.value.trim();
    
    if(amigo === ""){
        alert("Por favor insira um nome. Precisa ter pelo menos 1 caractere");
    }
    else if(amigos.includes(amigo)){
        alert("Este nome já foi inserido. Caso sejam nomes iguais, você pode acrescentar algum sobrenome ou apelido");
    }
    else{
        amigos.push(amigo);
    }
    
    
    apresentarLista();
    limparCampo();
    
}

function limparCampo() {
    amigoInput.value = '';
}

function sortearAmigo() {
    if(amigos.length < 2){
        alert('Você precisa adicionar pelo menos 2 nomes para serem sorteados');
    }

    let amigoSorteado = Math.floor(Math.random() * amigos.length);
    resultado.innerHTML = `Amigo sorteado: ${amigos[amigoSorteado]}`;

}

