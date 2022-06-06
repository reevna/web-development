window.onload = main;
function main()
{
  const openPopup = document.getElementsByClassName('open_popup')[0];




  openPopup.addEventListener('click', onClick);



  const overlayDiv = document.createElement('div');
  overlayDiv.classList.add('overlay');
  overlayDiv.appendChild(createPopup());
  overlayDiv.addEventListener('click', onPopupClose);


function onClick()
{

  document.body.appendChild(overlayDiv);

}


function onPopupClose()
{
  document.body.removeChild(overlayDiv);

}



//      function createPopup()
 //     {
 //       const popup = document.createElement('div');
  //      popup.innerHTML = `
//
 //       `
 //       return popup;
 //     }


}

