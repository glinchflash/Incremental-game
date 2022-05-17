//variable list
let gold = 0;
let adCost = 100;
let totalAD = 0;
let clickingPower = 1;
let bfCost = 500;
let totalbf = 0;
//variables for temporary boost
let ieCost = 1000;
let timeLeft = 15;


//disable buttons
document.getElementById("buyAd").disabled = gold < adCost;
document.getElementById("buyBF").disabled = gold < bfCost;
document.getElementById("infinityEdge").disabled = gold < ieCost;


//function to add 1 to gold/score per click
document.getElementById("addGold").addEventListener("click", addGold);

function addGold() {
    gold = gold + clickingPower;
    document.getElementById("gold").innerHTML = gold.toFixed(2);
}


// function to check if buttons may be enabled
document.getElementById("addGold").addEventListener("click", btnCheck);

function btnCheck() {
    document.getElementById("buyAd").disabled = gold < adCost;
    document.getElementById("buyBF").disabled = gold < bfCost;
    document.getElementById("infinityEdge").disabled = gold < ieCost;
}
// function to buy upgrade 1 /and have no negative value

document.getElementById("buyAd").addEventListener("click", buyAD);
document.getElementById("buyAd").addEventListener("click", btnCheck)

function buyAD() {
    if (gold < adCost) {
        alert("you don't have enough gold to purchase this!");
    }
    if (gold >= adCost) {
        gold = gold - adCost;
        totalAD = totalAD + 1;
        adCost = Math.round(adCost * 1.68);
        clickingPower = clickingPower + 1;

        document.getElementById("gold").innerHTML = gold.toFixed(2);
        document.getElementById("adCost").innerHTML = adCost;
        document.getElementById("totalAD").innerHTML = totalAD;
    }
}

// function to buy upgrade 2 (autoclicker)
document.getElementById("buyBF").addEventListener("click", buyBF);
document.getElementById("buyBF").addEventListener("click", btnCheck)
function buyBF() {
    if (gold < bfCost) {
        alert("you don't have enough gold to purchase this!");
    }
    if (gold >= bfCost) {
        gold = gold - bfCost;
        totalbf = totalbf + 1;
        bfCost = Math.round(bfCost * 1.65);
        document.getElementById("gold").innerHTML = gold.toFixed(2);
        document.getElementById("bfCost").innerHTML = bfCost;
        document.getElementById("totalbf").innerHTML = totalbf;
    }
}

//set interval to make score/gold go higher automatic based on upgrade 2 // + 1000ms = 1second
setInterval(function () {
    gold = gold + Math.floor(totalbf);
    if (totalbf >= 10) {
        gold = gold + Math.floor(totalbf * 1.5);
        bfCost = Math.round(bfCost * 1.25);
    }
    if (totalbf >= 25) {
        gold = gold + Math.floor(totalbf * 2);
        bfCost = Math.round(bfCost * 1.75);
    }
    if (totalbf >= 50) {
        gold = gold + Math.floor(totalbf * 3);
        bfCost = Math.round(bfCost * 2.1);
    }
    if (totalbf >= 100) {
        gold = gold + Math.floor(totalbf * 8);
        bfCost = Math.round(bfCost * 3);
    }
    document.getElementById("gold").innerHTML = gold.toFixed(2);

}, 1000);

// update title gold
setInterval(function () {
    document.title = gold.toFixed(2) + " gold - Lol-minion Clicker";
}, 1);


//200% income for 30 seconds

document.getElementById('infinityEdge').addEventListener("click", multiply);
document.getElementById("infinityEdge").addEventListener("click", btnCheck)

//function for multiplier x2 for 30 seconds
function multiply() {
    if (gold < ieCost) {
        alert("you don't have enough gold to purchase this!");
    }
    if (gold >= ieCost) {
        gold = gold - ieCost;
        ieCost = Math.round(ieCost * 1.6);
        clickingPower = clickingPower * 2.5;
        document.getElementById("infinityEdge").disabled = gold < ieCost;
        let multiplier = setInterval(function () {

            timeLeft -= 1;
            document.getElementById('infinityEdge').innerHTML = "Time left: " + timeLeft;
            if (timeLeft <= 0) {
                clickingPower = clickingPower / 2;
                clearInterval(multiplier);
                document.getElementById('infinityEdge').innerHTML = "Infinity Edge " + "[" + ieCost + "]";
            }
        }, 1000)
        timeLeft = 15;

    }
}








