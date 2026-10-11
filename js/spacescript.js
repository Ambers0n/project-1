document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".expand-btn").forEach((button) => {
    const panel = document.querySelector(".expandable");
    button.addEventListener("click", () => {
      const opening = panel.classList.toggle("hidden") === false;
      button.textContent = opening ? "Hide galaxies" : "View galaxies";
      button.setAttribute("aria-expanded", String(opening));
    });
    button.setAttribute("aria-expanded", "false");
  });

  document.querySelectorAll(".qwe-btn").forEach((button) => {
    const panel = document.querySelector(".expandablle");
    button.addEventListener("click", () => {
      const opening = panel.classList.toggle("hidden") === false;
      button.textContent = opening ? "Hide planets" : "View planets";
      button.setAttribute("aria-expanded", String(opening));
    });
    button.setAttribute("aria-expanded", "false");
  });

  const modal = document.querySelector(".modal-canvas");
  const modalImage = document.querySelector("#modalImage");
  document.querySelectorAll(".black_hole_btn").forEach((image) => {
    image.addEventListener("click", () => {
      modalImage.src = image.src;
      modalImage.alt = image.alt;
      modal.classList.remove("hidden");
    });
  });
  const closeModal = () => modal.classList.add("hidden");
  modal.querySelector(".modal-close").addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
});
