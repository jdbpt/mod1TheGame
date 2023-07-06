const gridItems = Array.from(document.querySelectorAll("#grid-container > div"));
const winner = document.getElementById("winner");//the results of the game
const player_1 = "X";
const player_2 = "O";
let activePlayer = player_1;
var restartButton = document.getElementById("restart");//button to restart the game
var resetScoreBtn = document.getElementById("reset-score");//button to reset the score
let activePlayerMessage = `The Active Player is: ${activePlayer}`;
winner.innerHTML = activePlayerMessage;//shows the current active player
//boolean to tell if can click on a grid item or not based on if a winner has been choosen
let clickable = true;
//scoring for player 1 X and player 2 O
let x_score = 0;
let o_score = 0;
const xScoring = document.getElementById("x-score");
const oScoring = document.getElementById("o-score");

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
];

let gridItemsChosen = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""

];

//testing
console.log(gridItems);

for(let i = 0; i < gridItems.length; i++){
    gridItems[i].addEventListener("click",function(event){
        if(!clickable){
            return;
            
        }
        let item = event.target;
        console.log(item);

        

        if(activePlayer === player_1){
            if(gridItemsChosen[i]==="X" || gridItemsChosen[i] ==="O"){

            }
            else{
                item.innerHTML = player_1;
                gridItemsChosen[i] = activePlayer;
                activePlayer = player_2;
                console.log(activePlayer)
                winner.innerHTML = `The Active Player is: ${activePlayer}`;
            } 
           

        } else if (activePlayer ===  player_2){
            if(gridItemsChosen[i]==="X" || gridItemsChosen[i] ==="O"){

            } else{
        
            item.innerHTML = player_2;
            gridItemsChosen[i] = activePlayer;
            activePlayer = player_1;
            console.log(activePlayer);
            winner.innerHTML = `The Active Player is: ${activePlayer}`;

            }//else
        } else{
            console.log("Panick!!!!!");
        }//else

        console.log(gridItemsChosen);

        for(let i = 0; i < winningConditions.length; i++){
            let optionA = winningConditions[i][0];
            let optionB = winningConditions[i][1];
            let optionC = winningConditions[i][2];

            if(gridItemsChosen[optionA]=== player_1 && gridItemsChosen[optionB] === player_1 && gridItemsChosen[optionC] === player_1){
                console.log("Player 1 is the winner!");
                winner.innerHTML = "X wins!";
                clickable = false;//can no longer play the game as the board is not clickable
                //update the score
                x_score += 1;
                xScoring.innerHTML = x_score;
                break;
            } else if(gridItemsChosen[optionA]=== player_2 && gridItemsChosen[optionB] === player_2 && gridItemsChosen[optionC] === player_2)
                {
                console.log("Player 2 is the winner!");
                winner.innerHTML = "O wins!";
                clickable = false;//can no longer play the game as the board is not clickable
                //update the score
                o_score += 1;
                oScoring.innerHTML = o_score;
                break;

            } 
            //need to check if we have a tie**********************************

            
        }//for i

        //test to see if we have tie, and should end the game
        if(!gridItemsChosen.includes("") && clickable){
            console.log("Cat- it is a Tie!");
            winner.innerHTML = "Cat- it is a Tie!";
            clickable = false;
        }
        
    });//addEventListener
}//for loop to loop through each of the grid items


//add an eventListener to the button
//press it clickable === true
//change the innerHTML of each of the gridItems back to their numbers based on their id attribute
//empty out the gridItemsChosen array (change all to "")
//set activePlayer to player_1
//change the results element on screen to the active player message

function RestartGame(event){
    //location.reload(); for reloading the tab
    clickable = true;
    gridItems.forEach(item => {
        item.innerHTML = item.getAttribute("id");
        
    });
    gridItemsChosen = ["", "", "", "", "", "", "", "", ""];
    activePlayer = player_1;
    winner.innerHTML = activePlayerMessage;
    
}//end RestartGame function

restartButton.addEventListener("click", RestartGame);

//resets the score
resetScoreBtn.addEventListener("click", function(event){
    x_score = 0;
    xScoring.innerHTML = x_score;
    o_score = 0;
    oScoring.innerHTML = o_score;
});//end resetScoreBtn addEventListener











