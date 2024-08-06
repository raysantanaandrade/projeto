
function toggleMode() {
    const html = document.documentElement;

    // Alternar entre a classe 'light' e 'dark'
    html.classList.toggle('light');
    
    // Pegar a tag img
    const img = document.querySelector("#profile img");

    // Substituir a imagem com base no modo ativo
    if (html.classList.contains('light')) {
        // Se estiver em modo claro, adicionar a imagem light
        img.setAttribute('src', './assets/avatar-light.png');
    } else {
        // Se estiver em modo escuro, adicionar a imagem normal
        img.setAttribute('src', './assets/avatar.png');
    }
}





