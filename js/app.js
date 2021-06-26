// 'use strict';



// let user = prompt('what\'s your name? ');

// alert('welcome ' + user);

// let grade = 0;

// let username = prompt('Is my name ahmad?').toUpperCase();

// function abd() {
//   switch (username) {

//   case 'YES':
//   case 'Y':
//     console.log(false);

//     alert('wrong my name is Abdulrahman');

//     break;

//   case 'NO':
//   case 'N':

//     alert('correct');
//     console.log(true);

//     grade++;

//     break;

//   default:
//     alert('you need to write yes or no ');
//   }
// }
// abd();


// let age = prompt(' if I born in 1995 is my age now 26?').toLowerCase();

// function abd1() {
//   switch (age) {
//   case 'yes':
//   case 'y':
//     console.log(true);
//     alert('correct');
//     grade++;

//     break;

//   case 'no':
//   case 'n':

//     console.log(false);
//     alert('wrong');
//     break;

//   default:
//     alert('you will lose points if you don\'t answer well');
//     break;
//   }
// }
// abd1();


// let putyourname = prompt('write your name here to continue ');
// function abd2() {

//   while (putyourname !== user) {

//     putyourname = prompt('you can\'t if you don\'t write it as before ' + user + ' ;)');

//   }
// }
// abd2();

// let live = prompt('Am I living in Amman?').toUpperCase();

// function abd7() {

//   switch (live) {

//   case 'YES':
//   case 'Y':
//     alert('correct');
//     console.log('true');
//     break;

//   case 'NO':
//   case 'N':
//     alert('wrong');
//     console.log(false);

//     break;

//   default:
//     alert('not answered in right way');
//     break;
//   }
// } abd7();


// let gym = prompt('Can I lift up 200 KG?').toUpperCase();

// function abd3() {

//   switch (gym) {

//   case 'YES':
//   case 'Y':
//     console.log(true);
//     alert('thats correct ❚█══█❚ ');
//     grade++;

//     break;

//   case 'NO':
//   case 'N':

//     alert('I can left more than that ❚█══█❚ ? ');
//     console.log(false);
//     break;

//   default:
//     alert('not answered in right way');
//     break;
//   }
// }
// abd3();



// let languages = prompt('am I speak more than two languages ').toUpperCase();

// function abd4() {
//   switch (languages) {

//   case ('YES'):
//   case ('Y'):
//     alert('correct, I speak English,French,Arabic');
//     console.log(true);
//     grade++;

//     break;

//   case ('NO'):
//   case ('N'):
//     alert('Wrong, I speak 3 languages');
//     console.log(false);

//     break;

//   default:

//     alert('please focus the answers is yes or no ');
//     break;
//   }
// }
// abd4();


// function abd5() {
//   for (let i = 0; i < 4; i++) {
//     let guess = Number(prompt('guess the right number'));
//     if (guess <= 4) {
//       alert('to low ');
//     }


//     else if (guess === 5) {
//       alert('correct answer');

//       console.log(true);
//       grade++;

//       break;
//     }

//     else if (guess > 5) {
//       alert('to high');

//     } if (i === 3) {
//       alert('your out of attempt your correct answer is 5 ');
//       console.log(false);
//     }
//   }
// }
// abd5();



// let rich = ['elon', 'mark', 'jeff', 'bill'];

// let correct = false;

// function abd6() {
//   for (let times = 1; times <= 6; times++) {

//     let q = prompt('write 1 name of the 10 richest people').toLowerCase();

//     for (let i = 0; i < rich.length; i++) {

//       if (q === rich[i]) {

//         alert('correct');
//         times = 10;
//         grade++;

//         break;

//       }
//     }
//     if (correct) {
//       break;
//     }
//   }

// }
// abd6();


// alert('your score is ' + grade);
// alert('Thank your for your time ' + user);
