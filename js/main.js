//variable list
let gold = 0;
let adCost = 25;
let totalAD = 0;
let clickingPower = 1;
let bfCost = 120;
let totalbf = 0;
//variables for temporary boost
let ieCost = 1000;
let timeLeft = 30;


//function to add 1 to gold/score per click
document.getElementById("addGold").addEventListener("click", addGold);

function addGold() {
    gold = gold + clickingPower;
    document.getElementById("gold").innerHTML = gold.toFixed(2);
}

// function to buy upgrade 1 /and have no negative value
document.getElementById("buyAd").addEventListener("click", buyAD);


function buyAD() {
    if (gold >= adCost) {
        gold = gold - adCost;
        totalAD = totalAD + 1;
        adCost = Math.round(adCost * 1.2);
        clickingPower = clickingPower + 1;

        document.getElementById("gold").innerHTML = gold.toFixed(2);
        document.getElementById("adCost").innerHTML = adCost;
        document.getElementById("totalAD").innerHTML = totalAD;
    }
}

// function to buy upgrade 2
document.getElementById("buyBF").addEventListener("click", buyBF);

function buyBF() {
    if (gold >= bfCost) {
        gold = gold - bfCost;
        totalbf = totalbf + 1;
        bfCost = Math.round(bfCost * 1.15);
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
    }
    if (totalbf >= 25) {
        gold = gold + Math.floor(totalbf * 2);
    }
    if (totalbf >= 50) {
        gold = gold + Math.floor(totalbf * 3);
    }
    if (totalbf >= 100) {
        gold = gold + Math.floor(totalbf * 8);
    }
    document.getElementById("gold").innerHTML = gold.toFixed(2);

}, 1000);

// update title gold
setInterval(function () {
    document.title = gold.toFixed(2) + " gold - Lol-minion Clicker";
}, 1);


//200% income for 30 seconds

document.getElementById('infinityEdge').addEventListener("click", multiply);

function multiply() {
    if (gold >= ieCost) {
        gold = gold - ieCost;
        ieCost = Math.round(ieCost * 1.85);
        clickingPower = clickingPower * 2;

        let multiplier = setInterval(function () {

            timeLeft -= 1;
            document.getElementById('infinityEdge').innerHTML = "Time left: " + timeLeft;
            if (timeLeft <= 0) {
                clickingPower = clickingPower / 2;
                clearInterval(multiplier);
                document.getElementById('infinityEdge').innerHTML = "Infinity Edge " + ieCost;
            }
        }, 1000)

    }
}





