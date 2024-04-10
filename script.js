'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal'); // THIS WILL GIVE US A "NODELIST" SIMILAR TO AN ARRAY CONTAINING ALL THE ELEMENTS WITH THIS SIMILAR SELECTOR ('.show-modal') BECAUSE OF THE "querySelectorAll()" METHOD

const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function (i) {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  console.log('😃 Executed');
};

// LOOP🔁 TO TARGET EACH ELEMENT FROM THE NODELIST
for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModal);

// THE EVENTLISTENER FUNCTION DECLARED OUTSIDE THE PARENTHESIS NEEDS NO () TO BE INVOKED WHEN UESD AS AN ARGUMENT IN THE "addEventListener()" METHOD i.e closeModal() 👎 WILL EXECUTE WHETHER THE EVENT HAPPENS OR NOT
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  // ANY NAME CAN BE USED AS THE PARAMETER WHICH IS LITERARY A GENERATED OBJECT
  // FUNCTION WILL BE EXECUTED FOR KEYPRESS 'keydown ONCE IT HAPPENS
  console.log(event.key);
  console.log(event);

  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
