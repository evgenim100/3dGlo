window.addEventListener('DOMContentLoaded', function(){
'use strict';
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

const toggleMenu = () => {
  const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
        closeBtn = document.querySelector('.close-btn'),
        menuItems = document.querySelectorAll('ul>li');

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
  closeBtn.addEventListener('click', handlerMenu);
  menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
};

let startTimer = setInterval(updateClock, 1000);
toggleMenu();

const togglePopUp = () => {
  const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupClose = document.querySelector('.popup-close');
  popupBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
      popup.style.display = 'block';
    });
  });

 popupClose.addEventListener('click', () => {
  popup.style.display = 'none';
 });
};

togglePopUp();

});