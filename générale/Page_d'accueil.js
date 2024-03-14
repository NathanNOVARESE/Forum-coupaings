document.addEventListener('DOMContentLoaded', function () {
    var slider = document.querySelector('.slider');
    var sliderWrapper = document.querySelector('.slider-wrapper');

    // Tableau de textes correspondant aux diapositives
    var slideTexts = [
        "Cloud                                                                                         Final Fantasy 7",
        "Link                                                                                         Zelda Breath of The Wild",
        "Geralt                                                                                         The Witcher 3",
        "Ichiban                                                                                         Yakuza Infinite Wealth",
    ];

    // Mettre à jour le texte initial
    updateSliderText();

    slider.addEventListener('scroll', function () {
        // Calculez l'index de la diapositive actuellement visible
        var index = Math.round(slider.scrollLeft / slider.clientWidth);

        // Mettre à jour le texte du slider avec le texte correspondant à la diapositive actuelle
        updateSliderText(index);
    });

    function updateSliderText(index = 0) {
        // Mettre à jour le contenu du pseudo-élément ::before avec le texte correspondant à la diapositive actuelle
        sliderWrapper.style.setProperty('--slide-text', '"' + slideTexts[index] + '"');
    }
});
