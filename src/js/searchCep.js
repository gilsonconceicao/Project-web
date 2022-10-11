const btn = document.getElementById('btn-submit')
    .addEventListener('click', (e) => {
        e.preventDefault(); 

        const cep = document.getElementById('searchCep').value; 
        const url = `https://viacep.com.br/ws/${cep}/json/`; 
    
    
        fetch(url) 
            .then(response => response.json())
            .then((data) => {    
                const div = document.createElement('div'); 
                div.setAttribute('class', 'data-cep')
                const result = document.querySelector('.result');
    
                div.innerHTML = `
                    <h2>CEP: ${data.cep}</h2> 
                    <span>Rua: ${data.logradouro}</span> <br>
                    <span>Bairro: ${data.bairro}</span> <br>
                    <span>Cidade: ${data.localidade} - ${data.uf}</span> 
                `; 
                result.appendChild(div)
            }).catch(e=> alert(e))
    })