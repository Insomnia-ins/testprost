var input = document.getElementById("input").oninput = inputChange;

function inputChange() {
    if ( event.target.value.length )
       document.getElementById("output").style.display = "inline-block";
    else 
        document.getElementById("output").style.display = "none"           
}	