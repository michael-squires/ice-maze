/* eslint-disable no-multi-str */
var map;
map = '\
      x \n\
    #   \n\
     E  \n\
   #    \n\
ssss# \n\
Sssss#';
console.log(map);
map = '\
   #    \n\
  x   E \n\
        \n\
       S\n\
        \n\
   #    ';
map = '\
  E#    \n\
        \n\
        \n\
        \n\
        \n\
   #   S';
console.log(map);
map = '\
  E#   #\n\
        \n\
  #     \n\
    #   \n\
   #    \n\
   S    ';
console.log(map);
map = '\
      E \n\
       #\n\
        \n\
  # #   \n\
      # \n\
   #  S ';
console.log(map);
map = '\
  E#xxx\n\
  x#x#x\n\
  x#x#x\n\
  x#x#x\n\
  xxx#S';
console.log(map);
map = '\
  E# \n\
  #S#\n\
   # ';
console.log(map);
map = '\
          #     \n\
     #          \n\
           #    \n\
   #            \n\
  #       #     \n\
               #\n\
        #       \n\
    #          E\n\
               #\n\
         #      \n\
       #   #    \n\
                \n\
  #############S';
console.log('Pokemon Gold, that one Ice Path puzzle');
console.log(map);
map = '\
  x     x # \n\
       #  # \n\
   ##x E    \n\
   #    x   \n\
   #  #     \n\
   #  x    x\n\
  x       # \n\
       #  # \n\
   #x  x   x\n\
   #     x  \n\
   #      # \n\
   # x  x # \n\
   #x#xx#x# \n\
   #x#xx### \n\
  x xxxxxx x\n\
  # xxSxxx #';
console.log('Pokemon Gold (again), Mahogany Town Gym');
console.log(map);
map = '\
  x       x #\n\
  x x   x   #\n\
  #         #\n\
    # x     E\n\
    x x     #\n\
    x   x   #\n\
            #\n\
  S       x #';
console.log('Undertale, ice tic-tac-toe puzzle (edited)');
console.log(map);
map = '\
                  \n\
    #             \n\
          #       \n\
             #    \n\
       #          \n\
   #              \n\
    #      #S     \n\
         #        \n\
      #           \n\
          # #     \n\
                # \n\
          #       \n\
     #            \n\
      E   #       \n\
             # #  \n\
         #        \n\
     #            \n\
           #      \n\
                  ';
console.log('Orbox B, Level 5');
console.log(map);

// function _solver(map) {
//     function Node(x, y, lastdir, dist = 0, path = []) {
//         this.x = x; this.y = y;
//         this.lastdir = lastdir;
//         this.dist = dist;
//         this.path = path;
//     };
//     function moveBlocked(x, y) {
//         return x < 0 || y < 0 || x >= map[0].length || y >= map.length || map[y][x] === '#';
//     };
//     map = map.split('\n');
//     var start = { y: map.findIndex(row => row.includes('S')) }; start.x = map[start.y].indexOf('S'); //used for startup only
//     var nodes = [new Node(start.x, start.y)], res = [], ended = false, visited = {};
//     const dirs = { u: [0, -1], d: [0, 1], l: [-1, 0], r: [1, 0] },
//         oppositedirs = { u: 'd', d: 'u', l: 'r', r: 'l' };
//     while (!ended && nodes.length > 0) {
//         var next = [];
//         for (let n of nodes) {
//             let v = visited[n.x + ',' + n.y];
//             //Removed optimization to show all paths of given no. of moves
//             //if(v && (v.len<n.path.length || (v.len===n.path.length&&v.dist<n.dist)))continue;
//             if (v && v.len < n.path.length) continue;
//             visited[n.x + ',' + n.y] = { len: n.path.length, dist: n.dist };
//             for (let dir of ['u', 'd', 'l', 'r'].filter(d => d !== oppositedirs[n.lastdir])) {
//                 var [p, q] = [dirs[dir][0], dirs[dir][1]];
//                 if (moveBlocked(n.x + p, n.y + q)) continue;
//                 var dist = 1, [newx, newy] = [n.x + p, n.y + q];
//                 for (; true; dist++, [newx, newy] = [newx + p, newy + q]) {
//                     if (/[Ex]/.test(map[newy][newx]) || moveBlocked(newx + p, newy + q)) break;
//                 }
//                 if (map[newy][newx] === 'E') {
//                     ended = true;
//                     res.push(new Node(newx, newy, dir, n.dist + dist, n.path.concat(dir)));
//                 } else next.push(new Node(newx, newy, dir, n.dist + dist, n.path.concat(dir)));
//             }
//         }
//         nodes = next;
//     }
//     if (!ended) return null;
//     res = res.sort((a, b) => a.dist - b.dist);
//     return res.map(n => [n.path.join(''), n.dist]);
// }

// Test.describe('Random tests', function () {
//     function randomToken() {
//         var rnd = Math.random();
//         if (rnd < 0.05) return 'x';
//         if (rnd < 0.25) return '#';
//         else return ' ';
//     }
//     for (let i = 0; i < 100; i++) {
//         var width = 10 + ~~(Math.random() * 25), height = 10 + ~~(Math.random() * 25);
//         var map = new Array(height).fill('').map(_ => new Array(width).fill('').map(_ => randomToken()));
//         map[~~(Math.random() * height)][~~(Math.random() * width)] = 'S';
//         do { var [x, y] = [~~(Math.random() * height), ~~(Math.random() * width)]; } while (map[x][y] === 'S');
//         map[x][y] = 'E';
//         map = map.map(row => row.join('')).join('\n');
//         console.log(map);
//         var expected = _solver(map),
//             actual = IceMazeSolver(map);
//         console.log('\nPossible optimal solutions (sorted by length): \n' + (expected === null ? '' : expected.map(([p, d]) => `${p} (length: ${d})`).join('\n')) + '\n ');
//         console.log('Your solution: ' + (actual === null ? '' : actual.join('')));
//         Test.expect(expected === null ? actual === null : expected.filter(([p, d]) => d === expected[0][1]).some(a => a[0] === actual.join('')), 'Your answer was ' + actual + ' which is not one of the valid solutions');
//     }
// });