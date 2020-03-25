window.addEventListener('DOMContentLoaded', (event) => {
  const title = document.querySelector('#title')
  const description = document.querySelector('#desc')
  const sendButton = document.querySelector('#add')
  const deleteButtons = document.querySelectorAll('.delButton')

  sendButton.addEventListener('click', (e) => {
      axios.post('/tasks', { data: {
          title: title.value,
          description: description.value}
        })
        .catch(function (error) {
          console.log(error);
        });
  })


  deleteButtons.forEach(el => el.addEventListener('click', (e) => {
        axios.delete('/tasks', { data: {
          id: e.srcElement.parentNode.parentNode.id //id de l'élément tr en passant de l'événement, bouton, td, tr
        }
      })
      .then(function (response) {
        const row = document.getElementById(response.data.id)
        row.remove() // delete côté visuel
      })
      .catch(function (error) {
        console.log(error);
      });
  }))



})
