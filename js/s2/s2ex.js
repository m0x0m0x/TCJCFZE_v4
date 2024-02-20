/**
 * Section 2: JS Funda Part 1 Practice assigments section
 */

console.log(
  `
%c JS Funda Part1 Excercises
`,
  'color:#FF1DCE;font-size:1.5rem'
);

/**
 * Values and Variables﻿
Declare variables called country, continent and population and assign their values according to your own country (population in millions).

Log their values to the console.
 */

let myCountry = 'Bootynia';
let myContinent = 'Bootsia';
let myPopulation = 69;
console.log(
  `
My country = %c ${myCountry}%c 
My continent is = %c ${myContinent} %c
My Population is = %c ${myPopulation} %c
`,
  'color:#9333ea',
  'color:white',
  'color:#9333ea',
  'color:white',
  'color:#9333ea',
  'color:white'
);

/*
Datatypes assignment
*/
console.log(
  '%c Data Types',
  'color: #F653A6; font-weight: bold; font-size: 1rem;'
);
let isIsland = true;
console.log(`Variable type is %c${typeof isIsland}`, 'color:#00FFBF');
let language;
console.log(
  `Variable type of %clanguage  %c${typeof lanaguage}`,
  'color:#E97451',
  'color:#00FFBF'
);
console.log(
  `Variable type of %c myPopulation  %c${typeof myPopulation}`,
  'color:#E97451',
  'color:#00FFBF'
);
console.log(
  `Variable type of %c myCountry  %c${typeof myCountry}`,
  'color:#E97451',
  'color:#00FFBF'
);
console.log(
  `Variable type of %clanguage  %c${typeof lanaguage}`,
  'color:#E97451',
  'color:#00FFBF'
);

/*
Variable assignment - let const and var 
*/
console.log(
  '%c Variable assignment - let const and var',
  'color: #F653A6; font-weight: bold; font-size: 1rem;'
);
const langU = 'bogus';
// langU = 'pindo'

//////////////////////////////////////////////////////
/*
Basic Operators
*/
console.log('');
console.log('');
console.log('');
console.log(
  '%c Basic Operators',
  'color: #F653A6; font-weight: bold; font-size: 1rem;'
);

console.log(
  `
Half my population - %c myPopulation/2 = %c ${myPopulation / 2}
`,
  'color:#E97451',
  'color:#00FFBF'
);

console.log(
  `
Increate my population by 1  - %c myPopulation+= = %c ${(myPopulation += 1)}
`,
  'color:#E97451',
  'color:#00FFBF'
);

const finlandPopulation = 6000000;
console.log(
  `
Is myPopulation more than Finland=6M  - %c myPopulation > FinlandPop = %c ${
    myPopulation > finlandPopulation
  }
`,
  'color:#E97451',
  'color:#00FFBF'
);

const avPop = 33000000;
console.log(
  `
Is my population less than the averate of 33million ?  - 
%c myPopulation < avPop = %c ${myPopulation < avPop}
`,
  'color:#E97451',
  'color:#00FFBF'
);
const myDescription =
  myCountry + 'is in world and its' + myPopulation + 'speak bootoneese';
console.log(
  `
%c ${myDescription}
`,
  'color:#00FFBF'
);

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////
/*
Basic Operators
*/
console.log('');
console.log('');
console.log('');
console.log(
  '%c Number 16: Challenge-1',
  'color: #F653A6; font-weight: bold; font-size: 1rem;'
);

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

console.log(
  `
Mass of Mark =  %c ${massMark} %c
Height of Mark = %c ${heightMark} %c
BMIMark = %c ${BMIMark} %c
---
Mass of John = %c${massJohn} %c
Heignt of John = %c${heightJohn} %c
BMIMark = %c${BMIJohn} %c
---
BMIMark > BMIJohn = %c${BMIMark > BMIJohn}%c
`,
  'color:#00FFBF',
  'color:white',
  'color:#00FFBF',
  'color:white',
  'color:#00FFBF',
  'color:white',
  'color:#00FFBF',
  'color:white',
  'color:#00FFBF',
  'color:white',
  'color:#00FFBF',
  'color:white',
  'color:#00FFBF',
  'color:white'
);
console.log('');
console.log('');
console.log('');
