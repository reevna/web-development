   //валидация формы
   let form = document.querySelector('.form'),
   formInputs = document.querySelectorAll('.input'),
   inputName = document.querySelector('.name')
   inputEmail = document.querySelector('#email'),
   inputActivity = document.querySelectorAll('.activity'),
   inputCheckbox = document.querySelector('.checkbox');


let requiredName = false,
   requiredEmail = false,
   requiredActivity = false;


function validateEmail(email){
 let re =       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
 ;
 return re.test(String(email).toLowerCase());
}

function validateName(name)
{
 let re = /^[a-zа-я-]+$/i;
return re.test(String(name));
}

form.onsubmit = function(){
 let emailVal = inputEmail.value,
     nameVal = inputName.value,
 emptyInputs = Array.from(formInputs).filter(input => input.value === '');


formInputs.forEach(function(input){
 if(input.value === ''){
   input.classList.add('error');
 } else {
   input.classList.remove('error');
   requiredActivity = true;
 }

})
if (emptyInputs.length !== 0){
 console.log('inputs not filled');
 return false;
}

if(!validateEmail(emailVal)){
 console.log('email not valid');
 inputEmail.classList.add('error');
 return false;
}
else{
 inputEmail.classList.remove('error');
  requiredEmail = true;
}


if(!validateName(nameVal)){
 console.log('name not valid');
 inputName.classList.add('error');
 return false;
}
else{
 inputName.classList.remove('error');
 requiredName = true;
}
}
// ------------- конец валидации



const url = 'form_handler.php';
let options = {
  method: 'POST',
  headers: {'Content-Type': 'application/json; charset=utf-8'},
  body: JSON.stringify(formData)
};
 //const sendData = async(url, data) => {
  const response = await fetch(url, options);

  if (!response.ok){
     throw new Error('Ошибка ');
  }
//  return await response.json();
//};



 const sendDetails =() => {
   const regForm = document.querySelector('.form');

  regForm.addEventListener('submit', e =>{
    e.preventDefault();

   const formData = new FormData(regForm);

   const data = {};
   for ( const [key, value] of formData){
       data[key] = value;
   }
console.log(data);



   formData.set('registration', JSON.stringify(userData.regList));
    const regList = JSON.stringify(data);

    sendData(JSON.stringify(data))
    .then(()=>{
    //regForm.reset();
    })
    .catch((err)=>{
      console.log(err);
    })
  });

   }
   sendDetails();







  var jsonMessage = JSON.parse(data, function (key, value) {
    if (jsonMessage.status == 200) {
 //       скрыть попап
 document.getElementsByClassName('form').addEventListener('submit', function(e){
  if(requiredName && requiredEmail && requiredActivity ){
    document.body.removeChild(overlay);
  popUp.classList.remove('open');
 }
});
 }
 else
 {
//        вывести сообщение Упс ....  на самом попапе Innerhtml предваритьно убрав все поля из попапа
}

})
