var User = require('./user10.js');

//모듈에서 new를 하지않았으므로 main파일인 여기서 해줘야한다.
var user = new User('test01','소녀시대');

user.printUser();