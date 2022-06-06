window.onload = main;
function main(){

  const overlay = document.createElement('div');

  const openPopupButtons = document.querySelectorAll('.open_popup');
  openPopupButtons.forEach(openPopupButton => {
    openPopupButton.addEventListener('click', function(event){
      event.preventDefault();
      overlay.classList.add('overlay');
      document.body.appendChild(overlay);
      popUp.classList.add('open');
  });

  function overlayClose()
  {
    document.querySelector('overlay').addEventListener('click', () => {
    const overlay = document.getElementsByClassName('overlay');
    document.body.removeChild(overlay);
    })
  }

  const closePopup = document.getElementById('close_popup');
  const popUp = document.getElementById('popup');

    closePopup.addEventListener('click', () => {
      popUp.classList.remove('open');
      document.body.removeChild(overlay);
  })
  })


  window.onkeydown = function(event){
    if (event.keyCode == 'Esc') {
      popUp.classList.remove('open');
    }
  };

}

const email = document.getElementById('email');
const emailFormat  = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;

addEvent(form, "submit", function () {
  const emailCheck = email.value.length === 0 || emailFormat.emailCheck(email.value);

  if (!emailCheck) {
    email.className = "invalid";
  }});