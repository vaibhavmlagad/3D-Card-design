// Movement animation to happen

const card = document.querySelector(".card");
const container = document.querySelector(".container");

// Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase button");
const sizes = document.querySelector(".sizes");
const description = document.querySelector(".info h3");

// Moving animation event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate in
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    // Popup elements
    sneaker.style.transform = "translateZ(250px) rotateZ(-45deg)";
    title.style.transform = "translateZ(125px)";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(125px)";
    purchase.style.transform = "translateZ(125px)";
});

// Annimate out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    // Popin elements at their space
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    title.style.transform = "translateZ(0px)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
});