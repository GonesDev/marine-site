// LOADER
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transition = "0.5s";

    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 1200);

  // afficher les cards dès le chargement
  document.querySelectorAll(".card").forEach(card => {
    card.classList.add("show");
  });
});


// ANIMATION AU SCROLL
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const position = card.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (position < screen - 100) {
      card.classList.add("show");
    }
  });
});
