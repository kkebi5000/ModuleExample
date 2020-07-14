//프로토타입으로 사용될수 있다.
function User(id,name){
    this.id = id;
    this.name = name;
}

//User에 getUser속성 추가
User.prototype.getUser = function(){
    return {id:this.id,name:this.name};
};

//User에 group속성 추가
User.prototype.group = {id:'group01',name:'친구'};

//User에 printUser속성 추가
User.prototype.printUser = function(){
    
    //this.name은 User의 두번째 파라미터인 name을 뜻하고 this.group.name 은 User.prototype.group.name을 뜻한다.
    console.log('user 이름 : ' + this.name + ', group: '+ this.group.name);
}

//new를 하지 않았으므로 main파일에서 new를 해줘야한다.
module.exports = User;