// шаблон
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open")
    refs.modal.classList.toggle("is-hidden");
  }
})();

// кнопка Buy-now
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-buy-open]"),
    closeModalBtn: document.querySelector("[data-modal-buy-close]"),
    modal: document.querySelector("[data-modal-buy]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open")
    refs.modal.classList.toggle("is-hidden");
  }
})();

// кнопка Read more
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-read-open]"),
    closeModalBtn: document.querySelector("[data-modal-read-close]"),
    modal: document.querySelector("[data-modal-read]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open")
    refs.modal.classList.toggle("is-hidden");
  }
})();

// кнопка Our locations
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-locations-open]"),
    closeModalBtn: document.querySelector("[data-modal-locations-close]"),
    modal: document.querySelector("[data-modal-locations]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open")
    refs.modal.classList.toggle("is-hidden");
  }
})();

// кнопка franchise
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-franchise-open]"),
    closeModalBtn: document.querySelector("[data-modal-franchise-close]"),
    modal: document.querySelector("[data-modal-franchise]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open")
    refs.modal.classList.toggle("is-hidden");
  }
})();