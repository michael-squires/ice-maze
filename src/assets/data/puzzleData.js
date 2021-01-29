module.exports = [
    {
        name: 'A simple spiral',
        rowStrings: ['ssssxs', 'ss#sss', 'sssEss', 's#ssss', 'ssss#s', 'Sssss#'],
        optimalRoute: 'urdlur'
    },
    {
        name: 'One-way route',
        rowStrings: ['s#ssss', 'xsssEs', 'ssssss', 'sssssS', 'ssssss', 's#ssss'],
        optimalRoute: 'lur'
    },
    {
        name: 'Which route has the least moves?',
        rowStrings: ['E#sss#', 'ssssss', '#sssss', 'ss#sss', 's#ssss', 'sSssss'],
        optimalRoute: 'rulu'
    },
    {
        name: 'Undertale, ice tic-tac-toe puzzle',
        rowStrings:
            [
                'xsssssssxs#',
                'xsxsssxsss#',
                '#sssssssss#',
                'ss#sxsssssE',
                'ssxsxsssss#',
                'ssxsssxsss#',
                'ssssssssss#',
                'Ssssssssxs#'
            ],
        optimalRoute: 'ruldrrdlurur'
    },
    {
        name: 'Pokemon Gold, Mahogany Town Gym',
        rowStrings:
            [
                'xsssssxs#s',
                'sssss#ss#s',
                's##xsEssss',
                's#ssssxsss',
                's#ss#sssss',
                's#ssxssssx',
                'xsssssss#s',
                'sssss#ss#s',
                's#xssxsssx',
                's#sssssxss',
                's#ssssss#s',
                's#sxssxs#s',
                's#x#xx#x#s',
                's#x#xx###s',
                'xsxxxxxxsx',
                '#sxxSxxxs#'
            ],
        optimalRoute: 'uuuulurdlur'
    },
    {
        name: 'Pokemon Gold, that one Ice Path puzzle',
        rowStrings:
            [
                'ssssssss#sssss',
                'sss#ssssssssss',
                'sssssssss#ssss',
                's#ssssssssssss',
                '#sssssss#sssss',
                'sssssssssssss#',
                'ssssss#sssssss',
                'ss#ssssssssssE',
                'sssssssssssss#',
                'sssssss#ssssss',
                'sssss#sss#ssss',
                'ssssssssssssss',
                '#############S'
            ],
        optimalRoute: 'ulururdluldrdrur'
    },
    {
        name: 'Orbox B, Level 5',
        rowStrings: ['ssssssssssssssss',
            'ss#sssssssssssss',
            'ssssssss#sssssss',
            'sssssssssss#ssss',
            'sssss#ssssssssss',
            's#ssssssssssssss',
            'ss#ssssss#Ssssss',
            'sssssss#ssssssss',
            'ssss#sssssssssss',
            'ssssssss#s#sssss',
            'ssssssssssssss#s',
            'ssssssss#sssssss',
            'sss#ssssssssssss',
            'ssssEsss#sssssss',
            'sssssssssss#s#ss',
            'sssssss#ssssssss',
            'sss#ssssssssssss',
            'sssssssss#ssssss',
            'ssssssssssssssss'],
        optimalRoute: 'dlulurdldrdrurdldlu'
    },
]