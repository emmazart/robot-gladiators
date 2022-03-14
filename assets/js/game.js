// console.log("This logs a string, good for leaving yourself a message");
// // this will do math and log 20
// console.log(10 + 10);
// // this combines a string (our robots name is) with a variable
// // string concatenation
// console.log("Our robot's name is " + playerName);

//Game States
// "WIN" - Player robot has defeated all enemy-robots
//      * Fight all enemy robots
//      * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less

// this declares playerName variable
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// define fight function
var fight = function(enemyName) {
    while(enemyHealth > 0 && playerHealth > 0){
        // ask player if they'd like to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // IF PLAYER CHOOSES TO SKIP, confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney)
                break;
            }
        }

        // // IF PLAYER CHOOSES TO FIGHT
        // if (promptFight === "fight" || promptFight === "FIGHT") {

        //     // Subtract the value of playerAttack from the value of enemyHealth
            enemyHealth = enemyHealth - playerAttack;

            //Log a resulting message to the consoe so we know it worked
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
                );

            // Check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                playerMoney = playerMoney + 20;
                break;
            } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            // Subtract the value of enemyAttack from the value of playerHealth
            playerHealth = playerHealth - enemyAttack;

            //Log a resulting message to the consoe so we know it worked
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );

            // Check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
                } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
                }
    } //end of while loop
}; //end of fight function

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}