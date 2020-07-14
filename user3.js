var user = {
    getUser: function(){
        return {id:'test01',name:'소녀시대'};
    },
    group: {id:'group01',name:'친구'}
};

//exports.user가 불가능해 아래와 같이 하였다.
module.exports = user;