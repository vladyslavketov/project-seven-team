(() => {
  const btnMenu = document.querySelector("[data-menu-button]");
  const btnMenuIsOpen = document.querySelector(".btn-menu.is-open");
  const menuMain = document.querySelector(".menu");
  const menuMobile = document.querySelector(".menu-mobile");
  const nav = document.querySelector(".nav");
  const btnBuy = document.querySelector(".button--buy");

  btnMenu.addEventListener("click", () => {
      const expanded = btnMenu.getAttribute("aria-expanded") === "true" || false;

      btnMenu.classList.toggle("is-open");
      btnMenu.setAttribute("aria-expanded", !expanded);

      menuMobile.classList.toggle("is-open");
      document.body.classList.toggle("mobile-menu--is-open");
      menuMobile.append(btnMenu, btnBuy, nav);
  });
})();


// $('.btn-menu').on('click', function() {
// 	let menuMob = $('.menu-mobile').html();

// 	$('.menu-mobile').html($('menu').html());
//   $('menu').html(menuMob);
// });