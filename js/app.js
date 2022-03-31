

function Press(){
    var naziv = document.getElementById("naziv").value;
    var semestar = document.getElementById("semestar").value;
    var ects = document.getElementById("ects").value;
    var table = document.getElementById("table");
    var string = "<tr><td>"+naziv+"</td><td>"+semestar+"</td><td>"+ ects+"</td><td onclick='DeleteRow()'><button>d</button></td><td><input onclick='CheckPressCheckbox()' type='checkbox'></td></tr>"
    table.innerHTML += string;
}
function DeleteRow(){
    var td = event.target.parentNode;
    var tr = td.parentNode;
    tr.parentNode.removeChild(tr);
}

function CheckPressCheckbox(){
    var checkbox = event.target.checked;
    var td = event.target.parentNode;
    var tr = td.parentNode;

    if(checkbox == true){
        tr.style.backgroundColor = "Green";
    }else{
        tr.style.backgroundColor = "transparent";
    }
}