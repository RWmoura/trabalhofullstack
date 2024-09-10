document.getElementById('cadastroPessoaForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;

    const response = await fetch('http://localhost:8080/api/pessoas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, cpf, telefone })
    });

    if (response.ok) {
        alert('Pessoa cadastrada com sucesso!');
        listarPessoas();
    } else {
        alert('Erro ao cadastrar pessoa.');
    }
});

async function listarPessoas() {
    const response = await fetch('http://localhost:8080/api/pessoas');
    const pessoas = await response.json();


