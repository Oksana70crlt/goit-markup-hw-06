(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  const toggleModal = () => {
    refs.modal.classList.toggle("is-open");
    document.body.classList.toggle("modal-open"); // блокуємо прокрутку під модалкою
  };

  // Відкрити/закрити за кнопками
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  // Закриття по кліку на бекдроп
  refs.modal.addEventListener("click", (e) => {
    if (e.target === refs.modal) toggleModal();
  });

  // Закриття по Esc
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && refs.modal.classList.contains("is-open")) {
      toggleModal();
    }
  });
})();
