/* eslint-disable no-sequences */
function IceMazeSolver() {
    const height = grid.length;
    for (let i = 0; i < height; i++) { grid[i] = grid[i].split('') }
    const width = grid[0].length;
    let x = Math.floor(map.indexOf('S') / (width + 1));
    let y = map.indexOf('S') % (width + 1);
    const solutions = [];
    const moves = { 'u': [-1, 0], 'd': [+1, 0], 'l': [0, -1], 'r': [0, 1] }
    const opposite = { 'u': 'd', 'd': 'u', 'r': 'l', 'l': 'r' }
    const queue = [[x, y, 0, 0]];
    let currentMinSteps = Infinity;
    let lastdir = '';
    let node = [], newNode = [], route = [];
    let steps = 0, dist = 0, newDist = 0;

    while (queue.length) {
        node = queue.pop();
        if (node[2] > currentMinSteps) { continue }
        x = node[0], y = node[1], steps = node[2], dist = node[3], route = node.slice(4);
        grid[x][y] = steps.toString();
        lastdir = (node.length > 2) ? node[node.length - 1] : ''
        let xd = 0, yd = 0, x1 = 0, y1 = 0;

        for (const dir in moves) {
            xd = moves[dir][0], yd = moves[dir][1];
            x1 = x + xd, y1 = y + yd;
            if (outOfGrid(x1, y1)) { continue }
            if (grid[x1][y1] === '#') { continue }
            if (dir === opposite[lastdir]) { continue }

            while (grid[x1][y1] === 's') {
                if (outOfGrid(x1 + xd, y1 + yd)) { break }
                if (grid[x1 + xd][y1 + yd] === '#') { break }
                x1 = x1 + xd, y1 = y1 + yd;
            }

            if (grid[x1][y1] != 's' && grid[x1][y1] < +steps) { continue }
            newDist = dist + Math.abs(x1 - x) + Math.abs(y1 - y);
            newNode = [x1, y1, (steps + 1), newDist].concat(route).concat([dir]);

            if (grid[x1][y1] === 'E') {
                solutions.push(newNode);
                if (newNode[2] < currentMinSteps) { currentMinSteps = newNode[2] }
                continue;
            }
            queue.unshift(newNode);
        }
    }

    if (solutions.length === 0) { return null }
    let minsteps = Infinity;
    for (let i = 0; i < solutions.length; i++) {
        if (solutions[i][2] < minsteps) { minsteps = solutions[i][2] }
    }

    return solutions.filter((array) => array[2] === minsteps)
        .reduce((arr1, arr2) => arr1[3] < arr2[3] ? arr1 : arr2)
        .slice(4)

    function outOfGrid(x, y) {
        if (x < 0 || x > (height - 1) || y < 0 || y > (width - 1)) { return true }
        return false
    }

}
