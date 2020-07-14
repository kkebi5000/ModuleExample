
var user = require('./user4');


//변수처럼보이지만 user4에 실제로는 함수가 할당되어있으므로 함수처럼 사용가능하다. 자바에 익숙한 사람의 경우 이와같은 형태에 어색해 할수 있다.
//user();

function showUser(){
    return user().name + ', '+ 'No Group';
}

console.log('사용자 정보 : '+showUser());