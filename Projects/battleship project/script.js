document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("grid");
    const resetBtn = document.getElementById("resetBtn");

    const totalShips = 5;
    let shipPositions = [];
    let clicks = 0;
    let foundShips = 0;
    let gameOver = false;

    const shipImage = "https://ik.imagekit.io/d9mvewbju/Course/BigbinaryAcademy/battleship-image_e6bWCZ1w4.png"
    const waterImage = "https://ik.imagekit.io/d9mvewbju/Course/BigbinaryAcademy/seamless-pattern-waves-various-shades-blue-vector-underwater-design-96891651_aSd5pmbaM.webp"

    const generateShips = () => {
        shipPositions = [];

        while(shipPositions.length < totalShips) {
            let randomPos = Math.floor(Math.random() * 16);
            if(!shipPositions.includes(randomPos)) {
                shipPositions.push(randomPos);
            }
        }
    };

    const createGrid = () => {
        // console.log("createGrid called");
        grid.innerHTML = "";
        clicks = 0;
        foundShips = 0;
        gameOver = false;
        generateShips();

        for(let i=0;i<16;i++)
        {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.index = i;

            grid.appendChild(cell);

            cell.addEventListener("click", () => {handleCellClick(cell)});
        }
    };

    const handleCellClick = (cell) => {
        if(gameOver || cell.style.backgroundImage) return ;

        clicks++;

        let cellIndex = parseInt(cell.dataset.index);
        cell.style.backgroundImage = `URL(${shipPositions.includes(cellIndex) ? shipImage : waterImage} )`;
        cell.style.backgroundSize = "cover";

        if(shipPositions.includes(cellIndex)) foundShips++;

        checkgameStatus();
    }

    const checkgameStatus = () => {
        if(foundShips === totalShips)
        {
            gameOver = true;
            setTimeout(() => alert("You Won!!"), 200);
        }
        else if(clicks >= 8)
        {
            gameOver = true;
            setTimeout(() => alert("You lost!!"), 200);
        }
    }

    resetBtn.addEventListener("click", createGrid);

    createGrid();
});