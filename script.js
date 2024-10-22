const card = document.querySelectorAll("#card"); 
card.forEach((cardElement) => {
    const icon = cardElement.querySelector("#icon"); 
    cardElement.addEventListener("mouseenter", function() {
        icon.style.transform = "rotate(360deg)";
        icon.style.transition = "transform 0.5s ease";
    });

    cardElement.addEventListener("mouseleave", function() {
        icon.style.transform = "rotate(0deg)";
    });
});
