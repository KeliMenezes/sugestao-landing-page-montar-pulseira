// Função para adicionar miçanga
const adicionarMicanga = (cor) => {
    const micanga = document.createElement('div');
    micanga.style.backgroundColor = cor;
    micanga.className = 'micanga';
    document.getElementById('sequencia-pulseira').appendChild(micanga);
};

// Função para limpar a pulseira
const limparPulseira = () => {
    document.getElementById('sequencia-pulseira').innerHTML = '';
};

// Função para salvar a pulseira
const salvarPulseira = () => {
    const sequencia = document.getElementById('sequencia-pulseira').innerHTML;
    localStorage.setItem('pulseira', sequencia);
    alert('Pulseira salva com sucesso!');
};

// Função para carregar a pulseira salva
const carregarPulseira = () => {
    const sequencia = localStorage.getItem('pulseira');
    if (sequencia) {
        document.getElementById('sequencia-pulseira').innerHTML = sequencia;
    } else {
        alert('Nenhuma pulseira salva encontrada.');
    }
};

// Função para validar o formulário
const validarFormulario = () => {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const endereco = document.getElementById('endereco').value;
    const telefone = document.getElementById('telefone').value;

    if (nome === '' || email === '' || senha === '' || endereco === '' || telefone === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return false;
    }
    alert('Cadastro realizado com sucesso!');
    return true;
};
