import { parseWordSearchInput } from "../../lib/wordSearchHandler"


export default function CrosswordGrid({ puzzle }) {
    const grid = parseWordSearchInput(puzzle)
    console.log({grid})
    const gridRows = [];
    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
        const row = grid[rowIndex];
        const letters = [];
        for (let letterIndex = 0; letterIndex < row.length; letterIndex++) {
            const letter = row[letterIndex];
            letters.push(<td className="p-1 text-center">{letter}</td>)
        }
        gridRows.push(<tr>{letters}</tr>)
    }
    return (
        <table className="table-fixed p">
            {gridRows}
        </table>
    )
}