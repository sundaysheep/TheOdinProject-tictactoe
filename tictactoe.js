function gameGrid(){

    const rows = 3;
    const columns = 3;

    const grid = [];

    for(let i=0;i<rows;i++){

        grid[i] = [];       //initializes an empty 1D array for each row

        for(let j=0;j<columns;j++){

            grid[i].push(' ');

        }

    }

    const getGrid = () => grid;

    const makeMark = (player,row,column) => {

        if(grid[row][column]==' '){

            grid[row][column] = player;

        }

        else return;

    }

    //

    const printGrid = (grid) => {
        // grid.forEach(row => {
        //     console.log(row.join('|')); // Join elements in the row with a |
        // });

        console.log(grid);
    };

    // Took from chatgpt, relearn
    

    return {getGrid,makeMark,printGrid};

}



function gameController(playerOneName = "X",playerTwoName = "O"){

    const players = [
        {name: playerOneName},
        {name: playerTwoName}
    ]

    let activePlayer = players[0];

    const getActivePlayer = () => activePlayer;

    const switchActivePlayer = () => {

        if(activePlayer==players[0]){
            activePlayer=players[1];
        }

        else{
            activePlayer=players[0];
        }

    }

    const {getGrid,makeMark,printGrid} = gameGrid();

    const grid = getGrid();

    const gridAvailable = () =>{

        for(let row of grid){

            if(row.includes(' ')){

                return 1;

            }

        }

        return 0;

    }

    

    const winCondition = () => {



    }       //implement later

    // const getPlayerMove = ()=>{

    //     const rowAndColumn = prompt('Enter Row and Column separated by a comma')

    //     const values = rowAndColumn.split(',')

    //     const row = values[0]
    //     const column = values[1]

    //     return {row,column}

    // }

    const playRound = (row,column,targetButton) => {

        // const {row,column} = playerMoveButton()

        if(gridAvailable()){

            targetButton.textContent = getActivePlayer().name;

            if(grid[row][column]==' '){

                makeMark(getActivePlayer().name,row,column);

                printGrid(grid);



                switchActivePlayer();

            }
            
            else if(grid[row][column]==players[0].name||grid[row][column]==players[1].name){

                console.log('Space occupied. Run command again with another position');

            }


        }

    }

    const playerMoveButton = () => {
        
        const buttons = document.querySelectorAll('button');

        buttons.forEach(

            (button)=>{
        
                button.addEventListener('click',
        
                    (event)=>{
        
                        const playerMoveId = event.target.id;

                        const targetButton = document.getElementById(playerMoveId)

                        const playerMove = playerMoveId.split(',');
        
                        const row = parseInt(playerMove[0])
                        const column = parseInt(playerMove[1])

                        // const [row, column] = event.target.id.split(',').map(Number);       //gpt

                        playRound(row,column,targetButton)
        
                    }
        
                )
        
            }
        
        )       //revise

    }

    return{playerMoveButton};

}

// const printDaGrid = gameGrid();
// printDaGrid.printGrid();



const game = gameController();

game.playerMoveButton();



