/*
This will have the code for the challenges
*/

console.log(
  ` %c
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⣶⣾⣿⡿⠿⠿⠛⠛⣶⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣶⣿⣯⠗⠊⠉⣡⠖⣁⣠⣤⣸⣿⣿⣿⣿⣿⣿⣶⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣿⡿⠛⠉⠀⠀⠠⣌⡥⠞⡗⠒⢶⣿⣿⣿⣿⣿⣟⠛⠋⠃⢸⠳⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣄⠀⡀⠀⠀⠋⢁⡠⣢⣷⠾⠿⢿⣿⣿⣿⣿⣿⣧⡀⠺⣟⡄⣼⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⠟⣡⢮⠆⠀⢀⡴⢋⡾⠋⡠⣶⠠⢼⣹⣿⡿⢿⣯⣟⠛⡆⠈⢷⣻⡉⢿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣏⣴⣷⠏⠀⠀⠈⣠⠋⣴⣼⢳⡇⡀⡇⢸⣿⣿⠛⢿⡿⣷⣾⡀⢸⣯⣹⠀⢳⡹⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠛⠛
⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⠏⠄⠀⠀⣰⡃⣾⠁⢏⣿⢰⠃⢳⣿⣿⣿⣄⢰⡀⢈⠻⣞⠿⠉⢻⣇⢢⢣⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣛⣻
⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⡏⠀⢀⣼⡿⢠⠇⡀⣼⣿⠘⡆⡄⢻⠟⠣⣹⣾⡟⢼⣆⣹⣦⠀⢸⣿⣼⡎⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉
⠀⠀⠀⠀⠀⢠⡿⡼⢻⣿⣿⣿⡿⢠⣴⣿⡿⠃⢀⣼⣿⣿⣿⠀⡟⠸⢸⡇⠀⠙⢿⣿⡜⣿⡹⣿⣧⠈⡇⠀⣧⠸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢸⣿⣇⣿⣿⣿⣏⣴⣿⣿⡿⠁⢠⣿⣿⣿⣿⣿⡜⡧⠀⢸⠀⠀⠀⠈⠻⣿⡽⣧⢋⣿⣿⡋⢺⣾⣧⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣰⣿⣿⣿⣿⠀⣿⠇⣇⠀⢸⠀⠀⠀⠀⠀⢹⣿⣿⣶⣿⣿⣷⣼⣿⠙⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢸⣿⣿⣟⣹⣿⣿⣿⣿⣿⣿⣿⣿⡿⣽⡿⡄⣿⣾⣿⣠⣇⣠⡤⠶⠚⠉⠉⢻⣿⣿⡿⢿⣿⣟⢿⢦⣹⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠃⣇⣼⣿⣿⠁⠀⣠⣤⣶⣶⣶⣶⣿⣿⣷⢸⣿⣿⣷⣌⣿⡻⠦⠄⠤⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢹⠃⠀⠀⣿⣿⣿⡏⠀⣾⡿⢿⣿⣿⣿⡸⢹⣿⡏⠸⣿⡏⣿⣾⡏⠛⢶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣠⠞⣽⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣶⣿⣶⣶⡀⣿⣿⡿⠀⠀⠋⠠⠼⠛⠛⠉⠁⢸⣿⡇⠃⣧⡇⣷⣿⣱⡀⠀⠈⠻⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢀⣼⠃⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣝⢿⣿⣿⣯⡀⠀⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⡇⣤⣿⣴⣿⣇⡟⠷⣄⠀⢸⢯⠙⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⣾⡇⠀⣾⣿⣿⣿⣿⡿⣝⣿⣿⣿⣿⣭⡟⠋⠉⠀⠀⣸⣿⡏⢀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠈⠙⠋⠈⡆⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢿⡀⢸⣿⠏⢿⣿⡏⣗⢿⠈⢻⣿⣿⣿⣆⣀⠀⠀⣰⡟⠙⠀⠘⠆⠀⠀⠀⠀⠀⢀⡐⠱⣹⢿⣿⣿⣿⣿⣿⣿⣄⠀⠀⠀⠀⠀⣇⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢁⣿⠋⠀⢸⣿⣠⣿⣯⡀⡆⢻⣎⡙⣿⣍⣴⠞⠋⡔⠁⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀⣰⣻⣿⣿⣿⣿⣯⡞⡈⠛⢦⣄⡠⠀⣰⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⣸⠃⠀⠀⢸⣿⣿⣿⣿⡇⣧⠘⣟⠛⠻⡟⠳⣄⠊⠀⠀⠀⠰⠶⠶⠾⠋⠁⠀⢀⣼⠃⣿⣿⣿⣿⡿⢻⡇⠉⠉⠉⠉⠉⠝⠉⠉⠁⠒⠤⡀⠀⠀⠀⠀⠀⠀⠀
⠀⢰⠇⠀⠀⠀⣾⣽⣿⣿⢿⢇⣿⢰⢿⡄⠀⣷⣀⠏⢹⡦⣄⡀⠀⠀⠀⠀⠀⢀⡴⠛⠁⢰⣿⣿⣿⣿⢇⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⣄⠀⠀⠀⠀⠀
⠀⣾⠀⠀⢀⠀⡏⣿⣿⠟⣾⣿⣸⢸⠼⣿⡄⣿⡟⠀⠀⠱⡀⠉⠑⠒⠤⠤⠔⠋⠀⠀⠀⣾⣿⣿⣿⡿⠞⠀⠀⠀⢀⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢦⠀⠀⠀⠀
⢸⣿⡆⠀⠁⢸⢀⣿⣧⣼⡿⠁⢸⡏⠀⠘⢿⣿⡃⠀⠀⠀⠣⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⠟⠉⠀⠀⠀⣠⠖⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⡀⠀⠀
⠸⣷⡿⢄⣠⣇⢼⣿⣿⠉⠀⠀⡸⠀⠀⠀⠀⠓⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⡿⠋⠀⠀⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢣⠀⠀
⠀⠻⣍⠚⣿⣧⠀⢿⣿⣆⠀⠈⠁⠀⠀⠐⣒⡢⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⡟⢁⡴⠒⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⡄⠀⠀⠀⠀⠈⢆⠀
⠀⠀⠈⠉⣿⣿⡆⠈⠻⣿⣧⠀⠀⠀⠀⠀⠀⠈⠉⠐⠒⠒⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⡷⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠀⠈⠢

Code from the challenges
-------------------------------------------------------------
`,
  'color:#F72798'
);
console.log('');
console.log('');
console.log('');
///////////////////////////////////////////////
/*
Coding Challenge 3
*/
console.log(
  '%c Coding Challenge 3',
  'color: #F653A6; font-weight: bold; font-size: 1rem;'
);
const scoreDolphinsC3 = (96 + 108 + 89) / 3;
const scoreKoalasC3 = (96 + 108 + 89) / 3;

console.log(`
scoreDolphins = ${scoreDolphinsC3}
scorpeKoalas = ${scoreKoalasC3}
`);

if (scoreDolphinsC3 > scoreKoalasC3) {
  console.log('🐬Dolphins win the Trophy');
} else if (scoreDolphinsC3 < scoreKoalasC3) {
  console.log('🐨Koalas win the Trophy');
} else {
  console.log('➡️Both win Trophy');
}

console.log('');
console.log('');
console.log('');

///////////////////////////////////////////////
/*
Section 2 - Coding Challenge 4
*/
console.log(
  '%c Coding Challenge 3',
  'color: #F653A6; font-weight: bold; font-size: 1rem;'
);

// Note variables - name have prefix so they can be repeated

const billS24 = 40;
const tipS24 =
  billS24 >= 50 && billS24 <= 300 ? billS24 * (15 / 100) : billS24 * (20 / 100);
console.log(
  `The bill was ${billS24}, the tip was ${tipS24}, and the total value ${
    billS24 + tipS24
  }`
);