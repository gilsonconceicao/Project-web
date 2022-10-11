// data storage show html
const dataLst = document.getElementById('data_list'); 
// get data storage 
const storageList = JSON.parse(localStorage.getItem('listTasksCurrent')); 

storageList.forEach(list => {
    dataLst.innerHTML += `
        <div class='tasks'>
            <h2>${list.title}</h2>
            <span class='description'>${list.description}</span>
            <span class='date'>Adicionado no dia ${list.date}</span>
        </div>  
    ` 
})

document.querySelector('.removeList').addEventListener('click', () => {
    window.localStorage.removeItem('listTasksCurrent'); 
    window.location.href = ''
})

function addMoreTask() {
    window.location.href = './check-list.html'; 
}
