const gender = localStorage.getItem("gender")
const priceCar = localStorage.getItem("valeur-auto")
const anniversaire = localStorage.getItem("anniversaire")
const nbReclamation = localStorage.getItem("nbReclamation")
const kmAnnuel = localStorage.getItem("kmAnnuel")
const montantReclamation = localStorage.getItem("montantReclamation")
const today = Date()

console.log(gender)
console.log(priceCar)
console.log(anniversaire)
console.log(nbReclamation)
console.log(kmAnnuel)
console.log(montantReclamation)




function setGrpMontantBase(){

    let ageIsLessTwentyFive = isAgeLessTwentyFive(anniversaire);
    let ageIsMoreSeventyFive = isAgeMoreSeventyFive(anniversaire)
    
    montantDeBase = 0;

    if(gender === "Homme" || gender === "Autre" && ageIsLessTwentyFive){
        return montantDeBase = priceCar * 5 / 100

    } else if(ageIsMoreSeventyFive){
        return montantDeBase = priceCar * 4 / 100

    }else{
        return montantDeBase = priceCar * 1.5 / 100
    }
}

function isAgeLessTwentyFive(value) {
    const twentyFiveYearsLater = new Date(value);
    twentyFiveYearsLater.setFullYear(twentyFiveYearsLater.getFullYear() + 25);


    if (today < twentyFiveYearsLater) {
        return true
    } else {
        return false
    }
}

function isAgeMoreSeventyFive(value) {
    const seventyFiveYearsLater = new Date(value);
    seventyFiveYearsLater.setFullYear(seventyFiveYearsLater.getFullYear() + 25);

    if (today < seventyFiveYearsLater) {
        return true
    } else {
        return false
    }
}

function isPenaltySet(value){
    if (value > 25000){
        return true
    } else {
        return false
    }
}


function calculerPrixAssuranceAnnuel(montant){

    let penaltyIsSet = isPenaltySet(montantReclamation)

    let montantAssuranceAnnuelle = 
        montantDeBase * 
        (350 * nbReclamation) +
        (0.02 * kmAnnuel ) 

    if(penaltyIsSet){
        montantAssuranceAnnuelle += 700
    }

    return montantAssuranceAnnuelle

}

function calculerPrixAssuranceMensuel(montant){

    let penaltyIsSet = isPenaltySet(montantReclamation)



    let montantAssuranceAnnuelle = 
        montant * (350 * nbReclamation) + (0.02 * kmAnnuel ) 

    if(penaltyIsSet){
        montantAssuranceAnnuelle += 700
    }

    let montantMensuel = montantAssuranceAnnuelle / 12
    return montantMensuel

}


const text_prix_annuel = document.getElementById('prix-annuel');
text_prix_annuel.innerHTML = calculerPrixAssuranceAnnuel(setGrpMontantBase()) ;


const text_prix_mensuel = document.getElementById('prix-mensuel');
text_prix_mensuel.innerHTML = calculerPrixAssuranceMensuel(setGrpMontantBase()) ;

