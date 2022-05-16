//variable list
let gold = 0;
let adCost = 25;
let totalAD = 0;
let clickingPower = 1;
let bfCost = 120;
let totalbf = 0;


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
        clickingPower = clickingPower + 0.4;
        if (totalAD >= 10) {
            clickingPower = clickingPower + 0.6;
        }
        if (totalAD >= 25) {
            clickingPower = clickingPower + 0.9;
        }
        if (totalAD >= 50) {
            clickingPower = clickingPower + 1.2;
        }
        if (totalAD >= 100) {
            clickingPower = clickingPower + 2.5;
        }
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
        bfCost = Math.round(bfCost * 1.6);
        document.getElementById("gold").innerHTML = gold.toFixed(2);
        document.getElementById("bfCost").innerHTML = bfCost;
        document.getElementById("totalbf").innerHTML = totalbf;
    }
}

//set interval to make score/gold go higher automatic based on upgrade 2 // + 1000ms = 1second
setInterval(function () {
    if (totalbf >= 15) {
        gold = gold + Math.floor(totalbf * 1.25);
    } else {
        gold = gold + totalbf;
    }
    document.getElementById("gold").innerHTML = gold.toFixed(2);

}, 1000);

// update title gold
setInterval(function (){
    document.title = gold.toFixed(2) + " gold - Lol-minion Clicker";
},1);