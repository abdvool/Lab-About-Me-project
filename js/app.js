'use strict';



let user = prompt('what\'s your name? ')

alert('welcome '+ user);



let username = prompt('Is my name Abd?').toUpperCase();

if (username == 'YES' ) {

  alert(' Correct ');
} else {

  alert('wrong');
}


let age = prompt(' What is my Age now If I was Born in 1995  ').toUpperCase();
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








alert('Thank your for your time '+ user);
