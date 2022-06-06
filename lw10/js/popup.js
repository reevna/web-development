window.onload = main;
function main() 
{

    const button_header = document.getElementsByClassName('button_header')[0]
    button_header.addEventListener('click', onClick);

    const button_top_block = document.getElementsByClassName('button_top_block')[0]
    button_top_block.addEventListener('click', onClick);

    const overlayDiv = document.createElement('div');
    overlayDiv.classList.add('overlay');

    const popUp = createPopup();
    popUp.addEventListener('click', (e) => {
        e.preventDefault();
    })

    overlayDiv.appendChild(popUp);
    overlayDiv.addEventListener('click', onPopupClose);

    function onClick()
    {
        document.body.appendChild(overlayDiv);
    }

    function onPopupClose(e)
    {
        if (e.defaultPrevented)
        {
            return
        }
        document.body.removeChild(overlayDiv);
    }
    
    document.addEventListener('keydown', function(event) 
    {
        const key = event.key;
        if (key === "Escape") {
            popUp.classList.remove('open');
        }
    });
    
    window.addEventListener('keydown', function(e)
    {
        if((e.key==='Escape'||e.key==='Esc'))
        {
            popUp.classList.remove('open');
            return false;
        }
    }, true);

    window.onkeydown = function(event){
        if (event.keyCode === 'Esc') 
        {
          popUp.classList.remove('open');
        }
      };


    /*window.addEventListener('scroll', onWinScroll);

    function onClick()
    {
        overlayDiv.style.top = window.scrollY + "px"
    }*/


    /*button_header.addEventListener('click', () => requestAnimationFrame(myAnimation));
    let id = requestAnimationFrame(myAnimation);
    cancelAnimationFrame(id);
    
    function myAnimation() {
    pos++; // Увеличиваем позицию квадрата на единицу
    elem.style.top = pos + "px"; // Устанавливаем значение top для инлайн
    стилей у квадрата
    elem.style.left = pos + 'px'; // // Устанавливаем значение left для инлайн
    стилей у квадрата
    
    if (pos < 300) {
    requestAnimationFrame(myAnimation); // Запуск анимации
    }
    }

    /*function onWinScroll()
    {

    }*/

    /*function onOverlayClick(e) 
    {
        if(e.defaultPrevented)
        {
            return
        }
    }
    */
}    

function createPopup()
{
    const popUp = document.createElement('div');
    popUp.className = 'form_registration_popup';
    popUp.innerHTML = `
    <button title="Закрыть (ESC)" type="button" class="popup-close"></button>
    <img class="form_illustration" src="./img/Welcome.png" alt="Регистрация" />
    <div class="text_registration">Записаться на курс</div>
    <div>
      <form class="form_include" method="POST" action="./php/register1.php">
        <input class="text_form" type="text" name="name" title="Ваше имя" id="name" placeholder="Ваше имя" required="required" />
        <input class="text_form" type="email" name="email" title="Email" id="email" placeholder="Email" required="required" />
        <select focus size="1" class="form_custom" name="profession"  placeholder="Деятельность" value="" required>
          <option focus value hidden disabled selected>Деятельность</option>
          <option focus class="text_form_option" value="Программист">Программист</option>
          <option focus class="text_form_option" value="Дизайнер">Дизайнер</option>
          <option focus class="text_form_option" value="Маркетолог">Маркетолог</option>
        </select>
        <div class="checkbox_agree">
          <input type="checkbox" name="agree" checked="checked" class="checkbox">
          <span class="text_agree">Согласен получать информационные материалы о старте курса</span>
        </div>
        <input class="button" type="submit" value="Записаться на курс" />      
      </form>
    </div>
    `
    return popUp;
}