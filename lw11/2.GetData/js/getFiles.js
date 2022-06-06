async function getResponse(){
  let response = await fetch('getData.php');
  let content = await response.text();
  console.log(content)


getResponse();

if(!response.ok){
    throw new Error ('Файлов не существует')
}
return await response.json();
}



function createCard()
{
    const card = document.createElement('div');
    card.className = 'card_get_data';
    card.innerHTML = `
    <div class="card">
    <div class="card_data">
      <img class="card__icon" src="img/card.svg" alt="Аватар" />
      <p>Ваше имя</p>
      <p>Email</p>
      <p>Деятельность</p>
      <p>Согласие на рассылку</p>
    </div>
  </div>
</div>
    `
    return card;
};