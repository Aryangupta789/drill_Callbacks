const boardsFunction = require("../callback1");
const listsFunction = require("../callback2");
const cardsFunction = require("../callback3");
const problem4 = require("../callback4");

const boardData = require("../Data/boards.json");
const cardData = require("../Data/cards.json");
const listData = require("../Data/lists.json");

function cbBoards(id) {
    let res= boardData.find(boardId=>boardId.id===id)
    return res
}

function cbLists(id) {
    return listData[id]
}

function cbCards(id) {
    for (list of listData[id]) {
        return list["name"] === "Mind" ? cardData[list.id] : null;
    }
}


problem4(boardsFunction, listsFunction, cardsFunction, cbCards, cbLists, cbBoards, "mcu453ed");