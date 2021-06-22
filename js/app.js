'use strict';



let user = prompt('what\'s your name? ')

alert('welcome '+ user);



let username = prompt('Is my name ahmad?').toUpperCase();

switch (username) {

case 'YES':
case 'Y':
  console.log(false);

  alert('wrong my name is Abdulrahman');

  break;

case 'NO':
case 'N':

  alert('correct');
  console.log(true);

  break;

default:
  alert('you need to write yes or no ');

}


let age = prompt(' What is my Age now If I was Born in 1995  ');
switch (age) {
case '26':
  console.log(true);
  alert(true);
  break;

default:
  console.log(false);
  break;


}




let password = prompt('write your name here to continue ')

while(password !== user){

  password = prompt('you can\'t if you don\'t write it as before ' + user + ' ;)' );


}




let gym = prompt('Can I lift up 200 KG?').toUpperCase();

switch (gym){

case 'YES':
case 'Y':
  console.log(true);
  alert('thats correct ❚█══█❚ ');

  break;

case 'NO':
case 'N':

  alert('I can left more than that ❚█══█❚ ? ');
  console.log(false);
  break;


}

let languages = prompt('am I speak more than two languages ').toUpperCase();

switch (languages){

case('YES'):
case('Y'):
  alert('correct, I speak English,French,Arabic');
  console.log(true);
  break;

case ('NO'):
case ('N'):
  alert('Wrong, I speak 3 languages' );
  console.log(false);

  break;


}



alert('Thank your for your time '+ user);





for (let i = 0; i < 4; i++) {
  let guess = prompt('guess the right number');
  if (guess <= 4) {
    alert('to low ');


}


  else if (guess == 5) {
    alert('correct answer')

    console.log(true);
    break;
  }

  else if (guess > 5){
    alert('to high');

} if (i == 3) {
    alert('your out of attempt your correct answer is 5 ' )
    console.log(false);

}

}


// let richest = ['jeff', 'elon', 'bernard ',' bill ','mark'];

// for (let i = 0; i < 6 ; i++) {

//     let richest = prompt('write  the richest guys in the world');

//     if( i == richest.length ){

//     alert('correct answer') 
    
// } else if ( i != richest.length ){

// alert('wrong')
// }



// }



// let richest = ['jeff', 'elon', 'bernard ',' bill ','mark'];

// for (let i = 0; i < 6; i++) {

// let rich = prompt('who are the richest guys in the world ?')

// if ( rich === richest ) {

//   console.log(true);
//   alert('ture')
//   break
  
  
// }


// else if (rich > 10 ){

//   alert('wrong')

  
// } if (rich == 6) {

//   alert('there is no more attempt')
//   console.log(false);
// }


// }



