var listOfChoices = Array.from(document.getElementsByName("camera-recul-selection"));

listOfChoices.forEach(function (choice) {
  choice.addEventListener("change", selectOption);
});

function selectOption() {
  const selectedValue = this.value;
  var cameraIsValid = isCameraValid(selectedValue);

  if (selectedValue && cameraIsValid) {
    window.location.href = "reclamation.html";
  }
}

function isCameraValid(value) {

  if (value == "OUI") {
    return true
  } else {
    return false
  }
}
