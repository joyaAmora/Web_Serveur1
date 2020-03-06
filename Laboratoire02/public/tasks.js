window.addEventListener("DOMContentLoaded", event => {
    const deleteButton = document.querySelector("#deleteButton");
    const taskInput = document.querySelector("#taskInput");
    const taskList = document.querySelector("#taskList");
  
    addButton.addEventListener("click", event => {
      axios
        .get("/tasks", { number: taskInput.value })
        .then(res => {
          taskList.remove(res.data)
        })
        .catch(err => {
          console.log(err);
        });
    });
  });
  