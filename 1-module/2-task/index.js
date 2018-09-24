'use strict';

/**
 * Эту функцию трогать не нужно
 */
function print (text) {
  alert(text);
}

/**
 * Эту функцию нужно поменять так, 123
 * чтобы функция sayHello работала ко rkрректно
 */
function isValid (name) {

  if (!name) {
    return false;
  }

  if (name.indexOf(' ') !== -1) {
    return false;
  }

  if (name.length < 4) {
    return false;
  }

  return true;
}

function sayHello () {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print('Welcome back, ' + userName + '!');
  } else {
    print('Некорректное имя');
  }
}

sayHello();

