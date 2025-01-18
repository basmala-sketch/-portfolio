// Scroll Animation
document.addEventListener("scroll", () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            card.style.transform = "translateY(0)";
            card.style.opacity = "1";
        }
    });
});
