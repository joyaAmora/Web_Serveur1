window.addEventListener("DOMContentLoaded", $event => {

  const months = [
    { name: "Janvier", days: 31 },
    { name: "Février", days: 29 },
    { name: "Mars", days: 31 },
    { name: "Avril", days: 30 },
    { name: "Mai", days: 31 },
    { name: "Juin", days: 30 },
    { name: "Juillet", days: 31 },
    { name: "Août", days: 31 },
    { name: "Septembre", days: 30 },
    { name: "Octobre", days: 31 },
    { name: "Novembre", days: 30 },
    { name: "Décembre", days: 31 }
  ];

  var index = 1;
  months.forEach(month => {
    insert_Row(month, index);
    index++;
  });
});

function insert_Row(month, index){
  var tableYear = document.getElementsByTagName('tbody')[0];
  
  var newRow = tableYear.insertRow();
    newRow.id = month.name;

    var noMonth = newRow.insertCell(); 
    noMonth.innerHTML = index;

    var monthName = newRow.insertCell();
    monthName.innerHTML = month.name;

    var days = newRow.insertCell();
    days.innerHTML = month.days;

    var buttons = newRow.insertCell()
    var show = document.createElement("button");
    show.innerHTML = "Afficher";
    show.classList.add("btn", "btn-primary", "btn-sm", "mr-1");
    show.addEventListener("click", function() {
      alert(month.days);
    });
    var deleteLine = document.createElement("button");
    deleteLine.innerHTML = "Supprimer";
    deleteLine.classList.add("btn", "btn-danger", "btn-sm");
    deleteLine.addEventListener("click", function() {
      delLine(month.name);
    });

    buttons.appendChild(show);
    buttons.appendChild(deleteLine);

}

function delLine(monthName){
    document.getElementById(monthName).remove();

}