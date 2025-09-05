import type { BoardData } from "./generateBoard";

export default function getPossibleCellValues(board: BoardData, x: number, y: number): number[] {
    let groupValues: number[] = []
    let rowValues: number[] = []
    let colValues: number[] = []
}

function getGroupValues(board: BoardData, x: number, y: number): number[] {
    const groupX1 = Math.floor(x / 3) * 3
    const groupY1 = Math.floor(y / 3) * 3
    const groupX2 = Math.ceil(x / 3) * 3
    const groupY2 = Math.ceil(y / 3) * 3

    const groupValues: number[] = []
    for (let x = groupX1; x < groupX2; x++) {
        for (let y = groupY1; y < groupY2; y++) {

        }
    }
}