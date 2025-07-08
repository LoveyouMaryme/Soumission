
document.getElementById("birthday-selection").addEventListener("change", selectOption)

const today = new Date();
const gender = localStorage.getItem("gender");

function selectOption() {
    const selectedValue = this.value;
    localStorage.setItem("anniversaire", selectedValue)
    let ageIsValid = isAgeValid(selectedValue)
    let femaleIsValid = isFemaleValid(selectedValue)
    let maleAgenderIsValid = isMaleAgenderValid(selectedValue)

    if (selectedValue && ageIsValid && (femaleIsValid || maleAgenderIsValid)) {
        window.location.href = "valeur-auto.html";
    } else {
        window.location.href = "refus-client.html"
    }
}

function isAgeValid(value) {
    const hundredYearsLater = new Date(value);
    hundredYearsLater.setFullYear(hundredYearsLater.getFullYear() + 100);


    if (today < hundredYearsLater) {
        return true
    } else {
        return false
    }
}


function isFemaleValid(value) {

    if (gender === "Femme") {
        const sixteenYearsLater = new Date(value);
        sixteenYearsLater.setFullYear(sixteenYearsLater.getFullYear() + 16);

        if (today > sixteenYearsLater) {
            return true
        } else {
            return false
        }
    }
}


function isMaleAgenderValid(value) {

    if (gender != "Femme") {
        const eighteenYearsLater = new Date(value);
        eighteenYearsLater.setFullYear(eighteenYearsLater.getFullYear() + 18);

        if (today > eighteenYearsLater) {
            return true
        } else {
            return false
        }
    }
}
