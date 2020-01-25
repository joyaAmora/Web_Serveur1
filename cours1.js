//1.2
function set_background(){
    //en jquery
    $("p").css("background-color", "green");
    //en js
    document.getElementsByTagName("p").css("background-color", "green");
}

//1.3
function getAttributes(){
    var lien = w3r.href;
    var Lang =  w3r.hreflang; 
    var relval =  w3r.rel;
    var chemin =  w3r.target;
    var typeText =  w3r.type;
    
    alert(lien);
    alert(Lang);
    alert(relval);
    alert(chemin);
    alert(typeText);
  }

//1.4

function insert_Row(){
  var sampleTable = document.getElementById('sampleTable').getElementsByTagName('tbody')[0];

// Insert a row in the table at the last row
var newRow   = sampleTable.insertRow(0);

// Insert a cell in the row at index 0
var newCell  = newRow.insertCell(0);
var newCell1 = newRow.insertCell(1);

// Append a text node to the cell
var newText  = document.createTextNode('New row');
newCell.appendChild(newText);
var newText  = document.createTextNode('New row');
newCell1.appendChild(newText);
  
}