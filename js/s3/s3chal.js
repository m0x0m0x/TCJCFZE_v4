/*
Chanllenges for section 3 
*/

console.log(
  ` %c
  ⠒⠛⠣⠄⢈⣉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⡠⠂⡀⠉⠂⠠⡀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠈⠉⠐⠂⠄⡀⠀⠠⡀⢴⠀⠎⠀⣀⡀⠠⠄⠀⠠⡀⢀⠀⠀⠀
  ⠤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⣻⡛⠚⢶⡴⢋⣿⠗⠐⠒⣈⡦⠚⠁⠀⠀⠀
  ⢟⠚⠓⡦⣄⣀⠀⠀⣀⡀⠔⠋⠀⡹⠯⠧⢂⢤⢀⢰⣠⢦⠥⢋⠀⠀⠀⠀⠀⠀
  ⣾⣭⣟⣳⣶⠝⠁⠀⠀⠀⠀⠀⢰⠁⠀⣀⣎⣎⠀⡠⠐⠁⠀⠀⠑⠤⢀⣀⣠⣴
  ⣄⣙⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀⡜⠉⠉⠉⢉⠝⠁⠀⠀⠀⠀⠀⠀⠀⠁⢸⠥⠄
  ⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⡠⠈⡐⠉⠉⡕⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡆⠀
  ⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠁⢰⠀⠀⠜⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣏
  ⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⢇⣿⡠⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡈⠝
  ⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⢨⡩⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡃⠀
  ⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀
  ⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡎⠀⠀
  ⠋⣁⠜⠢⣀⠀⠀⠀⠀⠀⠘⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡜⠀⠀⠀
  ⠈⠀⠀⢀⣹⠽⠶⠠⠤⡤⠤⣼⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⡿⠃⠀⠀⠀
  ⠄⠐⠉⠁⠀⢀⡠⢔⡩⠔⠋⠀⣭⣿⣧⣤⣀⣀⣀⣀⣠⣤⣶⣿⣿⠄⠀⠀⠀⠀
Code from the Section 3 chalenge
-------------------------------------------------------------
`,
  'color:#F72798'
);
console.log('');
console.log('');
console.log('');

/////////////////////////////////////////////////////////////////////
////////////////////// Challenge 1///////////////////////////////////
/////////////////////////////////////////////////////////////////////
console.log(
  ` %c Challenge 1 
`,
  'color:#F94C10; font-size:1rem'
);

//solution code

// Average arrow function
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// using the arrow function to set the variables
const scoreDolphins = calcAverage(22, 23, 71);
const scoreKoalas = calcAverage(656, 54, 41);

// Actual functions
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins > 2 * avgKoalas) {
    console.log(`Doplhins winds ${avgDolphins} vs ${avgKoalas}`);
  } else if (avgKoalas > 2 * avgDolphins) {
    console.log(`Koalas winds ${avgKoalas} vs ${avgDolphins}`);
  } else {
    console.log('No Team Wins');
  }
}

//You were stuck here, since you didnt enter the params
checkWinner(scoreDolphins, scoreKoalas);

/////////////////////////////////////////////////////////////////////
////////////////////// Challenge 2///////////////////////////////////
/////////////////////////////////////////////////////////////////////
console.log(
  ` %c Challenge 2 
`,
  'color:#F94C10; font-size:1rem'
);

function calcTip(bill) {
  let tip;
  if (bill >= 50 && bill <= 300) {
    tip = bill * (15 / 100);
  } else {
    tip = bill * (20 / 100);
  }
  return tip;
}

const bills = [125, 155, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(`
Calculated Tips are
---
`);
console.log(tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(`
Totals = bills + tips
---
`);
console.log(totals);

console.log(
  `%c
Given Solution
`,
  'color:green'
);

const calcTip1 = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
// arrrow function menthod
const calcTip2 = (bill) =>
  bill >= 0.15 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills2 = [125, 555, 44];
const tip2 = [calcTip1(bills2[0]), calcTip1(bills2[1]), calcTip1(bills2[2])];
const totals2 = [bills[0] + tips[0], bills[1] + tips[2], bills[3] + tips[3]];
console.log(bills2, tip2, totals2);

/////////////////////////////////////////////////////////////////////
////////////////////// Challenge 3///////////////////////////////////
/////////////////////////////////////////////////////////////////////
// Mark Object
const Mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

// John Object
const John = {
  fullName: 'Johm Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

Mark.calcBMI();
John.calcBMI();
console.log(Mark.bmi, John.bmi);

if (Mark.bmi > John.bmi) {
  console.log(
    `${Mark.fullName}'s BMI (${Mark.calcBMI()}) is higher than ${
      John.fullName
    }'s (${John.calcBMI()})!`
  );
} else if (John.bmi > Mark.bmi) {
  console.log(
    `${John.fullName}'s BMI (${John.calcBMI()}) is higher than ${
      Mark.fullName
    }'s (${Mark.calcBMI()})!`
  );
}
