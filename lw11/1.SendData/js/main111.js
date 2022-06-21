document.getElementById('sendform').addEventListener('click', checkForm);

const overlay = document.getElementById('overlay');
const popupContainer = document.getElementById('popup__container');
const popUp = document.getElementById('popup');
const closePopup = document.getElementById('close_popup');
const openPopupButtons = document.querySelectorAll('.open_popup');
const regForm = document.querySelector('.form');
const sendForm = document.getElementById('sendform');
const OopsPopUp = document.getElementById('oops-form');
const RegPopUp = document.getElementById('registration-form');



let data =
  {
    name: document.getElementById('name'),
    email: document.getElementById('email'),
    activity: document.getElementById('activity'),
    checkbox: document.getElementById('checkbox')
  };



//Валидация формы
let form = document.querySelector('.form'),
formInputs = document.querySelectorAll('.input'),
inputName = document.querySelector('#name')
inputEmail = document.querySelector('#email'),
inputActivity = document.querySelector('#activity'),
inputCheckbox = document.querySelector('#checkbox');

let requiredName = false,
requiredEmail = false,
requiredActivity = false;


escClose();
overlayOpen();
ovarlayClose();
PopupClose();


//sendform.onclick = preventEmpty;
//form.onsubmit = checkForm;



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
    ///    document.body.removeChild(overlay);
      }
    });
  }



  function validateEmail(email)
  {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function validateName(name)
  {
    let re = /^[a-zа-я-]+$/i;
    return re.test(String(name));
  }

  function validateActivity(activity)
  {
    if (inputActivity.value !== "") {
      return true;
    }
    return false;
  }


  let el = document.getElementById('form');

  let nameValue = el.name.value;
  let emailValue = el.email.value;
  let activityValue = el.activity.value;



function checkAllFields()
{
  if (nameValue == "" && emailValue == "" && activityValue == "")
  {
    fail = "Заполните все поля";
    inputName.classList.add('error');
    inputEmail.classList.add('error');
    inputActivity.classList.add('error')
  }
}



function checkNameField()
{
if (!validateName(nameValue))
  {
    fail = "Введите корректное имя";
    inputName.classList.add('error');
  }
}


function checkEmailField()
{
if (!validateEmail(emailValue))
  {
    fail = "Введите корректный email";
    inputEmail.classList.add('error');
  }
}


function checkActivityField()
{
if (!validateActivity(activityValue))
  {
    fail = "Выберите деятельность";
    inputActivity.classList.add('error');
  }
}


function checkForm(event)
{
  event.preventDefault();
  let fail = "";
  checkAllFields(form);
  checkNameField(form);
  checkEmailField(form);
  checkActivityField(form);

  if (fail != "") {
    console.log(fail);
  }
  else
  {
    console.log("Поля заполнены успешно");
    inputName.classList.remove('error');
    inputEmail.classList.remove('error');
    inputActivity.classList.remove('error');
    regForm.onsubmit();
  }
}




regForm.onsubmit = async function()
  {
    //e.preventDefault();
    let response = await fetch('form_handler.php',
    {
      method: 'post',
      body: JSON.stringify(
      {
      name: data.name.value,
      email: data.email.value,
      activity: data.activity.value,
      checkbox: data.checkbox.checked
      })
    })

    if(response.ok)
    {
      let json = await response.json();
      popUp.classList.remove('open');
      overlay.classList.remove('open');
      regForm.reset();
      console.log(response.status);
    }
    else
    {
      console.log("Ошибка HTTP: " + response.status);
      RegPopUp.classList.add('hidden');
      OopsPopUp.classList.add('shown');
    }
  }
  //как при 404 обнулить форму ?