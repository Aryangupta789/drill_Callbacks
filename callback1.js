/* Problem 1: Write a function that will return a particular board's information 
based on the boardID that is passed from the given list of boards in boards.json 
and then pass control back to the code that called it by using a callback function.*/

function problem1(cb, id) {
    return new Promise((resolve, request) => {
        setTimeout(() => {
            resolve(cb(id));
        }, 2000)
    })
}

module.exports = problem1;
