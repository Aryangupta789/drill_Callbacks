/* 
	Problem 4: Write a function that will use the previously written 
    functions to get the following information. You do not need to 
    pass control back to the code that called it.
 
    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for the Mind list simultaneously
*/

function problem4(boardsFunction,listsFunction, cardsFunction, cbCards, cbLists, cbBoards, id) {

    boardsFunction(cbBoards, id).then(console.log);

     listsFunction(cbLists, id).then(res => {
        console.log(res);
     })
     
      cardsFunction(cbCards, id).then(res => {
          console.log(res);
      });
}

module.exports = problem4;