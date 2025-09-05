import isBoardFilled from "./isBoardFilled";
import printBoard from "./printBoard";

export type BoardData = {
    partial: boolean
    cells: (number | null)[][] // [y][x]
}

export default function generateBoard(): BoardData {
    const board: BoardData = {
        partial: true,
        cells: Array.from({length: 9}).map(() => Array.from({length: 9}).fill(null)) as BoardData['cells']
    }

    let i = 0;
    while (i < 10 && !isBoardFilled(board)) {
        const [x, y] = randomCellCoordinates()

        printBoard(board)
        i++
    }

    return board
}

function randomCellCoordinates(): {x: number, y: number} {
    return {
        x: Math.round(Math.random() * 9),
        y: Math.round(Math.random() * 9),
    }
}