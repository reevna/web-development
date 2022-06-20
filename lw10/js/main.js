const overlay = document.getElementById('overlay');
const popupContainer = document.getElementById('popup__container');
const popUp = document.getElementById('popup');
const closePopup = document.getElementById('close_popup');
const openPopupButtons = document.querySelectorAll('.open_popup');


escClose();
overlayOpen();
ovarlayClose();
PopupClose();

  // Открыть оверлэй и попап по клику на любую из кнопок
  function overlayOpen()
  {
    openPopupButtons.forEach(openPopupButton =>
      {
        openPopupButton.addEventListener('click', function(event)
        {
          event.preventDefault();
          popUp.classList.add('open');
          overlay.classList.add('overlay');
          overlay.classList.add('open');
        });
      });
  }


// Закрыть попап при клике на крестик
function PopupClose()
{
  closePopup.addEventListener('click', (e)=>
  {
    if (e.target == closePopup)
    {
      popUp.classList.remove('open');
      overlay.classList.remove('overlay');
    }
  })
}


//  закрытие при клике по оверлею
function ovarlayClose()
{
  popupContainer.addEventListener('click', (e)=>
  {
    if (e.target == popupContainer)
    {
      popUp.classList.remove('open');
      overlay.classList.remove('overlay');
    }
  })
}


// Закрыть оверлей и попап при нажатии на Esc
  function escClose()
  {
    window.addEventListener('keydown', function(e)
    {
      if ((e.key === 'Escape'|| e.key === 'Esc'))
      {
        popUp.classList.remove('open');
        overlay.classList.remove('open');
        animateClose(500);
      }
    });
  }


