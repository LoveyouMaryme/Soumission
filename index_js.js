let cardBundle = Array.from(document.getElementsByClassName("card-bundle"));
let clickButtons = Array.from(document.getElementsByClassName("click-button"));

const allClickable = cardBundle.concat(clickButtons);

allClickable.forEach(element => {
  element.addEventListener("click",clickToStartForm) 
});


function clickToStartForm(){
    window.location.href = "./first_page.html";
    
}