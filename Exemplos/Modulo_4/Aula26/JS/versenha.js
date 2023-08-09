var olhos = document.querySelectorAll('.inputBox .indica');
var senhas = document.querySelectorAll('.inputBox input[type="password"]');

olhos.forEach((olho, index) => {
    olho.addEventListener('click', () => {
        if (senhas[index].getAttribute('type') == 'password') {
            senhas[index].setAttribute('type', 'text');
            olho.classList.add('mostra');
        } else {
            senhas[index].setAttribute('type', 'password');
            olho.classList.remove('mostra');
        }
    });
})