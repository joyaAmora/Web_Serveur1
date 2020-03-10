window.addEventListener('DOMContentLoaded', (event) => {
  const title = document.querySelector('#title')
  const description = document.querySelector('#desc')
  const sendButton = document.querySelector('#add')
  const deleteButtons = document.querySelectorAll('.delButton')

  sendButton.addEventListener('click', (e) => {
    console.log(title.value, description.value)
      axios.post('/tasks', {
          title: title.value,
          description: description.value
        })
        .then(function (response) {
          //rowTask.insertAdjacentHTML("beforebegin", response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
  })


  deleteButtons.forEach(el => el.addEventListener('click', (e) => {
    console.log('delete')
        axios.delete('/tasks', {
        id: e.srcElement.parentNode.parentNode.id //id de l'élément tr en passant de l'événement, bouton, td, tr

      })
      .then(function (response) {
          deleteButtons.parentNode.parentNode.remove() // delete côté visuel
      })
      .catch(function (error) {
        console.log(error);
      });
  }))



})
