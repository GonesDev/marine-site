// AFFICHER LES CARTES AU CHARGEMENT
window.addEventListener("load", () => {
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
