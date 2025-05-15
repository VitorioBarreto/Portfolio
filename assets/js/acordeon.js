const acordeonTriggers = document.querySelectorAll(".acordeon .trigger");

// Garante que todos os acordeões comecem fechados
document.querySelectorAll(".acordeon").forEach((acordeon) => {
  acordeon.classList.remove("open");
});

acordeonTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (e) => {
    const acordeon = trigger.parentElement;

    const isOpen = acordeon.classList.contains("open");

    if (isOpen) {
      acordeon.classList.remove("open");
    } else {
      acordeon.classList.add("open");
    }
  });
});
