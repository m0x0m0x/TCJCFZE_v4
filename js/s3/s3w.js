'use strict';

console.log(
  ` %c
Section 3 - Js Fundamentals 2 - Strict Mode
`,
  'color:#F72798;font-size: 1rem;'
);
console.log(
  ` %c
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠤⠖⠶⠶⠶⠶⠦⠤⠠⣿⣿⡓⠶⠶⢶⣶⣶⣦⣤⣤⣤⣤⣀⣀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣄⣀⠤⠒⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠓⢢⣸⠛⠻⣯⣿⠏⠉⠛⢻
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⠠⣿⣋⡁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢨⡿⠀⠀⠀⠙⣷⣄⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⣀⡤⢴⣶⠚⠉⠉⠀⠀⠀⠀⠀⠀⠀⠉⠉⠁⠐⠒⠒⠠⠤⠤⠀⣀⣀⣀⠀⠀⠀⠀⠀⣸⡇⢠⠖⠒⠲⣾⠈⠳⡄
  ⠀⠀⠀⠀⠀⡠⠖⠙⠛⠒⠿⣋⡉⢢⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⣐⠶⠋⠳⣧⠒⠒⠚⠉⡆⠀⢹
  ⠀⠀⢀⡴⠋⠑⡶⠀⠀⠀⠀⠀⠀⠈⠀⠀⠐⠛⠯⠭⣉⣉⡩⠗⣂⡠⠔⠒⠒⣢⠤⢀⣀⠤⠄⠒⠈⠉⠀⠀⠀⠀⢰⠀⠀⠀⠀⡇⣸⣿
  ⣠⣴⡟⠀⣠⠞⠒⠤⠄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠐⠒⢊⡡⠔⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⢠⣧⣿⣿
  ⣯⡀⠑⠒⠁⠀⠀⠀⠀⠀⠈⠉⠐⠒⠤⠄⣀⠴⠂⠀⠀⠀⠐⠒⠢⠤⡂⠁⠀⠀⠀⠀⠀⠀⠀⣠⣶⣖⣄⠀⠀⠀⢸⠀⠀⢀⣼⣿⣿⡿
  ⢾⣿⡦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠄⠀⠀⠀⣀⣀⣤⣾⣿⡏⢻⡜⡀⠀⣠⣼⣤⠞⣋⠥⢿⡿⠁
  ⢸⣿⡇⠀⠸⡷⢶⣤⢄⣀⡀⠀⠀⠀⠈⠒⠂⠤⠤⣄⣀⣀⣀⣀⣠⣤⣮⣤⣤⣾⢿⣿⣿⣿⡟⣇⣿⣾⢷⣧⣾⠟⢋⠔⠋⠈⠉⠁⠀⠀
  ⡿⣜⣇⣀⡤⠗⠤⢄⡉⠛⠛⠛⠻⢶⡒⠠⠤⢤⣄⢀⣹⣍⣉⣉⣉⣁⣀⠤⠔⠛⢹⣯⣽⣿⢛⣿⣿⣼⢈⠋⡠⠊⠁⠀⠀⠀⠀⠀⠀⠀
  ⠑⢌⣻⢄⡀⠀⣠⣶⣿⣽⣖⡢⠄⣀⢱⠀⠀⢾⠉⣷⠀⠀⣳⠤⠤⢿⠀⠀⠀⣴⠟⢉⣿⠈⡍⣍⢋⡿⠼⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠉⠓⠯⣕⠻⢷⣿⡿⠊⠁⠀⠀⢩⠃⠀⡤⠿⢿⣶⣾⣯⣏⣩⣿⠀⠀⢸⣿⡶⢾⢹⢼⡿⢃⡾⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠉⠒⠠⢍⣑⠒⠠⠴⠯⣤⣴⣚⣒⣒⣒⣒⣶⣿⣿⡧⠐⠊⠁⠀⠀⢸⣀⣾⣷⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠑⠒⠤⠤⢀⣀⣀⣀⣀⣉⣉⣩⣽⣞⠠⠤⠤⠒⢊⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀

  https://emojicombos.com/dot-ascii-art

`,
  'color:#F72798'
);

// ///////////////////////////////////

// /*
// Testing Strict mode
// */
// console.log('');
// console.log('');
// console.log(
//   '%c 32 - Strict Mode - SM',
//   'color: #FDEE00; font-weight: bold; font-size: 1rem;'
// );

