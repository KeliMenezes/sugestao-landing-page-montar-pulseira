let coresPulseira = [];

const adicionarMicanga = () => {
    const cor = document.getElementById('cor-micanga').value;
    coresPulseira.push(cor);
    atualizarExibicaoPulseira();
}

const limparPulseira = () => {
    coresPulseira = [];
    atualizarExibicaoPulseira();
}

const atualizarExibicaoPulseira = () => {
    const sequenciaPulseira = document.getElementById('sequencia-pulseira');
    sequenciaPulseira.innerHTML = '';
    coresPulseira.forEach(cor => {
        const micanga = document.createElement('div');
        micanga.className = 'micanga';
        micanga.style.backgroundColor = cor;
        sequenciaPulseira.appendChild(micanga);
    });
}

const salvarPulseira = () => {
    localStorage.setItem('coresPulseira', JSON.stringify(coresPulseira));
    alert('Pulseira salva com sucesso!');
}

const carregarPulseira = () => {
    const coresSalvas = JSON.parse(localStorage.getItem('coresPulseira'));
    if (coresSalvas) {
        coresPulseira = coresSalvas;
        atualizarExibicaoPulseira();
        alert('Pulseira carregada com sucesso!');
    } else {
        alert('Nenhuma pulseira salva encontrada.');
    }
}
