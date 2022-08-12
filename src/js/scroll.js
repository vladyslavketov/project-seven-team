import $ from 'jquery';
const menuDeskBtn = document.querySelector('[menu-desk-btn]');
const menuDesk = document.querySelector('[menu-desk]');
const menuMob = document.querySelector('[menu-mob]');
const menuMobBtn = document.querySelector('[menu-mob-btn]');
$(document).ready(function () {
  // Add smooth scrolling to all links
  $('a').on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1500,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    }
    if (menuMob.classList.value !== 'menu-mobile is-open') {
      return;
    }
    menuMob.classList.toggle('is-open');
    menuDeskBtn.classList.toggle('is-open');
    menuDesk.classList.toggle('is-open');
    menuMobBtn.classList.toggle('is-open');
    document.body.classList.toggle('menu-mobile-open');
  });
});