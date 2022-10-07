const seacrhingCep = async () => {
    const cep = document.getElementById('searchCep').value; 
    const url = `https://viacep.com.br/ws/${cep}/json/`; 


    fetch(url) 
        .then(response => response.json())
        .then((data) => {
            
        }).catch(e=> alert(e))
}