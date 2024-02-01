
document.addEventListener("DOMContentLoaded", function () {
    // Voeg een 'click'-event toe aan elke navigatielink
    var links = document.querySelectorAll(".navbar a");
    links.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Voorkom standaardgedrag van de link

            // Haal de doel-ID op uit de href-attribuut van de link
            var targetId = this.getAttribute("href").substring(1);

            // Verwijder de 'active'-klasse van alle containers
            document.querySelectorAll(".container").forEach(function (container) {
                container.classList.remove("active");
            });

            // Voeg de 'active'-klasse toe aan de container met het overeenkomstige ID
            document.getElementById(targetId).classList.add("active");
        });
    });

    // Voeg 'active'-klasse toe aan de startpagina bij het laden van de pagina
    document.getElementById("startpagina").classList.add("active");
});
