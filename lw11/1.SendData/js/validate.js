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