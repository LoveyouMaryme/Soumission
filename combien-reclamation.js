const reclamationInput = document.getElementById("combien-reclamation-selection");
const boutonAvancer = document.getElementById("bouton-avancer");

function isValueEntered(value) {
    const trimmedValue = String(value).trim();
    if (trimmedValue === "") {
        return false;
    }
    return !isNaN(parseFloat(trimmedValue));
}

function isNbReclamationValidFinal(value) {
    const numValue = parseFloat(value);
    return !isNaN(numValue) && numValue >= 0 && numValue < 4;
}

function handleInputAndButtonState() {
    let writtenValue = reclamationInput.value;
    
    localStorage.setItem("nbReclamation", writtenValue);

    if (isValueEntered(writtenValue)) {
        boutonAvancer.style.display = 'block';
    } else {
        boutonAvancer.style.display = 'none';
    }
}


reclamationInput.addEventListener("input", handleInputAndButtonState);

boutonAvancer.addEventListener("click", function(event) {
    event.preventDefault(); 
    
    let writtenValue = reclamationInput.value;
    
    if (isNbReclamationValidFinal(writtenValue)) {
        window.location.href = this.href;
    } else {
        window.location.href = "refus-client.html";
    }
});

reclamationInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let writtenValue = this.value;
        localStorage.setItem("nbReclamation", writtenValue);
        
        if (isNbReclamationValidFinal(writtenValue)) {
            window.location.href = "demande-montant.html";
        } else {
            window.location.href = "refus-client.html";
        }
    }
});

handleInputAndButtonState();