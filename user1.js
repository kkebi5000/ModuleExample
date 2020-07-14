//exports의 한계 : 속성으로 할당을 하는건 가능하지만 exports객체에 바로 할당하는것은 불가능하다. 이 한계를 극복하기위해 module.exports가 나왔다.
exports.getUser = function(){
    return {id: 'test01', name: '소녀시대'};
    
};

exports.group = {id: 'group01', name: '친구'};
