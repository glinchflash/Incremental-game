//variable list
let gold = 0;
let adCost = 75;
let totalAD = 0;
let currentAD = 0;
let clickingPower = 1;
let bfCost = 250;
let totalbf = 0;
let currentBF = 0;
//variables for temporary boost
let timeLeft = 15;


// update title gold
setInterval(function () {
    document.title = gold + " gold - Lol-minion Clicker";
}, 1);


btnCheck();


//function to add 1 to gold/score per click
document.getElementById("addGold").addEventListener("click", addGold);

function addGold() {
    gold = gold + clickingPower;
    document.getElementById("gold").innerHTML = gold.toFixed(0);
}

//Upgrade 3 cooldown so buttons only gets unlocked every 5 minutes
document.getElementById('infinityEdge').setAttribute('disabled', 'disabled');
setInterval(function () {
    document.getElementById('infinityEdge').removeAttribute('disabled');
}, 300000)


// function to check if buttons may be enabled
document.getElementById("addGold").addEventListener("click", btnCheck);

function btnCheck() {
    document.getElementById("buyAd").disabled = gold < adCost;
    document.getElementById("buyBF").disabled = gold < bfCost;
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
        adCost = Math.round(adCost * 1.15);
        clickingPower = clickingPower + 1;
        currentAD = totalAD;
        document.getElementById("gold").innerHTML = gold;
        document.getElementById("adCost").innerHTML = adCost;
        document.getElementById("totalAD").innerHTML = totalAD;
        document.getElementById("currentAD").innerHTML = currentAD;
    }
    if (totalAD >= 10) {
        adCost = Math.round(adCost * 1.3);
        clickingPower = Math.floor(totalAD * 2);
        currentAD = Math.floor(totalAD * 2)
        document.getElementById("gold").innerHTML = gold;
        document.getElementById("adCost").innerHTML = adCost;
        document.getElementById("totalAD").innerHTML = totalAD;
        document.getElementById("currentAD").innerHTML = currentAD;
    }
    if (totalAD >= 25) {
        adCost = Math.round(adCost * 1.5);
        clickingPower = Math.floor(totalAD * 3);
        currentAD = Math.floor(totalAD * 3)
        document.getElementById("gold").innerHTML = gold;
        document.getElementById("adCost").innerHTML = adCost;
        document.getElementById("totalAD").innerHTML = totalAD;
        document.getElementById("currentAD").innerHTML = currentAD;
    }
    if (totalAD >= 50) {
        adCost = Math.round(adCost * 1.8);
        clickingPower = Math.floor(totalAD * 4);
        currentAD = Math.floor(totalAD * 4)
        document.getElementById("gold").innerHTML = gold;
        document.getElementById("adCost").innerHTML = adCost;
        document.getElementById("totalAD").innerHTML = totalAD;
        document.getElementById("currentAD").innerHTML = currentAD;
    }
    if (totalAD >= 100) {
        adCost = Math.round(adCost * 2.1);
        clickingPower = Math.floor(totalAD * 10);
        currentAD = Math.floor(totalAD * 10)
        document.getElementById("gold").innerHTML = gold;
        document.getElementById("adCost").innerHTML = adCost;
        document.getElementById("totalAD").innerHTML = totalAD;
        document.getElementById("currentAD").innerHTML = currentAD;
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
        bfCost = Math.round(bfCost * 1.40);
        currentBF = totalbf;
        document.getElementById("gold").innerHTML = gold;
        document.getElementById("bfCost").innerHTML = bfCost;
        document.getElementById("totalbf").innerHTML = totalbf;
        document.getElementById("currentBF").innerHTML = currentBF;
    }
    if (totalbf >= 10) {
        bfCost = Math.round(bfCost * 1.65);
    }
    if (totalbf >= 25) {
        bfCost = Math.round(bfCost * 2);
    }
    if (totalbf >= 50) {
        bfCost = Math.round(bfCost * 2.4);
    }
    if (totalbf >= 100) {
        bfCost = Math.round(bfCost * 3);
    }

}

//set interval to make score/gold go higher automatic based on upgrade 2 // + 1000ms = 1second
setInterval(function () {
    gold = gold + totalbf;
    document.getElementById("gold").innerHTML = gold;
    if (totalbf >= 10) {
        gold = gold + Math.floor(totalbf * 2);
        currentBF = Math.floor(totalbf * 2);
        document.getElementById("gold").innerHTML = gold;
        document.getElementById("bfCost").innerHTML = bfCost;
        document.getElementById("totalbf").innerHTML = totalbf;
        document.getElementById("currentBF").innerHTML = currentBF;
    }
    if (totalbf >= 25) {
        gold = gold + Math.floor(totalbf * 4);
        currentBF = Math.floor(totalbf * 4);
        document.getElementById("gold").innerHTML = gold;
        document.getElementById("bfCost").innerHTML = bfCost;
        document.getElementById("totalbf").innerHTML = totalbf;
        document.getElementById("currentBF").innerHTML = currentBF;
    }
    if (totalbf >= 50) {
        gold = gold + Math.floor(totalbf * 6);
        currentBF = Math.floor(totalbf * 6);
        document.getElementById("gold").innerHTML = gold;
        document.getElementById("bfCost").innerHTML = bfCost;
        document.getElementById("totalbf").innerHTML = totalbf;
        document.getElementById("currentBF").innerHTML = currentBF;
    }
    if (totalbf >= 100) {
        gold = gold + Math.floor(totalbf * 10);
        currentBF = Math.floor(totalbf * 10);
        document.getElementById("gold").innerHTML = gold;
        document.getElementById("bfCost").innerHTML = bfCost;
        document.getElementById("totalbf").innerHTML = totalbf;
        document.getElementById("currentBF").innerHTML = currentBF;
    }

}, 1000);


//button check for multiplier


document.getElementById('infinityEdge').addEventListener("click", multiply);
document.getElementById('infinityEdge').addEventListener("click", lockbtn);

function lockbtn(){
    document.getElementById('infinityEdge').setAttribute('disabled', 'disabled');
}
//function for click-multiplier x2 for 15 seconds
function multiply() {
    clickingPower = clickingPower * 2;
    let multiplier = setInterval(function () {
        timeLeft -= 1;
        document.getElementById('infinityEdge').innerHTML = "Time left: " + timeLeft;
        if (timeLeft <= 0) {
            clickingPower = clickingPower / 2;
            clearInterval(multiplier);
            document.getElementById('infinityEdge').innerHTML = "Infinity Edge ";
        }
    }, 1000)
    timeLeft = 15;
}






