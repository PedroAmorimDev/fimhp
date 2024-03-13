const form = document.querySelector("#formularioEntrar");

form.addEventListener("submit", function validacao(event) {
    event.preventDefault();

    function showLoadingScreen() {
        const loadingScreen = document.createElement('div');
        loadingScreen.id = 'loadingScreen';
        loadingScreen.style.position = 'fixed';
        loadingScreen.style.left = '0';
        loadingScreen.style.top = '0';
        loadingScreen.style.width = '100%';
        loadingScreen.style.height = '100%';
        loadingScreen.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        loadingScreen.style.display = 'flex';
        loadingScreen.style.justifyContent = 'center';
        loadingScreen.style.alignItems = 'center';
        loadingScreen.innerHTML = '<h1>Carregando...</h1>';
        document.body.appendChild(loadingScreen);
    }
    
    // Função para esconder a tela de carregamento
    function hideLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            document.body.removeChild(loadingScreen);
        }
    }


    let hasErrors = false;
    const emailentrar = document.getElementById('emaillogin').value;
    const senhaentrar = document.getElementById('senhalogin').value;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const telefoneRegex = /\+\d+[ ]?\(?\d+\)?[ ]?\d+[-. ]?\d+/;

if (emailRegex.test(emailentrar)) {
    document.getElementById('error-required-emailvalidoentrar').style.display = "none";
    document.getElementById('error-required-telefonevalidoentrar').style.display = "none";
    document.getElementById('sucessoLOGIN').style.display = "none";
} else if (telefoneRegex.test(emailentrar)) {
    document.getElementById('error-required-telefonevalidoentrar').style.display = "none";
    document.getElementById('error-required-emailvalidoentrar').style.display = "none";
    document.getElementById('sucessoLOGIN').style.display = "none";
} else {
    hasErrors = true;
    if (emailentrar.includes('@')) {
        document.getElementById('error-required-emailvalidoentrar').style.display = "block";
        document.getElementById('error-required-telefonevalidoentrar').style.display = "none";

    } else {
        document.getElementById('error-required-telefonevalidoentrar').style.display = "block";
        document.getElementById('error-required-emailvalidoentrar').style.display = "none";
    }
}



    if (!emailentrar) {
        document.getElementById('error-required-emaillogin').style.display = "block";
        hasErrors = true;
    } else {
        document.getElementById('error-required-emaillogin').style.display = "none";
    }

    if (!senhaentrar) {
        document.getElementById('error-required-senhalogin').style.display = "block";
        hasErrors = true;
    } else {
        document.getElementById('error-required-senhalogin').style.display = "none";
    }

    if (senhaentrar.length < 8) {
        document.getElementById('error-required-senhalogin8').style.display = "block";
        hasErrors = true;
    } else {
        document.getElementById('error-required-senhalogin8').style.display = "none";
    }

    if (!hasErrors) {
        document.getElementById('sucessoLOGIN').style.display = "block";
    }

    if (!hasErrors) {
        // Mostra a tela de carregamento
        showLoadingScreen();

        // Redireciona para outra página após 2 segundos
        setTimeout(function() {
            window.location.href = '../index.html';
        }, 2000);
    }

})
