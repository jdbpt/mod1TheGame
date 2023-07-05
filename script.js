const gridItems = Array.from(document.querySelectorAll("#grid-container > div"));
const winner = document.getElementById("winner");//the results of the game
const player_1 = "X";
const player_2 = "O";
let activePlayer = player_1;
var restartButton = document.getElementById("restart");//button to restart the game
//boolean to tell if can click on a grid item or not based on if a winner has been choosen
winner.innerHTML = `The Active Player is: ${activePlayer}`;//shows the current active player
let clickable = true;
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
                break;
            } else if(gridItemsChosen[optionA]=== player_2 && gridItemsChosen[optionB] === player_2 && gridItemsChosen[optionC] === player_2)
                {
                console.log("Player 2 is the winner!");
                winner.innerHTML = "O wins!";
                clickable = false;//can no longer play the game as the board is not clickable
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
//when we press it we want clickable === true
//we want to change the innerHTML of each of the gridItems to ""
//we want to empty out the gridItemsClicked array
//we want to empty out out results element on screen

restartButton.addEventListener("click",function(event){
    location.reload();
});









