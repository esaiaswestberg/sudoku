import clsx from "clsx"
import { useState } from "react"
import generateBoard from "../utils/generateBoard"

export default function Board() {
    const [board] = useState(generateBoard())

    return (
        <div className="grid grid-cols-9 gap-0">
            {Array.from({length: 9}).map((_, row) => 
              Array.from({length: 9}).map((_, col) => (<Tile key={`${col}-${row}`} x={col} y={row} value={board.cells[row][col]} />))
            )}
        </div>
    )
}

export function Tile({x, y, value}: {x: number, y: number, value: number | null}) {
    return <div className={clsx(
        "w-10 h-10 border-zinc-500",
        "border-r border-b",
        "flex flex-row items-center justify-center",
        {
            "border-l": x === 0,
            "border-t": y === 0,
            "rounded-tl": x === 0 && y === 0,
            "rounded-tr": x === 8 && y === 0,
            "rounded-bl": x === 0 && y === 8,
            "rounded-br": x === 8 && y === 8,
        }
    )}>
        <span className="font-medium text-lg">
            {value ?? ' '}
        </span>
    </div>
}