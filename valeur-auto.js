const valeurAutoInput = document.getElementById("valeur-auto-selection");
const boutonAvancer = document.getElementById("bouton-avancer");

function isValueCarEntered(value) {
    const trimmedValue = value.trim();
    if (trimmedValue === "") {
        return false;
    }
    return !isNaN(parseFloat(trimmedValue));
}

function isCarValueFinalValid(value) {
    const numValue = parseFloat(value);
    return !isNaN(numValue) && numValue > 0 && numValue < 100000;
}

function handleInputAndButtonState() {
    let writtenValue = valeurAutoInput.value;
    
    localStorage.setItem("valeur-auto", writtenValue);

    if (isValueCarEntered(writtenValue)) {
        boutonAvancer.style.display = 'block';
    } else {
        boutonAvancer.style.display = 'none';
    }
}

valeurAutoInput.addEventListener("input", handleInputAndButtonState);

boutonAvancer.addEventListener("click", function(event) {
    event.preventDefault(); 
    
    let writtenValue = valeurAutoInput.value;
    
    if (isCarValueFinalValid(writtenValue)) {
        window.location.href = this.href;
    } else {
        window.location.href = "refus-client.html";
    }
});

valeurAutoInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let writtenValue = this.value;
        localStorage.setItem("valeur-auto", writtenValue);
        

        if (isCarValueFinalValid(writtenValue)) {
            window.location.href = "annee-auto.html";
        } else {
            window.location.href = "refus-client.html";
        }
    }
});


handleInputAndButtonState();