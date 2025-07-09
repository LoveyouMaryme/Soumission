document.addEventListener('DOMContentLoaded', function() {
    const anneeAutoSelect = document.getElementById("annee-auto-selection");
    let today = new Date();

    //Génére dynamiquement les options d'année
    function generateYears() {
        const currentYear = today.getFullYear();
        const startYear = 1900;
        const endYear = currentYear + 1;

        for (let year = endYear; year >= startYear; year--) {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            anneeAutoSelect.appendChild(option);
        }
    }

    generateYears();

    anneeAutoSelect.addEventListener("change", function() {
        const selectedValue = this.value;

        const ageCarIsValid = isAgeCarValid(parseInt(selectedValue));
        
        if (ageCarIsValid) {
            window.location.href = "camera-recul.html";
        } else {
            window.location.href = "refus-client.html";
        }
    });

        function isAgeCarValid(selectedYear) {
        // Crée une date pour le 1er janvier de l'année sélectionnée
        const selectedDate = new Date(selectedYear, 0, 1); 
        
        const twentyfiveYearsLater = new Date(selectedDate);
        twentyfiveYearsLater.setFullYear(twentyfiveYearsLater.getFullYear() + 25);

        return today < twentyfiveYearsLater;
    }
});