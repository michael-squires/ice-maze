/* eslint-disable no-multi-str */
// Test.describe('Example test cases', function(){
// module.exports = '\
//       x \n\
//     #   \n\
//      E  \n\
//    #    \n\
//       # \n\
//   S    #';
//     console.log(map);
//     Test.assertSimilar(IceMazeSolver(map), [...'urdlur'], 'A simple spiral');
//     map = '\
//    #    \n\
//   x   E \n\
//         \n\
//        S\n\
//         \n\
//    #    ';
//     console.log(map);
//     Test.assertSimilar(IceMazeSolver(map), [...'lur'], 'Ice puzzles has one-way routes');
//     map = '\
//   E#    \n\
//         \n\
//         \n\
//         \n\
//         \n\
//    #   S';
//     console.log(map);
//     Test.assertSimilar(IceMazeSolver(map), null, 'The end is unreachable');
//     map = '\
//   E#   #\n\
//         \n\
//   #     \n\
//     #   \n\
//    #    \n\
//    S    ';
//     console.log(map);
//     Test.assertSimilar(IceMazeSolver(map), [...'rulu'], 'Tiebreak by least number of moves first');
//     map = '\
//       E \n\
//        #\n\
//         \n\
//   # #   \n\
//       # \n\
//    #  S ';
//     console.log(map);
//     Test.assertSimilar(IceMazeSolver(map), [...'lurur'], 'Then by total distance traversed');
//     map = '\
//   E#xxx\n\
//   x#x#x\n\
//   x#x#x\n\
//   x#x#x\n\
//   xxx#S';
//     console.log(map);
//     Test.assertSimilar(IceMazeSolver(map), [...'uuuullddddlluuuu'], 'Covering all tiles with x should reduce the problem to simple pathfinding');
//       map = '\
//   E# \n\
//   #S#\n\
//    # ';
//     console.log(map);
//     Test.assertSimilar(IceMazeSolver(map), null, 'There is no escape');
//   });

//   Test.describe('Real life examples', function(){
//     var map;
//     map = '\
//           #     \n\
//      #          \n\
//            #    \n\
//    #            \n\
//   #       #     \n\
//                #\n\
//         #       \n\
//     #          E\n\
//                #\n\
//          #      \n\
//        #   #    \n\
//                 \n\
//   #############S';
//     console.log('Pokemon Gold, that one Ice Path puzzle');
//     console.log(map);
//     Test.assertSimilar(IceMazeSolver(map), [...'ulururdluldrdrur']);
//     map = '\
//   x     x # \n\
//        #  # \n\
//    ##x E    \n\
//    #    x   \n\
//    #  #     \n\
//    #  x    x\n\
//   x       # \n\
//        #  # \n\
//    #x  x   x\n\
//    #     x  \n\
//    #      # \n\
//    # x  x # \n\
//    #x#xx#x# \n\
//    #x#xx### \n\
//   x xxxxxx x\n\
//   # xxSxxx #';
//     console.log('Pokemon Gold (again), Mahogany Town Gym');
//     console.log(map);
//     Test.assertSimilar(IceMazeSolver(map), [...'uuuulurdlur']);
//     map = '\
//   x       x #\n\
//   x x   x   #\n\
//   #         #\n\
//     # x     E\n\
//     x x     #\n\
//     x   x   #\n\
//             #\n\
//   S       x #';
//     console.log('Undertale, ice tic-tac-toe puzzle (edited)');
//     console.log(map);
//     Test.assertSimilar(IceMazeSolver(map), [...'ruldrrdlurur']);
module.exports = '\
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
//     console.log('Orbox B, Level 5');
//     console.log(map);
//     Test.assertSimilar(IceMazeSolver(map), [...'dlulurdldrdrurdldlu']);
//   });