// let hasDrivLicSM = false;
// const passTestSM = true;
// if (passTestSM) hasDrivLicSM = true;
// if (hasDrivLicSM) console.log('✅I can Drive');

// // In built keywords reserved keywords

// // const interface = SomeInterface

// // const private = 23 - this is also a rerved keyword

// ///////////////////////////////////

// /*
// Testing Strict mode
// */
// console.log('');
// console.log('');
// console.log(
//   '%c 33 - Functions - s3f',
//   'color: #E9D66B; font-weight: bold; font-size: 1rem;'
// );

// // creating logger function

// function loggerS3F() {
//   console.log('💋DrinkHerPiss');
// }

// // Calling , Running or Invoking Function
// loggerS3F();
// loggerS3F();
// loggerS3F();

// // Implement a new function

// // In this function here is a console.log statment so it is fully printed
// function fruitProcS34(apples, oranges) {
//   console.log(apples, oranges);

//   // Here Storing the input variables
//   const juiceS3F = `
//   Juice with ${apples} apples and ${oranges} oragnes.
//   `;
//   console.log(juiceS3F);
// }

// //Now just callt the function
// fruitProcS34(2, 10);

// // The samea above function usign return statement will store output in a variable
// function fruproS3F(apples2S3F, oranges2S3F) {
//   console.log(
//     `
//   You entered %c${apples2S3F}%c
//   You entered %c${oranges2S3F}%c
//   `,
//     'color:#FC0FC0',
//     'color:white',
//     'color:#FC0FC0',
//     'color:white'
//   );

//   return;
// }

// // execute about function
// fruproS3F(2, 4);

// // Doing it fromt eh tutorial
// function fruproc_3S3F(apple_3S3F, oranges_3S3F) {
//   console.log(apple_3S3F, oranges_3S3F);
//   const juice_3S3F = `Juice with ${apple_3S3F} apples and ${oranges_3S3F} oranges`;
//   return juice_3S3F;
// }
// const fr_3S3F = fruproc_3S3F(23, 24);
// console.log(fr_3S3F);
// console.log(fruproc_3S3F(50, 50));

// const appleOrangeJuice_31 = fruproc_3S3F(10, 10);
// console.log(appleOrangeJuice_31);

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// /*
// Functions and declarations
// */
// console.log('');
// console.log('');
// console.log(
//   '%c 32 - Functiona and declations - FD',
//   'color: #FDEE00; font-weight: bold; font-size: 1rem;'
// );

// function calcAge1FD(birthYearFD) {
//   const ageFD = new Date().getFullYear() - birthYearFD;
//   return ageFD;
// }
// // Running the aactual function
// console.log(calcAge1FD(1980));

// // Function Expression - Anonymous function
// // Expression - outputs values
// const calcAgeFD2 = function (birthyearFD2) {
//   const ageFD2 = new Date().getFullYear() - birthyearFD2;
//   return ageFD2;
// };
// console.log(calcAgeFD2(20));

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// /*
// Arrow Functions
// */
// console.log('');
// console.log('');
// console.log(
//   '%c 36   - Arrow functions - AF',
//   'color: #FDEE00; font-weight: bold; font-size: 1rem;'
// );

// function calcAge1AF(birthYearAF) {
//   const ageAF = new Date().getFullYear() - birthYearAF;
//   return ageAF;
// }
// // Running the aactual function
// console.log(calcAge1AF(1980));

// //Arrow function
// const calcAge3AF = (birthYearAF) => new Date().getFullYear() - birthYearAF;
// console.log(calcAge3AF(33));

// // Arrow function 2
// // How many year person has left at retirement

// const yearsUntilRetirementAF = (birthYear2AF, firstNameAF) => {
//   const ageAF2 = new Date().getFullYear() - birthYear2AF;
//   const retirementAF = 65 - ageAF2;
//   // return retirementAF;
//   return `
//   ${firstNameAF} retires in ${retirementAF}
//   `;
// };
// console.log(yearsUntilRetirementAF(1980, 'Kunty'));
// console.log(yearsUntilRetirementAF(1900, 'Punty'));

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// /*
// 36 - Calling one function inside a function - nested Functions
// */
// console.log('');
// console.log('');
// console.log(
//   '%c 37   - Nested Functions - NF',
//   'color: #FDEE00; font-weight: bold; font-size: 1rem;'
// );

