document.getElementById("valeur-auto-selection").addEventListener("keydown", selectOption);

let today = new Date();

function selectOption(event) {

    var selectedValue = this.value
    var ageCarIsValid = isAgeCarValid(selectedValue)

    if (event.key === "Enter") {

        if (ageCarIsValid) {
            window.location.href = "camera-recul.html";
        }
        else {
            window.location.href = "refus-client.html"
        }

    }
}

function isAgeCarValid(value) {
    const twentyfiveYearsLater = new Date(value);
    twentyfiveYearsLater.setFullYear(twentyfiveYearsLater.getFullYear() + 25);

    if (today < twentyfiveYearsLater) {
        return true
    } else {
        return false
    }
}
