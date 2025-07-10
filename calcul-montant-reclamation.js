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




function setGrpMontantBase() {

    let ageIsLessTwentyFive = isAgeLessTwentyFive(anniversaire);
    let ageIsMoreSeventyFive = isAgeMoreSeventyFive(anniversaire)

    montantDeBase = 0;

    if ((gender === "Homme" || gender === "Autre") && ageIsLessTwentyFive) {
        console.log(" Categorie : Homme ou Autre et moins de 25 ans")
        console.log("5")
        return montantDeBase = priceCar * 5 / 100

    } else if (ageIsMoreSeventyFive) {
        console.log("Categorie : Plus de 75 ans")
        console.log("4")
        return montantDeBase = priceCar * 4 / 100

    } else {
        console.log("Categorie : Plus de 25 ans")
        console.log("1.5")
        return montantDeBase = priceCar * 1.5 / 100
    }
}

function isAgeLessTwentyFive(value) {
    const twentyFiveYearsLater = new Date(value);
    twentyFiveYearsLater.setFullYear(twentyFiveYearsLater.getFullYear() + 25);
    twentyFiveYearsLater.setDate(twentyFiveYearsLater.getDate() + 1)

    console.log(today)
    console.log(twentyFiveYearsLater)


    if (today < twentyFiveYearsLater) {
        console.log("Age is less than 25")
        return true
    } else {
        console.log("Age is more than 25")
        return false
    }
}

function isAgeMoreSeventyFive(value) {
    const seventyFiveYearsLater = new Date(value);
    seventyFiveYearsLater.setFullYear(seventyFiveYearsLater.getFullYear() + 25);
    seventyFiveYearsLater.setDate(seventyFiveYearsLater.getDate() + 1)

    if (today < seventyFiveYearsLater) {
        return true
    } else {
        return false
    }
}

function isPenaltySet(value) {
    if (value > 25000) {
        return true
    } else {
        return false
    }
}


function calculerPrixAssuranceAnnuel(montant) {

    let penaltyIsSet = isPenaltySet(montantReclamation)

    let prixReclamation = 350 * nbReclamation
    let prixKmAnnuel = 0.02 * kmAnnuel

    let montantAssuranceAnnuelle =
        montantDeBase +
        (prixReclamation) +
        (prixKmAnnuel)

    if (penaltyIsSet) {
        montantAssuranceAnnuelle += 700
    }

    console.log("Montant de base: " + montantDeBase)
    console.log("Prix de la reclamation: " + prixReclamation)
    console.log("Prix du km annuel: " + prixKmAnnuel)
    console.log(penaltyIsSet ? "Pénalité appliquée" : "Aucune pénalité appliquée")
    console.log("Montant de l'assurance annuelle: " + montantAssuranceAnnuelle)


    return montantAssuranceAnnuelle

}

function calculerPrixAssuranceMensuel(montant) {

    let penaltyIsSet = isPenaltySet(montantReclamation)

    let montantAssuranceAnnuelle =
        montant + (350 * nbReclamation) + (0.02 * kmAnnuel)

    if (penaltyIsSet) {
        montantAssuranceAnnuelle += 700
    }

    let montantMensuel = Number(montantAssuranceAnnuelle / 12).toFixed(2)
    return montantMensuel

}


const text_prix_annuel = document.getElementById('prix-annuel');
text_prix_annuel.innerHTML = calculerPrixAssuranceAnnuel(setGrpMontantBase());


const text_prix_mensuel = document.getElementById('prix-mensuel');
text_prix_mensuel.innerHTML = calculerPrixAssuranceMensuel(setGrpMontantBase());

