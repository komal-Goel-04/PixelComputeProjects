document.addEventListener( "DOMContentLoaded", () => {
    const grid = document.getElementById("grid");
    const resetBtn = document.getElementById("resetBtn");

    let gameOver = false;
    let clicks = 0;

    const createGrid = () => {
        grid.innerHTML = "";

        for(let i=0;i<9;i++)
        {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.index = i;

            grid.appendChild(cell);

            cell.addEventListener("click", handleClick);
        }
    };

    const handleClick = (e) => {
        const cell = e.target;
        console.log(cell.dataset.index);
        if(gameOver || cell.textContent)
            return;

        if(clicks % 2 === 0) {
            cell.textContent = "O";
        }
        else {
            cell.textContent = "X";
        }
        clicks++;
        checkGameStatus();

    }

    const checkGameStatus = () => {
        const cells = document.querySelectorAll(".cell");
        const cellValues = Array.from(cells).map((cell) => cell.textContent);

        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for(let combination of winningCombinations) {
            const [a, b, c] = combination;
            if(cellValues[a] && cellValues[a] === cellValues[b] && cellValues[a] === cellValues[c])
            {
                gameOver = true;
                setTimeout(() => alert(`${cellValues[a]} won the game!`), 200);
                return;   
            }
        }
        if(clicks === 9)    
        {
            gameOver = true;
            setTimeout(() => alert("Game ended in a draw"), 200);
            return;
        }
    }

    resetBtn.addEventListener("click", createGrid);

    createGrid();
})