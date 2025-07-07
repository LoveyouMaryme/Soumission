document.getElementById("combien-reclamation-selection").addEventListener("keydown", selectOption);

function selectOption(event) {

    let writtenValue = this.value;
    let nbReclamationIsValid = isNbReclamationValid(writtenValue);
    localStorage.setItem("nbReclamation", writtenValue);
   

    if (event.key === "Enter") {

        if (nbReclamationIsValid) {
          
            window.location.href = "demande-montant.html";
        }
        else {
            window.location.href = "refus-client.html"
        }

    }
}


function isNbReclamationValid(value) {

    if (value < 4) {
        return true
    } else {
        return false
    }
}

