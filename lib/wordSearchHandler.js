const WordSearch = require('./wordSearchClass');

function wordSearchHandler(req, res, next) {
    const [puzzleGrid, targets] = parseFormInputs(req.body)
    const  puzzle = new WordSearch(puzzleGrid)
    const resultsArray = puzzle.find(targets)
    console.log({results:resultsArray['BULB']})
    req.results = {resultsArray}
    next()
}

export function parseFormInputs(puzzle){
    const rawGrid = String.raw`${puzzle}`.trim().toUpperCase()
    //const rawTargets = puzzle['target-words'].toUpperCase()
    //const targetSeparator = ' '
    let grid = rawGrid.split(/\n/)
    if (grid.length == rawGrid.length){
        grid = rawGrid.split(/\r\n/)
    }
    //const targets = rawTargets.split(targetSeparator)
    return grid//[grid, targets]
}

