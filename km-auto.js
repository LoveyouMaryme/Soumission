document.getElementById("km-auto-selection").addEventListener("keydown", selectOption);

function selectOption(event) {

    writtenValue = this.value;
    localStorage.setItem("kmAnnuel", writtenValue)

    kmIsValid = isKmValid(writtenValue)

    if (event.key === "Enter") {


        if (kmIsValid) {
            window.location.href = "camera-recul.html";
        }
        else {
            window.location.href = "refus-client.html"
        }

    }
}


function isKmValid(value) {

    if (value < 50000) {
        return true
    } else {
        return false
    }
}