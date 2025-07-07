document.getElementById("combien-reclamation-selection").addEventListener("keydown", selectOption);

function selectOption(event) {
    if (event.key === "Enter") {
        window.location.href = "demande-montant.html";
        
    }
}
