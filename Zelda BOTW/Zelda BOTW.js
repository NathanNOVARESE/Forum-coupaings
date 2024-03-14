// Récupérer les éléments du slider
const slider = document.querySelector('.slider');
const slide3 = document.getElementById('slide-3');
const slide4 = document.getElementById('slide-4');

// Fonction pour ajuster l'opacité du slide 3 en fonction du slide 4
function handleSlideVisibility() {
    const sliderRect = slider.getBoundingClientRect();
    const slide4Rect = slide4.getBoundingClientRect();

    // Vérifier si le slide 4 est visible dans le slider
    if (
        slide4Rect.left >= sliderRect.left &&
        slide4Rect.right <= sliderRect.right
    ) {
        slide3.style.opacity = '0'; // Masquer le slide 3 lorsque le slide 4 est visible
    } else {
        slide3.style.opacity = '1'; // Afficher le slide 3 lorsque le slide 4 n'est pas visible
    }
}

// Écouter l'événement scroll pour mettre à jour la visibilité du slide 3
window.addEventListener('scroll', handleSlideVisibility);

// Appeler la fonction handleSlideVisibility() une fois au chargement de la page pour la configuration initiale
handleSlideVisibility();
