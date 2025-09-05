import type { BoardData } from "./generateBoard";

export default function isBoardFilled(board: BoardData): boolean {
    if (board.partial) return false
    return board.cells.find((row) => row.find(cell => cell === null)) === undefined
}