// // Fruit cutting procedure
// function cutFruitNF(fruit) {
//   return fruit * 4;
// }
// // Food processor function example
// function fruitJuiceNF(appleNF, orangeNF) {
//   //Calling the above function
//   const applePiecesNF = cutFruitNF(appleNF);
//   const orangePiecesNF = cutFruitNF(orangeNF);

//   //Print received variables
//   const juiceNF = `
//   ${applePiecesNF} peices of  Apples = ${appleNF} Eaten
//   ${orangePiecesNF} pieces  Orange = ${orangeNF} Eaten
//   `;
//   return juiceNF;
// }
// console.log(fruitJuiceNF(2, 4));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Arrays 
*/
// console.log('');
// console.log('');
// console.log(
//   '%c 39   - Arrays - AR',
//   'color: #FDEE00; font-weight: bold; font-size: 1rem;'
// );
// // ------------------------------------------------------

// // store freinds names in variables

// const friend1AR = 'ina';
// const friend2AR = 'liy';
// const friend3AR = 'ipt';

// // array method

// const friendsAR = ['ina', 'liy', 'ipt'];
// console.log(friendsAR);

// // Secondary method for array definition
// const yearsAR = new Array(2000, 3100, 2000);

// // Accessing the variables
// console.log(friendsAR[0]);
// console.log(friendsAR[1]);
// console.log(friendsAR[2]);

// // Get number of items
// console.log(friendsAR.length);

// // Getting the alst element
// console.log(friendsAR[friendsAR.length - 1]);

// //add element to the array - mutate array
// friendsAR[2] = 'dre';
// console.log(friendsAR);

// // Array can store different values
// const firstNameAR = 'INa';
// const inaAR = [firstNameAR, 'Jan', 2 * 100, friendsAR];
// console.log(inaAR[0]);
// console.log(inaAR[1]);
// console.log(inaAR[2]);
// console.log(inaAR);

// // Array excercise

// const calcAgeAR = function (birthyear) {
//   return new Date().getFullYear() - birthyear;
// };

// const yearsAF = [1990, 1967, 2002, 2010, 2018];

// console.log(calcAgeAR(yearsAF));

// // Calculate of array elemets

// const age1AF = calcAgeAR(yearsAF[0]);
// const age2AF = calcAgeAR(yearsAF[1]);
// const age3AF = calcAgeAR(yearsAF[yearsAF.length - 1]);

// console.log(age1AF, age2AF, age3AF);

// /*
//  Stroung expressions directly inside array , this is possible since
//  those expressions result in a value
// */
// const agesAF = [
//   calcAgeAR(yearsAF[0]),
//   calcAgeAR(yearsAF[1]),
//   calcAgeAR(yearsAF[yearsAF.length - 1]),
// ];

// console.log(agesAF);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Arrays 
*/
// console.log('');
// console.log('');
// console.log(
//   '%c 40   - Array Methods - AM',
//   'color: #FDEE00; font-weight: bold; font-size: 1rem;'
// );

// // ------------------------------------------------------

// const mistressAM = ['ina', 'fia', 'alo'];
// console.log(mistressAM);

// // push method for arrays
// // Funtion defaults to giving a length value
// // This adds to end of the arry
// const newLeMiAM = mistressAM.push('jian');
// console.log(mistressAM);
// console.log(newLeMiAM);

// // Adding to start of the array
// mistressAM.unshift('idj');
// console.log(mistressAM);
// // unshift also resuls in length of array

// //remove elements of array
// console.log(mistressAM);

// // Pop method , remove last element
// // Returns the new element

// console.log(
//   `

// %c Pop Methods
// `,
//   'color:#97FFF4;font-size:14px'
// );
// const mistressPopAM = mistressAM.pop();

// console.log(mistressAM);

// console.log(mistressPopAM);

// // array method shift removes the first elements
// const shiftAM = mistressAM.shift();
// console.log(shiftAM);
// mistressAM.shift();
// mistressAM.shift();
// console.log(mistressAM);

// console.log(
//   `

// %c Deetermine position of elements
// `,
//   'color:#97FFF4;font-size:14px'
// );

// console.log(mistressAM);
// mistressAM.push('gin');
// mistressAM.push('fin');
// console.log(mistressAM);

// // finding position of gin
// console.log(mistressAM.indexOf('gin'));

// // if not available will return -1 always
// console.log(mistressAM.indexOf('fon'));

// // Modern method es6
// console.log(mistressAM.includes('gin'));
// console.log(mistressAM.includes('lono'));

