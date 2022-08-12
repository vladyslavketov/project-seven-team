(() => {
  const menuDeskBtn = document.querySelector("[menu-desk-btn]");
  const menuDesk = document.querySelector("[menu-desk]");
  const menuMob = document.querySelector("[menu-mob]");
  const menuMobBtn = document.querySelector("[menu-mob-btn]");
  
  menuDeskBtn.addEventListener("click", () => {
    const expanded =
      menuDeskBtn.getAttribute("aria-expanded") === "true" || false;
  
    menuDeskBtn.classList.toggle("is-open");
    menuDeskBtn.setAttribute("aria-expanded", !expanded);
    menuMobBtn.classList.toggle("is-open");
    menuMobBtn.setAttribute("aria-expanded", !expanded);

    menuDesk.classList.toggle("is-open");
    menuMob.classList.toggle("is-open");
    document.body.classList.toggle("menu-mobile-open");
  });
  menuMobBtn.addEventListener("click", () => {
    const expanded =
      menuMobBtn.getAttribute("aria-expanded") === "false" || true;
  
    menuDeskBtn.classList.remove("is-open");
    menuDeskBtn.setAttribute("aria-expanded", !expanded);
    menuMobBtn.classList.remove("is-open");
    menuMobBtn.setAttribute("aria-expanded", !expanded);

    menuDesk.classList.remove("is-open");
    menuMob.classList.remove("is-open");
    document.body.classList.remove("is-open");
  });
})();