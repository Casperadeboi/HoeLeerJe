document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll(".navbar a");

    links.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            var targetId = this.getAttribute("href").substring(1);
            var imageName = this.getAttribute("data-image");

            document.querySelectorAll(".container").forEach(function (container) {
                container.classList.remove("active");
            });

            document.getElementById(targetId).classList.add("active");
            document.querySelector(".right-section img").src = imageName + ".png";
        });
    });

    document.getElementById("startpagina").classList.add("active");
});
function showImage(word, imageName) {
    document.getElementById(word).addEventListener("click", function () {
        var imageContainer = document.createElement("div");
        imageContainer.style.width = "100vw";
        imageContainer.style.height = "100vh";
        imageContainer.style.position = "fixed";
        imageContainer.style.top = "0";
        imageContainer.style.left = "0";
        imageContainer.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
        imageContainer.style.zIndex = "9999";
        imageContainer.style.display = "flex";
        imageContainer.style.justifyContent = "center";
        imageContainer.style.alignItems = "center";
        imageContainer.style.overflow = "auto";

        var image = document.createElement("img");
        image.src = imageName;
        image.style.width = "100%";
        image.style.height = "100%";
        image.style.objectFit = "contain"; // Voeg deze regel toe

        imageContainer.appendChild(image);
        document.body.appendChild(imageContainer);
    });
}

showImage("ecoWord", "ECO.png");
showImage("nlWord", "NL.png");
showImage("akWord", "AK.png");
showImage("maWord", "MA.png");
showImage("wisWord", "WIS.png");
