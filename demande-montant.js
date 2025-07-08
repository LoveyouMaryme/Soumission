const nbReclamation = parseInt(localStorage.getItem("nbReclamation"));
const accentBg = "#FFFDE6";
const textDark = "#5c2b29";
let currentSum = 0;

window.addEventListener("DOMContentLoaded", addElement);

function addElement() {
  const form = document.getElementById("form");

  if (nbReclamation >= 2) {
    const question1 = document.getElementById("question-1");
    const input1 = document.getElementById("reclamation-1");
    const container = document.getElementById("select-1");

    for (let i = 2; i <= nbReclamation; i++) {
      const newLabel = question1.cloneNode(true);
      newLabel.id = `question-${i}`;
      newLabel.htmlFor = `reclamation-${i}`;
      newLabel.textContent = `Pour la réclamation #${i}, quel montant avez-vous réclamé ?`;
      newLabel.style.color = textDark;
      newLabel.style.marginTop = "15px";

      const newInput = input1.cloneNode(true);
      newInput.id = `reclamation-${i}`;
      newInput.name = `reclamation-${i}`;
      newInput.value = "";
      newInput.required = true;

      const newContainer = container.cloneNode();
      newContainer.id = `select-${i}`;

      form.appendChild(newLabel);
      form.appendChild(newContainer);
      newContainer.appendChild(newInput);
    }
  }
}

document.getElementById("submit-button").addEventListener("click", submitForm);

function submitForm(event){

    event.preventDefault();
    const form = document.getElementById("form");

  if (!form.checkValidity()) {

    form.reportValidity(); 
    return;
  }


  sumReclamation();

}

function sumReclamation() {

  currentSum = 0;

  const inputs = document.getElementsByClassName("all-reclamations");

  Array.from(inputs).forEach(input => {
    const value = parseFloat(input.value);
    
    if (!isNaN(value)) {
      currentSum += value;
    }
  });

  console.log("Total:", currentSum);
  localStorage.setItem("montantReclamation", currentSum)
  redirectionAfterSum()
  
}



function redirectionAfterSum() {
  if (currentSum > 35000) {
    window.location.href = "refus-client.html";
  } else {
    window.location.href = "calcul-montant-reclamation.html";
  }
}
