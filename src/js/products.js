// icecream

(() => {
  const refs = {
    openTextOneBtn: document.querySelector("[btn-icecream]"),
    closeTextOneBtn: document.querySelector("[btn-icecream]"),
    textOne: document.querySelector("[text-btn-icecream]"),
  };

  refs.openTextOneBtn.addEventListener("click", toggleTextOne);

  function toggleTextOne() {
    refs.textOne.classList.toggle("is-hidden");
    refs.closeTextOneBtn.classList.toggle("active__icecream");
  }
})();

// ice coffee

(() => {
  const refs = {
    openTextTwoBtn: document.querySelector("[btn-icecoffee]"),
    closeTextTwoBtn: document.querySelector("[btn-icecoffee]"),
    textTwo: document.querySelector("[text-btn-icecoffee]"),
  };

  refs.openTextTwoBtn.addEventListener("click", toggleTextTwo);

  function toggleTextTwo() {
    refs.textTwo.classList.toggle("is-hidden");
    refs.closeTextTwoBtn.classList.toggle("active__icecoffee");
  }
})();

// milkshakes

(() => {
  const refs = {
    openTextThreeBtn: document.querySelector("[btn-milkshakes]"),
    closeTextThreeBtn: document.querySelector("[btn-milkshakes]"),
    textThree: document.querySelector("[text-btn-milkshakes]"),
  };

  refs.openTextThreeBtn.addEventListener("click", toggleTextThree);

  function toggleTextThree() {
    refs.textThree.classList.toggle("is-hidden");
    refs.closeTextThreeBtn.classList.toggle("active__milkshakes");
  }
})();