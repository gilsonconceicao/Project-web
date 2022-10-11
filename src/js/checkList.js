// tasks

class Tasks {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }

  addTasks() {
    let listTasksCurrent = new Array();

    if (localStorage.hasOwnProperty("listTasksCurrent")) {
      listTasksCurrent = JSON.parse(localStorage.getItem("listTasksCurrent"));
    }

    listTasksCurrent.push({
      title: this.title,
      description: this.description,
      id: Math.floor(Date.now() * Math.random()).toString(36),
      date: new Date().toLocaleDateString(),
    });

    localStorage.setItem("listTasksCurrent", JSON.stringify(listTasksCurrent));

    console.log(listTasksCurrent);
  }
}

const btn = document
  .getElementById("submit_task")
  .addEventListener("click", () => {
    const title = document.getElementById("title").value;
    const description = document.getElementById("descricaotarefa").value;
    const messageError = document.querySelector('.messageError'); 

    if (title != '' && description != '') {
        const task = new Tasks(title, description);
        task.addTasks();
        messageError.innerHTML = 'Adicionado com sucesso!'
        return document.getElementById("title").value = '', description = document.getElementById("descricaotarefa").value = '';
    } else {
        messageError.innerHTML = 'É necessário preencher os campos disponíveis!'; 
        return;
    }
  });
