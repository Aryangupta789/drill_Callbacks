/*Problem 2: Write a function that will return all lists that belong 
to a board based on the boardID that is passed to it from the given 
data in lists.json. Then pass control back to the code that called 
it by using a callback function.*/

function problem2(cb, id) {
    return new Promise((resolve, request) => {
        setTimeout(() => {
            resolve(cb(id));
        }, 2000)
    })
}

module.exports = problem2;