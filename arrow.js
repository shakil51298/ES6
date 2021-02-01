// const doubleIt = function  shakil(num){
//     return num * 2;
// }                                                => old version to  write funtion expreision
// const result = shakil(50);
// console.log( result);

const doubleIt = num =>num * 2 ; // single parameter
const shakil = doubleIt(2);                        //=> new version to write the function expreision;
console.log(shakil);

const aDD = (x , y) => x + y;  // more than one parameter
const add = aDD(4,5);
console.log(add);

const give5 = () => 5;          // and no parameter
const rr = give5();
console.log(rr);

const doMath = (x , y) => {
    const sum = x + y;
    const diff = x - y;
    const total = sum * diff;
    return total;
}
const shakils = doMath(50, 5)
console.log(shakils);