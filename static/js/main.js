(function () {
  const toast = document.querySelector("[data-toast]");
  const toastText = document.querySelector("[data-toast-text]");

  function showToast(msg) {
    if (!toast) return;
    toastText.textContent = msg || "Copied";
    toast.classList.add("show");
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => toast.classList.remove("show"), 1200);
  }

  // Copy buttons
  document.addEventListener("click", async (e) => {
    const btn = e.target.closest("[data-copy-btn]");
    if (btn) {
      const value = btn.getAttribute("data-copy-btn") || "";
      try {
        await navigator.clipboard.writeText(value);
        showToast("Copied");
      } catch {
        showToast("Copy failed");
      }
    }
  });

  // Mobile nav
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // Lightbox
  const root = document.querySelector("[data-lightbox-root]");
  const img = document.querySelector("[data-lightbox-img]");
  function openLightbox(src) {
    if (!root || !img) return;
    img.src = src;
    root.classList.add("open");
    root.setAttribute("aria-hidden", "false");
  }
  function closeLightbox() {
    if (!root || !img) return;
    root.classList.remove("open");
    root.setAttribute("aria-hidden", "true");
    img.src = "";
  }

  document.addEventListener("click", (e) => {
    const shot = e.target.closest("[data-lightbox]");
    if (shot) {
      openLightbox(shot.getAttribute("data-src"));
      return;
    }
    if (e.target.closest("[data-lightbox-close]")) {
      closeLightbox();
      return;
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
})();
