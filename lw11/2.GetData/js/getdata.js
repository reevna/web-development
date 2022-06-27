
button.onclick = main;



async function getUserCards(){
  let response = await fetch('http://localhost:8080/getData.php',
  {
    headers : {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    method: 'GET',
  })
  return await response.json();
}


function createCardElement(userCard){
  const cardholder = document.getElementById('cardholder');
  const card = document.createElement('div');
  card.className = 'card_get_data';
  card.innerHTML = `
   <div class="card">
   <div class="card_data">
     <img class="card__icon" src="img/card.svg" alt="Аватар" />
     <p>Ваше имя: ${userCard.name} </p>
     <p>Email: ${userCard.email}</p>
     <p>Деятельность: ${userCard.activity}</p>
     <p>Согласие на рассылку:  ${userCard.agreement ? "Да" : "Нет"}  </p>
   </div>
   </div>
   `
  cardholder.innerHTML += `<div class="card card_get_data"></div>`;
  return card;
};




async function main() {
  const userCards = await getUserCards();
  for (const userCard of userCards){
    const cardElement = createCardElement(userCard);
    document.body.appendChild(cardElement);
  }
}







