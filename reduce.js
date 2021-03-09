const nums =[12,4]
const total = nums.reduce((num,sum) => {
    return num + sum
}
     , 0)
// console.log(total);

const friends = [
    {name : 'shakil',taka: 40},
    {name : 'fhakil',taka: 450},
    {name : 'rhakil',taka: 70},
    {name : 'khakil',taka: 40},
]
const totalMoney = friends.reduce((total,friend)=>{
    console.log(total,friend);
    return total + friend.taka
},0);

console.log(totalMoney);
