document.getElementById("valeur-auto-selection").addEventListener("keydown", selectOption);


function selectOption(event) {

    if (event.key === "Enter") {
        window.location.href = "camrera-recul.html";
        
    }
}
