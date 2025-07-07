document.getElementById("km-auto-selection").addEventListener("keydown", selectOption);

function selectOption(event) {
    if (event.key === "Enter") {
        window.location.href = "camera-recul.html";
        
    }
}
