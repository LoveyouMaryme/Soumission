document.getElementById("genders").addEventListener("change", selectOption)


function selectOption() {
    const selectedValue = this.value;

    if (selectedValue){
         window.location.href = "anniversaire.html";
    }
}