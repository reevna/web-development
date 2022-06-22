
// let json = await response.json();
// let user = {
//   name: nameValue,
//   email: emailValue,
//   activity: activityValue,
//   checkbox: checkboxValue
// };

button.onclick = getUserCards();

 async function getUserCards()
  {
    //e.preventDefault();
    let response = await fetch('http://localhost:8080/getData.php',
    {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       },
      method: 'post',
      body: JSON.stringify()
      })

let userList = await response.json();

console.log(userList);
return userList;
    }
    let card = createCard();
    document.body.appendChild(card);
    getUserCards(userList);

   // let user = JSON.parse(userList);


    // if(response.ok){
    //     .then(response => await (response.json()))
    //     .then(result =>{
    //         result.array.forEach(element => {
    //         let card = createCard();
    //         document.body.appendChild(card);
    //       });
    // else
    // {
    //   console.log("Файлов не существует" + response.status);
    // }






function createCard()
{
    const card = document.createElement('div');
    card.className = 'card_get_data';
    card.innerHTML = `
    <div class="card">
    <div class="card_data">
      <img class="card__icon" src="img/card.svg" alt="Аватар" />
      <p>Ваше имя: </p>
      <p>Email: </p>
      <p>Деятельность:</p>
      <p>Согласие на рассылку: </p>
    </div>
  </div>
</div>
    `
    return card;
};