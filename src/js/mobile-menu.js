(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  
    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenRef.classList.toggle("is-open");
    document.body.classList.toggle("menu-container-open");
  });
})();