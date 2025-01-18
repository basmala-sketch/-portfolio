// Animate sections when scrolling
gsap.from(".hero h1", { duration: 1.5, opacity: 0, y: -50 });
gsap.from(".hero p", { duration: 1.5, opacity: 0, y: 50, delay: 0.5 });
gsap.from(".hero .btn", { duration: 1.5, opacity: 0, scale: 0.5, delay: 1 });

// Portfolio hover effect
document.querySelectorAll(".portfolio-item").forEach(item => {
    item.addEventListener("mouseover", () => {
        gsap.to(item.querySelector(".overlay"), { opacity: 1 });
    });
    item.addEventListener("mouseout", () => {
        gsap.to(item.querySelector(".overlay"), { opacity: 0 });
    });
});
