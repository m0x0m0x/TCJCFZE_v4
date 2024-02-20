/*
This js file is just for testing stuff
*/

console.log(
  ` %c
Challenge 3 - Javascript Fundamental 2
`,
  'color:green;font-size:1rem'
);

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
