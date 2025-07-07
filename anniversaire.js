document.getElementById("birthday-selection").addEventListener("change", selectOption)


function selectOption() {
    const selectedValue = this.value;

    if (selectedValue){
        window.location.href = "valeur-auto.html";
    }
}