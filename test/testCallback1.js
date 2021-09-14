const boardData = require('../Data/boards.json');
const problem1 = require('../callback1.js');

function cb(id) {
    
    let res= boardData.find(boardId=>boardId.id===id)
    return res
    
}

problem1(cb,"mcu453ed").then((res) =>{
       console.log(res);
});