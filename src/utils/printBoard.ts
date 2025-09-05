import type { BoardData } from "./generateBoard";

export default function printBoard(board: BoardData) {
    console.log(board.cells.map(row => row.map(cell => cell ?? '/').join(' ')).join('\n'))
}