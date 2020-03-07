window.addEventListener('DOMContentLoaded', (event) => {
    const brandInput = document.querySelector('#brandInput')
    const sendButton = document.querySelector('#sendButton')
    const ul = document.querySelector('#ulId')
    sendButton.addEventListener('click', (e) => {
        axios.post('/brands', {
            name: brandInput.value
          })
          .then(function (response) {
            ul.insertAdjacentHTML("afterbegin", response.data)
          })
          .catch(function (error) {
            console.log(error);
          });
    })

})