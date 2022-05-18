# Incremental-game
name: LoL-minion clicker

---
# LoL-minion clicker

Check out the current version [here](https://glinchflash.github.io/Incremental-game/).
___

## Missions objectives

At the end of this challenge you should have improved your:

* *JavaScript* skills
* Incremental skills
* Cookie skills


## The mission

This challenge will have you create a {clicker}[cookie clicker].
Follow the instructions to complete the challenge, to get some ideas check the
examples in the _resources_ section.



### Instructions

NOTE: The steps below are meant to help you in development, but as long as you
make a cookie clicker you can implement whatever you want.

Step 1: base structure
Write the base structure for the project in *HTML*, *CSS* and *JavaScript*.
Within the HTML, put a _click_ button which will increment a counter and a label
initialised at _0_ to display said counter. 

Step 2: prepare the JavaScript
In your JavaScript prepare variables to allow you to control your button and
label. You will also need a variable to keep track of the score.

Step 3: increase the score
When you click the button, increase the variable storing the score by _1_, then
display the current score inside the label.

Step 4: make a multiplier
Add another button which will act as a multiplier. When called this button will
permanently multiply the number of points per click, by _two_ for example.

Step 5: price of multiplier
The multiplier allows you to have a big score quickly, that shouldn't be free,
it should be a purchase made with the current player score.

Step 6: no credit
You can't make credit, meaning that the player cannot have a negative score.
Think about updating the score display after a purchase.

Step 7: display multiplier counter
Display the counter within the multiplier. For example, if the counter is worth
_5_, then the button should display something like _multiplier x5_.

Step 8: increase the cost
Buying a lot of multiplier is way too easy. For more fun, make it so that each
time a multiplier is purchased the cost of buying a new one is increased.

Step 9: display the cost
In the text of the multiplier button you should also have the price of the
upgrade.

Step 10: auto-clicker
Implement a new improvement to buy, the _auto-click_. As the name might suggest
this bonus will automatically add a click to your score each _x_ seconds.

Step 11: bonus
Implement yet another improvement to buy, the _bonus_. It should grant the
player a boost in score of _200%_ per click for _30 seconds_. When purchased the
player should see a timer with the remaining time inside the bonus button.

Step 12: deactivate the buttons
Make it so that, if the player doesn't have the points to purchase a multiplier,
an auto-click or an other bonus, he can't.

Step 13: make it pretty
Your cookie clicker must be pretty, make it look good with CSS or some extra
JavaScript.

#### Examples

* [cookie clicker](http://orteil.dashnet.org/cookieclicker/)
* [particle clicker](https://particle-clicker.web.cern.ch/particle-clicker/)
* [pokémon clicker](https://www.pokeclicker.com/)

---
## progress

 [x] Step 1: base structure
1. - [x] Write base html 
2. - [x] Write base css (used scss) 
3. - [x] Write base js 

 [x]Step 2: prepare the JavaScript 
1. - [x]  Setup variables 
2. - [x] Setup score (named "Gold") 


 [x] Step 3: increase the score 
1.  - [x] Add feature when clicking the minion user gains 1 gold 
2.  - [x] Track score  

 [x] Step 4: make a multiplier 
1.  - [x] Add button for first upgrade  
2.  - [x] Link button to function to increase gold/click gained  
3.  - [x] Track score  

 [x] Step 5: price of multiplier 
1.  - [x] Add price to button
2.  - [x] Make gold decrease by cost of upgrade  


 [x] Step 6: no credit 
1.  - [x] Let function check if player has enough gold to purchase upgrades  
2.  - [x] Player can't buy upgrade when gold isn't sufficient 

 [x] Step 7: display multiplier counter 
1.  - [x] Add upgrades explanation panel  
2.  - [x] Display current level(amount bought) of upgrades  
3.  - [x] Display the bonuses received from each upgrade  

 [x] Step 8: increase the cost 
1.  - [x] Increase cost per level bought for each upgrade 
2.  - [x] Implement scaling of upgrade cost  

 [x] Step 9: display the cost 
1.  - [x] Display cost for each upgrade inside upgrade button  
2.  - [x] Cost updates according to scaling

 [x] Step 10: auto-clicker 
1.  - [x] Add button for auto clicker (upgrade 2) 
2.  - [x] Link the button to the function to gain automatic gold each second  
3.  - [x] Update score accordingly  
4.  - [x] Scale costs  
5.  - [x] Update button info (cost & lvl)  
       *  - [x] Include timer how long bonus last  
6.  - [x] Update upgrades explanation panel and current active benefits  
### Bonus steps

 [x] Step 11: bonus 
1.  - [x] Add button for upgrade 3 (booster) 
2.  - [x] Link button to function to multiply income by clicks by 2 
3.  - [x] Update upgrades explanation panel  
4.  - [x] Add timer to button (5minutes)  

 [x] Step 12: deactivate the buttons 
1.  - [x] Adjust functions to disable buttons when gold is insufficient  
2.  - [x] Add styling to buttons to show when disabled or enabled  
- 
 [x] Step 13: make it pretty 
1. - [x] Add background to page 
2. - [x] Style buttons for upgrades (disabled and enabled version) 
3. - [x] Style upgrades explanation / current active benefits panel  
4. - [x] Adjust placements of images, buttons and panel  

---

### Extra features (ideas)
* [x] Add milestones in upgrade 1 
    1. - [x] Set up function to check if level meets requirements  
    2. - [x] Increase bonuses gained from milestones achieved 
    3. - [x] Update panel to show new current active benefit  
    4. - [x] Update panel to show updated version of benefits gained when purchased 


* [x] Add milestones in upgrade 2
    1. - [x] Set up function to check if level meets requirements  
    2. - [x] Increase bonuses gained from milestones achieved 
    3. - [x] Update panel to show new current active benefit  
    4. - [x] Update panel to show updated version of benefits gained when purchased 


* [x] Add panel or display to showcase different milestones 
    1. 
* Rebase feature (start over but with increased benefits based on new 'currency')
* After a specific point change image from standard minion to canon minion, and next super minon
* upgrade that speeds up autoclicker for set amount of time
* More/stronger autoclickers
---
### What did I learn from this exercise?

1. Setting up my variables in a logical fashion
2. How to use setInterval 
3. To implement multiple statements inside a function to specify specific results
4. Folder structure 
5. Learn by teaching is very effective and can help understanding things I didn't at first

### Issues I came across on this exercise

1. Adjusting the tracking of the cost and levels in buttons
   * Added ID's to the html for these and linked them in js to update accordingly


2. Mathematical issues 
    * Trial and error, but due to dropping the issues and tracking back to it after a while figured it out due to getting my head clear


3. Milestones not working or working incorrectly
   * Mathematical issues fixed
   * Found mistakes in code, due to telling myself what does this line/function do and figuring out the mistakes


4. Taking a break, to get a quick drink f.e., just to clear your head and get focus back on

