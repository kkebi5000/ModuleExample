//user1.js에 exports된것을 사용가능하게 함
var user1 = require('./user1');

function showUser(){
    
    return user1.getUser().name +', '+ user1.group.name;
}

console.log('사용자 정보 -> '+showUser());
