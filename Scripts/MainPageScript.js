/* Scripts for main page */
function startSectionWithBlack(makeSectionDark) {
    // Getting all sections of the webpages
    const contentSections = document.querySelectorAll('.ContentSection');

    // Color each section
    contentSections.forEach(section => {
        // Color white or black
        if (makeSectionDark) {
            section.classList.add("DarkSection");
        } else {
            section.classList.add("LightSection");
        }

        // Interchange pattern
        makeSectionDark = !makeSectionDark;
    });
}

// Deciding the black and white pattern accross the page
$(document).ready(function() {
    startSectionWithBlack(false);
});
