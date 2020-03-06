window.addEventListener("DOMContentLoaded", event => {
  const addButton = document.querySelector("#addButton");
  const brandInput = document.querySelector("#brandInput");
  const brandList = document.querySelector("#brandList");

  addButton.addEventListener("click", event => {
    axios
      .post("/brands", { name: brandInput.value })
      .then(res => {
        brandList.insertAdjacentHTML("beforeend", res.data);
      })
      .catch(err => {
        console.log(err);
      });
  });
});
