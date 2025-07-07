var listOfChoices = Array.from(document.getElementsByName("camera-recul-selection"));

listOfChoices.forEach(function (choice) {
  choice.addEventListener("change", selectOption);
});

function selectOption() {
  const selectedValue = this.value;

  if (selectedValue) {
    window.location.href = "reclamation.html";
  }
}
