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
        grid.forEach(row => {
            console.log(row.join('|')); // Join elements in the row with a |
        });
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

    const playRound = (row,column) => {

        if(gridAvailable()){

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

    return{playRound};

}

// const printDaGrid = gameGrid();
// printDaGrid.printGrid();



const game = gameController();