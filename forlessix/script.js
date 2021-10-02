'use strict';

let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Cуббота'];

let date = new Date();




document.write('<span id="first">'+ timeOfDay(date.getHours()) + '</span><br>');

document.write('<span id="second">' + 'Сегодня: '  + week[date.getDay()] + '</span><br>');

document.write('<span id="third">' +'Текущее время: ' + formatAMPM(date.getHours(), date.getMinutes(), date.getSeconds()) + '</span><br>');

document.write('<span id="forth">' + getDaysToNY() + '</span>');


setInterval(function(){
let firstSpan = document.getElementById('first');
let secondSpan = document.getElementById('second');
let thirdSpan = document.getElementById('third');
let forthSpan = document.getElementById('forth');

let date = new Date();
firstSpan.textContent = timeOfDay(date.getHours());
secondSpan.textContent = 'Сегодня: '  + week[date.getDay()];
thirdSpan.textContent = 'Текущее время: ' + formatAMPM(date.getHours(), date.getMinutes(), date.getSeconds());
forthSpan.textContent = getDaysToNY();
}, 1000);

function timeOfDay(hours){
  hours = Number(hours);
  if ((hours < 12) && (hours > 6)){
    return 'Доброе утро';
  } else {
    if ((hours >=12) && (hours<=17)){
      return 'Добрый день';
    } else {
      if ((hours >17) && (hours<=21)) {
        return 'Добрый вечер';
      } else {
          return 'Доброй ночи';
        }
      }
    }
  };


function getDaysToNY(){
  let NY = new Date("December 31, 2021");
   let ms = 24 * 60 * 60 * 1000;
  let daysLeft = Math.round((NY.getTime() - date.getTime())/ms);
  
  return 'До нового года осталось ' + daysLeft + ' дней';
}


function formatAMPM(hours, minutes, seconds) {
  let amOrPm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  hours =  hours < 10 ? '0'+  hours :  hours;
  minutes = minutes < 10 ? '0'+ minutes : minutes;
  seconds = seconds < 10 ? '0'+ seconds : seconds;
  return hours + ':' + minutes + ':' + seconds + ' ' + amOrPm;
}



