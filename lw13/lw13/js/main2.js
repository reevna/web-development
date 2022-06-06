const buttons = document.querySelectorAll("open_popup");

buttons.forEach(openPopup => {
    openPopup.addEventListener('click', () =>{

    popUp.classList.add('open');
})
})

const openPopup = document.getElementById('open_popup');
const closePopup = document.getElementById('close_popup');
const popUp = document.getElementById('popup');

openPopup.addEventListener('click', function(event){
  event.preventDefault();
  popUp.classList.add('open');
})

closePopup.addEventListener('click', () => {
  popUp.classList.remove('open');
})
