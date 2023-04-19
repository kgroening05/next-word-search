const WordSearch = require('./wordSearchClass');

function wordSearchHandler(req, res, next) {
    const [puzzleGrid, targets] = parseFormInputs(req.body)
    const  puzzle = new WordSearch(puzzleGrid)
    const resultsArray = puzzle.find(targets)
    console.log({results:resultsArray['BULB']})
    req.results = {resultsArray}
    next()
}

export function parseWordSearchInput(puzzle){
    const rawGrid = String.raw`${puzzle}`.trim().toUpperCase()
    let grid = rawGrid.split(/\n/)
    if (grid.length == rawGrid.length){
        grid = rawGrid.split(/\r\n/)
    }
    return grid
}

export function parseTargetInput (targetInput) {
    const rawTargets = targetInput.toUpperCase()
    const includesSpaces = rawTargets.includes(' ')
    const includesCommas = rawTargets.includes(',')
    let targetSeparator = ''
    if(includesCommas){
        targetSeparator.concat(',')
    }
    if(includesSpaces){
        targetSeparator.concat(' ')
    }
// TODO: fix regex
    const targets = rawTargets.split(/(\d+)[^,]?+/gm)
    return targets
}

