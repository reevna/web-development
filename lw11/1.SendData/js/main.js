window.onload = main;
function main(){

  const overlay = document.createElement('div');

// Открыть оверлэй и попап по клику на любую из кнопок

  const openPopupButtons = document.querySelectorAll('.open_popup');
  openPopupButtons.forEach(openPopupButton => {
    openPopupButton.addEventListener('click', function(event){
      event.preventDefault();
      overlay.classList.add('overlay');
      document.body.appendChild(overlay);
      popUp.classList.add('open');
  });

//Закрыть оверлей при клике по нему

 function overlayClose()
 {
    const overlay = document.getElementsByClassName('overlay');
    document.querySelector('overlay').addEventListener('click', () => {
    document.body.removeChild(overlay);
   })
  }

// Закрыть попап при клике на крестик

  const closePopup = document.getElementById('close_popup');
  const popUp = document.getElementById('popup');

    closePopup.addEventListener('click', () => {
      popUp.classList.remove('open');
      document.body.removeChild(overlay);
  })



// Закрыть оверлей и попап при клике на кнопу отправки формы

  function sendForm()
  {
    const sendForm = document.getElementById('sendform');
    sendForm.addEventListener('click', () => {
        popUp.classList.remove('open');
        document.body.removeChild(overlay);
    })

  }

// Закрыть оверлей и попап при нажатии на Esc

  window.addEventListener('keydown', function(e)
  {
    if ((e.key === 'Escape'|| e.key === 'Esc')) {
      popUp.classList.remove('open');
      document.body.removeChild(overlay);

    }
 });

    })}

