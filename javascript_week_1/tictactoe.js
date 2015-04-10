/**
 * Created by ben on 3/26/15.
 */

var game = ['O','X',null,
            'X','X','O',
            'O','X','O'
           ];

// winnning sets

var winners = [
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6]
]

var gameCheck = function(a,b,c){
    if(a === b && a === c && b === c) {
        console.log('Winner! Winner!  Chicken Dinner!');
        return true;
    }
}

for(var i=0;i < winners.length; i++) {
    var a, b, c;
    a = game[winners[i][0]];
    b = game[winners[i][1]];
    c = game[winners[i][2]];
    if(gameCheck(a,b,c)) {
        break;
    };
}






