const optionsPage = document.getElementById('seacrh'); 

optionsPage.addEventListener('change', () => {
    if (optionsPage.value == 'Lista de tarefas') {
        window.location.href = './check-list.html';
    }

    if (optionsPage.value == 'Buscador de CEP') {
        window.location.href = './id-cep.html';
    }

    if (optionsPage.value == 'Gerador de senhas') {
        window.location.href = './gerator-password.html';
    }

})