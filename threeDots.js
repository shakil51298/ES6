const age = [12, 25, 24, 23, 12, 21];
const age2 = [10, 18, 79, 20];
const shakilsAge = [ 56, 45, 50, 45];                          
// const allAges = age.concat(age2).concat(shakilsAge);       // old system to add more than one array 
const allAges = [...age , ...age2, ...shakilsAge];
console.log(allAges);


const Business = 560;
const Minister = 500;
const rokon = 430;
// const  Maxium = Math.max(Business,Minister, rokon);  //old system to findOut a Max value;
const taka = [560, 500, 430];
const MaxNuber = Math.max(...taka);  // ES6
console.log(MaxNuber);