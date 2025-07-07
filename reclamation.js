var listOfChoices = Array.from(document.getElementsByName("reclamation-selection"));

listOfChoices.forEach(function (choice) {
  choice.addEventListener("change", selectOption);
});

function selectOption() {
  const selectedValue = this.value;
  console.log(selectedValue)

  if (selectedValue === "OUI") {
    window.location.href = "combien-reclamation.html";
  }else{
    window.location.href = "fin.html"
  }
}
