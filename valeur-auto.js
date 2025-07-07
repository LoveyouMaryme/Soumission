
document.getElementById("valeur-auto-selection").addEventListener("keydown", selectOption);


function selectOption(event) {

    let writtenValue = this.value;
    let valueCarIsValid = isValueCarValid(writtenValue)


    if (event.key === "Enter") {

        if (valueCarIsValid) {
            window.location.href = "annee-auto.html"
        } else {
            window.location.href = "refus-client.html"
        }

    }

}

function isValueCarValid(value) {

    if (value < 100000) {
        return true
    } else {
        return false
    }
}