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

    const currentPlayer = playerOneName;

    const getActivePlayer = () => currentPlayer;

    const switchPlayer = () =>{

        if getActivePlayer() = 

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

    const playRound = (player,row,column) => {

        if(gridAvailable()){

            if(grid[row][column]==' '){

                makeMark(player,row,column);

                printGrid(grid);

            }
            
            else if(grid[row][column]=='X'||grid[row][column]=='O'){

                console.log('Space occupied. Run command again with another position')

            }


        }

    }

    return{playRound}

}

const game = gameController();