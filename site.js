(function () {
  const dialog = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  const caption = document.getElementById("lightbox-caption");
  const closeBtn = dialog ? dialog.querySelector(".lightbox-close") : null;

  if (!dialog || !img || !caption || !closeBtn || typeof dialog.showModal !== "function") {
    return;
  }

  function openLightbox(link) {
    img.src = link.href;
    img.alt = link.querySelector("img")?.alt || "DuckType 截图";
    caption.textContent = link.dataset.lightbox || img.alt;
    dialog.showModal();
  }

  function closeLightbox() {
    dialog.close();
    img.removeAttribute("src");
  }

  document.querySelectorAll("a.zoomable").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      openLightbox(link);
    });
  });

  closeBtn.addEventListener("click", closeLightbox);
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeLightbox();
  });
})();
