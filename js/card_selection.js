const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    cards.forEach((sibling) => {
      if (sibling !== card) {
        sibling.style.opacity = "0.3";
      }
    });
  });
  card.addEventListener("mouseleave", () => {
    cards.forEach((element) => {
      element.style.opacity = "1";
    });
  });
});
