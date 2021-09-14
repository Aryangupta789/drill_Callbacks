const listData = require('../Data/lists.json');
const problem2 = require('../callback2');


function cb(id) {
    return listData[id]
}

problem2(cb,"mcu453ed").then((res) =>{
       console.log(res);
});