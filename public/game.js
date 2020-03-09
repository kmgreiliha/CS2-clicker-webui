
// Change "test" to any username you'd like to start a new game
var username = "test";

var socket = io.connect("localhost:8080", {transports: ['websocket']});
setupSocket();


function setupSocket() {

    // This function is called whenever a new game state is received from the server
    socket.on('gameState', function (jsonGameState) {
        //console.log(jsonGameState);
        // You must display: current gold, and the name, number owned, and cost for each type of equipment

        const gameData = JSON.parse(jsonGameState);
        const username = document.getElementById("username");
        const gold = document.getElementById("gold");

        const shovelName = document.getElementById("shovelName");
        const shovelOwned = document.getElementById("shovelOwned");
        const shovelCost = document.getElementById("shovelCost");

        const excavatorName = document.getElementById("excavatorName");
        const excavatorOwned = document.getElementById("excavatorOwned");
        const excavatorCost = document.getElementById("excavatorCost");

        const mineName = document.getElementById("mineName");
        const mineOwned = document.getElementById("mineOwned");
        const mineCost = document.getElementById("mineCost");

        username.innerHTML = gameData.username;
        gold.innerHTML = gameData.gold

        shovelName.innerHTML = gameData.equipment.shovel.name
        shovelOwned.innerHTML = gameData.equipment.shovel.numberOwned
        shovelCost.innerHTML = gameData.equipment.shovel.cost

        excavatorName.innerHTML = gameData.equipment.excavator.name
        excavatorOwned.innerHTML = gameData.equipment.excavator.numberOwned
        excavatorCost.innerHTML = gameData.equipment.excavator.cost

        mineName.innerHTML = gameData.equipment.mine.name
        mineOwned.innerHTML = gameData.equipment.mine.numberOwned
        mineCost.innerHTML = gameData.equipment.mine.cost
    });
}

function initializeGame() {
    socket.emit("register", username);

    // TODO: Add any initialization code you'd like to setup your GUI
    // This function is called once when the page loads

}


// Call this function whenever the user clicks your gold button
function clickGold() {
    socket.emit("clickGold");
}


// Call this function whenever the user clicks to purchase equipment
// The parameter is the id of the equipment type to purchase
function buyEquipment(equipmentID) {
    socket.emit("buy", equipmentID);
}