// mistressAM.push(69);
// console.log(mistressAM);

// // Checkign with strict equality
// console.log(mistressAM.includes(9));

// // Use case for includes
// if (mistressAM.includes(68)) {
//   console.log('Likes 69');
// } else {
//   console.log('nooooooooooooooooooooooooooooooooo');
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Objects
*/
// console.log('');
// console.log('');
// console.log(
//   '%c 42   - Objects - OB',
//   'color: #FDEE00; font-weight: bold; font-size: 1rem;'
// );

// // ------------------------------------------------------

// const mistressOB = ['ina', 'gina', 2000 - 69, 'mistress', ['far', 'sca', 'no']];

// // Objects key value pairs

// const mistressObject = {
//   firstname: 'Ina',
//   lastName: 'Gina',
//   age: 2000 - 69,
//   job: 'mistress',
//   friends: ['far', 'sca', 'no'],
// };
// console.log(mistressObject);

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /*
// 43 - jDot Vs Bracket Notation - DVB
// */
// console.log('');
// console.log('');
// console.log(
//   '%c 43   - Dot vs Bracket Notation - DVB',
//   'color: #FDEE00; font-weight: bold; font-size: 1rem;'
// );

// // ------------------------------------------------------

// const mistressObject = {
//   firstname: 'Ina',
//   lastName: 'Gina',
//   age: 2000 - 69,
//   job: 'mistress',
//   fetish: ['far', 'sca', 'no'],
// };
// console.log(mistressObject);

// // Retrievign data use dot notation

// console.log(
//   `%c
// Dot notation
// `,
//   'color:#97FFF4;font-size:1rem'
// );
// console.log(mistressObject.age);
// console.log(mistressObject.fetish);

// console.log(
//   `%c
// Bracket Notation
// `,
//   'color:#97FFF4;font-size:1rem'
// );

// console.log(mistressObject['fetish']);

// // retrieving and adding

// const mistressObject2 = {
//   firstName: 'Ina',
//   lastName: 'Gina',
//   age: 2000 - 69,
//   jobName: 'mistress',
//   Specialfetish: ['far', 'sca', 'no'],
//   Freefetish: ['rape'],
// };

// console.log(mistressObject2);

// console.log(mistressObject2.firstName);

// const nameKey = 'Name';
// console.log(mistressObject2['first' + nameKey]);

// console.log(mistressObject2[`first${nameKey}`]);

// console.log(mistressObject2['last' + nameKey]);

// console.log(mistressObject2['job' + nameKey]);

// const fetishKey = 'fetish';
// console.log(mistressObject2['Special' + fetishKey]);
// console.log(mistressObject2['Free' + fetishKey]);
// console.log(mistressObject2[`Free${fetishKey}`]);

// console.log(
//   `%c
// Testing of bracket notation
// `,
//   'color:#97FFF4;font-size:1rem'
// );

// //using example for google

// // Assuming mistressObject2 has properties like "FreeFeet", "FreeSpanking", etc.
// // const fetishKey = "Feet"; // Example value

// // const propertyName = `Free${fetishKey}`; // Creates "FreeFeet"
// // console.log(mistressObject2[propertyName]); // Access and log the value of "FreeFeet" property

// const dirtyMistress = {
//   firstName: 'Mina',
//   lastName: 'Stinklady',
//   fetishName: 'scatQueen',
//   specialFetish: 'Sweat',
//   dirtyFetish: 'ShitSlave',
//   goodFetish: 'snot',
// };

// console.log(dirtyMistress);

// const nameKey2 = 'Fetish';
// const propertyName = `special${nameKey2}`;
// console.log(dirtyMistress[`dirty${nameKey2}`]);
// console.log(dirtyMistress[propertyName]);

// /*
// In this example the input is being taken and then it is being logged inthe console
// For eg: if input = dirtyFetish
// = Then the answer will - 'Shit Slave'
// */

// console.log(
//   `%c
// Prompt
// `,
//   'color:#97FFF4;font-size:1rem'
// );

// // Ask prompt
// // const IntIn = prompt(
// //   'What do u want to know about dirtyMistress - Choose fetish'
// // );

// // Printing the input
// // console.log(`%c Print Input`, 'color:green');
// // console.log(IntIn);

// // // Printing with what was put into the prompt
// // console.log(`%c Take Prompt`, 'color:green');
// // console.log(dirtyMistress[IntIn]);

