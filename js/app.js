'use strict';



let user = prompt('what\'s your name? ')

alert('welcome '+ user);



let username = prompt('Is my name Abd?').toUpperCase();

if (username == 'YES' ) {

  alert(' Correct ');
} else {

  alert('wrong');
}


let age = prompt(' What is my Age now If I was Born in 1995  ');
switch (age) {
case '26':
  console.log('correct');
  alert('correct');

  break;

default:
  alert('you are wrong');
  console.log('Wrong');
  break;
}




let password = prompt('write your name here to continue ')

while(password !== user){

  password = prompt('you can\'t if you don\'t write it as before ' + user + ' ;)' );


}




let gym = prompt('Can I lift up 200 KG?');

switch (gym){

case 'YES':
  console.log('correct');
  alert('thats correct ❚█══█❚ ');

  break;

default:

  alert('I can left more than that ❚█══█❚ ? ');
  console.log('wrong');
}

let languages = prompt('am I speak more than two languages ').toLowerCase();

switch(languages){

case('yes'):
  alert('correct, I speak English,French,Arabic');
  console.log('correct');
  break;

default:
  alert('Wrong, I speak 3 languages' );
  console.log('wrong');


}



alert('Thank your for your time '+ user);
