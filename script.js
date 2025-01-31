document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".open-pdf").forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      document.querySelectorAll(".pdf-container").forEach(container => container.remove());

      const pdfContainer = document.createElement("div");
      pdfContainer.classList.add("pdf-container");
      pdfContainer.innerHTML = `<iframe src="${this.getAttribute("data-pdf")}" width="100%" height="500px" style="border:1px solid #ccc;"></iframe>`;

      this.closest("li").after(pdfContainer);

      document.addEventListener("click", function closeViewer(e) {
        if (!pdfContainer.contains(e.target) && !link.contains(e.target)) {
          pdfContainer.remove();
          document.removeEventListener("click", closeViewer);
        }
      }, { once: true });
    });
  });
});
