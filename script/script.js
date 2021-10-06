const timerHours = document.querySelector('#timer-hours'),
      timerMinutes = document.querySelector('#timer-minutes'),
      timerSeconds = document.querySelector('#timer-seconds'),
      deadline = '01 july 2022';

const addZero = (number) => {
  number = String(number);
  if (number.length === 1){
    number = '0' + number;
  };
return number;
};

const getTimeRemaining = (deadline) => {
  let dateStop = new Date(deadline).getTime(),
      dateNow = new Date().getTime(),
      timeRemaining = (dateStop - dateNow) / 1000;
      if (timeRemaining > 0){
      let   seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor((timeRemaining / 60) / 60);
      return {hours, minutes, seconds, timeRemaining};
      } else {
      let   seconds = '00',
            minutes = '00',
            hours = '00';
            clearInterval(startTimer);
      return {hours, minutes, seconds, timeRemaining};
      }
};

const updateClock = () => {
  let timer = getTimeRemaining(deadline);
  timerHours.textContent = addZero(timer.hours);
  timerMinutes.textContent = addZero(timer.minutes);
  timerSeconds.textContent = addZero(timer.seconds);
};

let startTimer = setInterval(updateClock, 1000);




window.addEventListener('DOMContentLoaded', function(){
'use strict';
const toggleMenu = () => {
  const btnMenu = document.querySelector('.menu'), // это кнопка, у которой класс  menu, которая открывает меню, и называется меню
        menu = document.querySelector('menu'), // а это, меню, которое <menu></menu>, и поэтому точка не нужна, ведь оно <menu></menu> 
        closeBtn = document.querySelector('.close-btn'),
        menuItems = menu.querySelectorAll('a'); 

  const handlerMenu = () => {
    if (!menu.style.transform || menu.style.transform === 'translate(-100%)'){
      if (document.documentElement.clientWidth > 768) {
      let i = -100;
      let  timer = setInterval(function() {
              i++;
              menu.style.transform = 'translate(' + i + '%)';
          if (i == 100) {clearInterval(timer)};
      }, 5);} else {menu.style.transform = 'translate(100%)';};
    } else {
      if (document.documentElement.clientWidth > 768) {
      let i = 100;
      let  timer = setInterval(function() {
              i--;
              menu.style.transform = 'translate(' + i + '%)';
          if (i == -100) {clearInterval(timer)};
      }, 5);} else {menu.style.transform = 'translate(-100%)';};
      // menu.style.transform = 'translate(-100%)';
    };
  }


  btnMenu.addEventListener('click', handlerMenu);

  const menuItemsFilter = (event) => {
  let target = event.target;
      console.log(target);
      console.log('target.tagName', target.tagName);
    if (target.tagName == 'A' || target.classList.contains('close-btn')) {
      handlerMenu();
    }
  };

  menu.addEventListener('click', menuItemsFilter);


  // closeBtn.addEventListener('click', handlerMenu);
  // menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
};

toggleMenu();

const togglePopUp = () => {
  const popUp = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupClose = document.querySelector('.popup-close');
  popupBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
      popUp.style.display = 'block';
    });
  });

 popupClose.addEventListener('click', () => {
  popUp.style.display = 'none';
 });

popUp.addEventListener('click', (event) => {
  let target = event.target;
  target = target.closest('.popup-content');
  if (!target) {
     popUp.style.display = 'none';
  }
});

};



togglePopUp(); 



const tabs = () => {
  const tabHeader = document.querySelector('.service-header'),
        tab = tabHeader.querySelectorAll('.service-header-tab'),
        tabContent = document.querySelectorAll('.service-tab');
        console.log('tabHeader', tabHeader);
        console.log('tab', tab);

  const toggleTabContent = (index) =>{
    for (let i=0; i < tabContent.length; i++){
      if (index === i){
        tab[i].classList.add('active');
        tabContent[i].classList.remove('d-none');
      } else {
        tab[i].classList.remove('active');
        tabContent[i].classList.add('d-none');
      }
    }
  }
  tabHeader.addEventListener('click', (event) => {
    let target = event.target;
      console.log('target 1', target);
      target = target.closest('.service-header-tab');
      console.log('target 2', target);
      if (target) {
        tab.forEach((item, i) => {
          if (item === target) {
            toggleTabContent(i);
          }
        });
      };
  })
};

tabs();




});