// // // Run conditional logic
// // console.log(`%c Add Conditional Logic`, 'color:green');
// // if (dirtyMistress[IntIn]) {
// //   console.log(dirtyMistress[IntIn]);
// // } else {
// //   console.log('Fucked');
// // }

// // writing the above logic in one line
// // console.log(number > 0 && number % 2 === 0 ? "Even positive number" : "Not an even positive number");

// // console.log(`%c One Line conditional Logic`, 'color:green');
// // console.log(dirtyMistress[IntIn] ? dirtyMistress[IntIn] : 'Fucked');

// console.log(
//   `%c
// Adding with dot and bracket notation
// `,
//   'color:#97FFF4;font-size:1rem'
// );
// console.log(mistressObject2);

// //adding with dot notation
// mistressObject2.publicHair = 'Bushy';
// console.log(mistressObject2);

// // Adding with bracket pair
// mistressObject2['femdom'] = 'Extreme';
// console.log(mistressObject2);

// // Add array to
// mistressObject2['style'] = ['dom', 'sensual', 'lick'];
// console.log(mistressObject2);
// console.log(
//   `%c
// Challenge
// `,
//   'color:#97FFF4;font-size:1rem'
// );

// // console.log(mistressObject2[firstName])

// console.log(
//   `
// Mistress %c${mistressObject2.firstName}${mistressObject2.lastName}%c is %c${mistressObject2.jobName}%c
// whose pubic hair is nice and %c${mistressObject2.publicHair}%c
// she likes the following %c${mistressObject2.style.length}%c styles %c${mistressObject2.Specialfetish}%c and
// her speciality is %c${mistressObject2.style[0]}%c
// `,
//   'color:#FFA3FD',
//   'color:white',
//   'color:#FFA3FD',
//   'color:white',
//   'color:#FFA3FD',
//   'color:white',
//   'color:#FFA3FD',
//   'color:white',
//   'color:#FFA3FD',
//   'color:white',
//   'color:#FFA3FD',
//   'color:white'
// );

// // Findint the lenght of the enumerable keys in the object
// console.log(Object.keys(mistressObject2).length);

// console.log(
//   `%c
// 43 - Object Methods
// `,
//   'color:#97FFF4;font-size:1rem'
// );

// // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /*
//  44 - Object Methods - OM
//  */
// console.log('');
// console.log('');
// console.log(
//   '%c 44 - Object Methods - OM',
//   'color: #FDEE00; font-weight: bold; font-size: 1rem;'
// );
// // ------------------------------------------------------

// const dirtyMistress = {
//   firstName: 'Mina',
//   lastName: 'Stinklady',
//   fetishName: 'scatQueen',
//   specialFetish: 'Sweat',
//   dirtyFetish: 'ShitSlave',
//   goodFetish: 'snot',
//   birthYear: 2000,
//   isStinky: true,

//   // Defining a function inside the object
//   // Function attached to object is called method
//   // Also using the this method on he key which is already defined in the object
//   // calcAge: function () {
//   //   console.log(dirtyMistress);
//   //   let currentYear = new Date().getFullYear();
//   //   return currentYear - this.birthYear;
//   // },

//   // this keyword variation
//   calcAge: function () {
//     let currentYear = new Date().getFullYear();
//     this.age = currentYear - this.birthYear;
//     return this.age;
//   },

//   // Writing method
//   getSummary: function () {
//     return `
//     Summary Pussy
//     ---
//     ${this.firstName} is ${this.calcAge()} and she is very ${
//       this.isStinky ? `Stinky` : `no`
//     }
//     `;
//   },
// };

// // Calling method using dot notation
// console.log(dirtyMistress.calcAge());

// //Calling method with bracket notation
// // console.log(dirtyMistress['calcAge'](2000));

// // Variation of the method
// console.log(dirtyMistress.age);
// console.log(dirtyMistress.age);
// console.log(dirtyMistress.age);

// // challenge summarize
// console.log(`
// ${dirtyMistress.firstName} is ${dirtyMistress.age} and ${dirtyMistress.isStinky}
// `);

// console.log(`%cWriting the summary as a method`, 'color:green');
// // Doing it in the methods way
// console.log(dirtyMistress.getSummary());

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
 46 - For Loop - FO'
 */
console.log('');
console.log('');
console.log(
  '%c 46 - For Loop - FO',
  'color: #FDEE00; font-weight: bold; font-size: 1rem;'
);
// ------------------------------------------------------
