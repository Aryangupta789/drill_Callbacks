/* 
	Problem 6: Write a function that will use the previously written functions 
    to get the following information. You do not need to pass control back to the 
    code that called it.
    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for all lists simultaneously
*/

function problem6(boardsFunction, listsFunction, cardsFunction, cbCards, cbLists, cbBoards, id) {
    setTimeout(() => {
        boardsFunction(cbBoards, id).then(res => {
            console.log(res);
        });
    }, 2000)

    setTimeout(() => {
        listsFunction(cbLists, id).then(res => {
            console.log(res);
        })
    }, 3000)

    setTimeout(() => {
        cardsFunction(cbCards, id).then(res => {
            console.log(res);
        });
    }, 4000)

}

module.exports = problem6;