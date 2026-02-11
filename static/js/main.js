(() => {
  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

  // Mobile menu
  const burger = $("[data-burger]");
  const mobileNav = $("[data-mobile-nav]");
  if (burger && mobileNav) {
    burger.addEventListener("click", () => {
      mobileNav.classList.toggle("is-open");
    });
  }

  // Copy-to-clipboard buttons
  $$("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const text = btn.getAttribute("data-copy") || "";
      try {
        await navigator.clipboard.writeText(text);
        const old = btn.innerHTML;
        btn.innerHTML = `<span class="copy__text">${escapeHtml(text)}</span><span class="copy__btn"><i class="bi bi-check2"></i> Copied</span>`;
        setTimeout(() => (btn.innerHTML = old), 1400);
      } catch (e) {
        // Fallback: select text
        window.prompt("Copy this URL:", text);
      }
    });
  });

  // Lightbox modal for screenshots
  const modal = $("[data-modal]");
  const modalImg = $("[data-modal-img]");
  const modalCap = $("[data-modal-caption]");
  const closeEls = $$("[data-modal-close]");
  const openShots = $$("[data-lightbox]");

  const openModal = (src, caption) => {
    if (!modal || !modalImg) return;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    modalImg.src = src;
    modalImg.alt = caption || "Screenshot preview";
    if (modalCap) modalCap.textContent = caption || "";
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    if (!modal || !modalImg) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    modalImg.src = "";
    document.body.style.overflow = "";
  };

  openShots.forEach((fig) => {
    fig.addEventListener("click", () => {
      const img = $("img", fig);
      if (!img) return;
      const caption = fig.getAttribute("data-caption") || $("figcaption", fig)?.textContent || "";
      openModal(img.getAttribute("src"), caption);
    });
    fig.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") fig.click();
    });
    fig.setAttribute("tabindex", "0");
    fig.setAttribute("role", "button");
    fig.setAttribute("aria-label", "Open screenshot preview");
  });

  closeEls.forEach((el) => el.addEventListener("click", closeModal));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  function escapeHtml(s) {
    return (s || "").replace(/[&<>"']/g, (c) => ({
      "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;"
    }[c]));
  }
})();
