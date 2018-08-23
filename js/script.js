'use strict';
(function () {
  let sportsMenu = document.querySelector('.sports');
  let buttons = document.querySelectorAll('.add');
  let template = document.querySelector('template');
  let main = template.content.querySelector('#whole-el');
  let sub = main.querySelector('#sub-menu');
  let mock = document.querySelector('.mock');

  // отображение вложенных меню по клику
  let showMenu = function (evt) {
    evt.preventDefault();
    let target = evt.target.parentElement;
    let spanTarget = evt.target.parentElement.parentElement;
    let targetSubmenu = target.querySelector('.sports__submenu');
    let targetSubmenuSpan = spanTarget.querySelector('.sports__submenu');
    if (targetSubmenu !== null) {
      targetSubmenu.classList.toggle('shown');    
    } else if (targetSubmenuSpan !== null) {
      targetSubmenuSpan.classList.toggle('shown');
    }
  };

  if (window.innerWidth > 1000) {
    sportsMenu.addEventListener('click', showMenu); 
  }

  buttons.forEach(function (it) {
    it.addEventListener('click', function () {
      let liSub = it.parentElement;
      let liMain = liSub.parentElement.parentElement;
      let liParent = liMain.parentElement.parentElement;
      let nameSub = liSub.querySelector('p');
      let nameCountry = liMain.querySelector('p');
      let nameSport = liParent.querySelector('p');      
  
      if (mock.querySelector('#main-name') && mock.querySelector('#main-name').textContent === nameSport.querySelector('span').textContent) {
        let subCopy = sub.cloneNode(true);
        let subName = subCopy.querySelector('#sub-name');
        subName.textContent = nameCountry.textContent + '. ' + nameSub.textContent;
        subName.className = nameCountry.className;
        subName.style = 'margin-bottom: 2px';
        mock.appendChild(subCopy);

      } else {      
        let mainCopy = main.cloneNode(true);
        let subName = mainCopy.querySelector('#sub-name');
        subName.textContent = nameCountry.textContent + '. ' + nameSub.textContent;
        mainCopy.querySelector('#main-name').textContent = nameSport.textContent;
        subName.className = nameCountry.className;
        subName.style = 'margin-bottom: 2px';
        mainCopy.querySelector('#main-paragraph').className = nameSport.className;
  
        mock.appendChild(mainCopy);
      }
    });
  });
})();