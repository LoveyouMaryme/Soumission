const kmAutoInput = document.getElementById("km-auto-selection");
const boutonAvancer = document.getElementById("bouton-avancer");

function isValueEntered(value) {
    const trimmedValue = String(value).trim();
    if (trimmedValue === "") {
        return false;
    }
    return !isNaN(parseFloat(trimmedValue));
}

function isKmValidFinal(value) {
    const numValue = parseFloat(value);
    return !isNaN(numValue) && numValue >= 0 && numValue <= 50000;
}

function handleInputAndButtonState() {
    let writtenValue = kmAutoInput.value;

    localStorage.setItem("kmAnnuel", writtenValue);

    if (isValueEntered(writtenValue)) {
        boutonAvancer.style.display = 'block';
    } else {
        boutonAvancer.style.display = 'none';
    }
}


kmAutoInput.addEventListener("input", handleInputAndButtonState);

boutonAvancer.addEventListener("click", function (event) {
    event.preventDefault();

    let writtenValue = kmAutoInput.value;

    if (isKmValidFinal(writtenValue)) {
        window.location.href = this.href;
    } else {
        window.location.href = "refus-client.html";
    }
});

kmAutoInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        let writtenValue = this.value;
        localStorage.setItem("kmAnnuel", writtenValue);

        if (isKmValidFinal(writtenValue)) {
            window.location.href = "camera-recul.html";
        } else {
            window.location.href = "refus-client.html";
        }
    }
});

handleInputAndButtonState();