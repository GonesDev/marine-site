// LOADER SAFE
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  if (loader) {
    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.transition = "0.5s";

      setTimeout(() => {
        loader.style.display = "none";
      }, 500);
    }, 1200);
  }

  // afficher les cards
  document.querySelectorAll(".card").forEach(card => {
    card.classList.add("show");
  });
});


// ANIMATION SCROLL
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
