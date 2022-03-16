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
                playerMoney = Math.max(0, playerMoney - 10);
                console.log("playerMoney", playerMoney)
                break;
            }
        }

        // // IF PLAYER CHOOSES TO FIGHT
        // if (promptFight === "fight" || promptFight === "FIGHT") {

        // Subtract the value of playerAttack from the value of enemyHealth
        var damage = randomNumber(playerAttack - 3, playerAttack);
        enemyHealth = Math.max(0, enemyHealth - damage);
        console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // Check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            playerMoney = playerMoney + 20;
            console.log(playerName + " now has " + playerMoney + " coins.")
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

            // Subtract the value of enemyAttack from the value of playerHealth
        var damage = randomNumber(enemyAttack -3, enemyAttack);
        playerHealth = Math.max(0, playerHealth - damage);

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

var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = randomNumber(40, 60);
            fight(pickedEnemyName); 
            
            if (playerHealth > 0 && i < enemyNames.length -1) {
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                if (storeConfirm) {
                    shop();
                }
            }
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    // play again
    endGame();
};

var endGame = function() {
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("The game has now ended. Let's see how you did!")
    }
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var shop = function(){
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    switch (shopOptionPrompt) {
        case "refill":
        case "REFILL":
            if (playerMoney >= 7) {
            window.alert("Refilling player's health by 20 for 7 coins.");
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        case "upgrade":
        case "UPGRADE":
            if (playerMoney >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 coins.");
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        case "leave":
        case "LEAVE":
            window.alert("Leaving the store.");
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
            break;
    }
};

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};


// start the game when the page loads
startGame();