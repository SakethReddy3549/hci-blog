document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("pdfModal");
  const pdfViewer = document.getElementById("pdfViewer");
  const closeModal = document.querySelector(".close");

  document.querySelectorAll(".open-pdf").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const pdfUrl = this.getAttribute("data-pdf");
      pdfViewer.setAttribute("src", pdfUrl);
      modal.style.display = "block";
    });
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
