const persona = {name: "jake William", age: 17, job: "facebooker", gfName: "Ema Watson", address:"kochu khet",Phone: 0174055080565};

const {address} = persona;//এভাবেও ডিক্লেয়ার করা যাবে। 
// const gfName = persona.gfName;
// const Phone = persona.Phone;
console.log(address);


// array destructure
const  myFriendList= ["salman Khan", "fokira khan", "zambu khan", "rakib khan", "shazid khan", "zubayer khan"];
const [mybesfriend,closeFriends,...RemainingFriends] = myFriendList;
console.log(mybesfriend,closeFriends,'.','(remaining friends):-',...RemainingFriends,'.');


const ComplaxObject = {
    Name : "abc",
    info:{
        address: 'kola bagana',
        leader: "tiger leader"
    }
}
console.log(ComplaxObject.info.leader);