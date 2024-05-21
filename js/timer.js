// Fonction pour mettre à jour le compteur
function updateCountdown() {
    // Date cible (remplacez la date par votre propre date)
    const targetDate = new Date("2024-12-31T23:59:59");

    // Date actuelle
    const currentDate = new Date();

    // Calcul du temps restant en millisecondes
    const timeRemaining = targetDate - currentDate;

    // Conversion du temps restant en jours, heures, minutes et secondes
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Affichage du temps restant dans les éléments HTML avec les IDs correspondants
    updateDigit("days-cent", Math.floor(days / 100 ));
    updateDigit("days-ten", Math.floor((days % 100)/10));
    updateDigit("days-unit", days % 10);
    updateDigit("hours-ten", Math.floor(hours / 10));
    updateDigit("hours-unit", hours % 10);
    updateDigit("minutes-ten", Math.floor(minutes / 10));
    updateDigit("minutes-unit", minutes % 10);
    updateDigit("seconds-ten", Math.floor(seconds / 10));
    updateDigit("seconds-unit", seconds % 10);

    // Mise à jour du compteur toutes les secondes
    setTimeout(updateCountdown, 1000);
}

function updateDigit(elementId, newValue) {
    const element = document.getElementById(elementId);

    // Si la valeur a changé, animer le changement
    if (parseInt(element.textContent) !== newValue) {
        setTimeout(() => {
            element.textContent = newValue;
            element.style.transition = "none";
            element.style.top = "0";
        }, 500);
    }
}

// Appel initial de la fonction pour démarrer le compteur
updateCountdown();
