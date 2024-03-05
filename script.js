//create the game with 9 turns, if the turn is odd number then the div will change to X, 
//even number will change to O
//Player 1 is X, player 2 is O
playGame=()=>{
    let i = 1;
$('h3').text(`It's player 1 turn`);
$('.play').each(function(){
    $(this).click(function(){
        if (i<10){
            var id = $(this).attr('id');
            //Player 2 turn, modifying the div into "O" string and modify the header 3 to reflect next turn 
            if (i%2==0){
                $(`td#${id}`).text('O');
                $('h3').text(`It's player 1 turn`);
            }
            //Player 1 turn, modifying the div into "X" string and modify the header 3 to reflect next turn 
            else{
                $(`td#${id}`).text('X');
                $('h3').text(`It's player 2 turn`);}
            console.log(i);
            i++;
        }
        else{
            
        }
    })
})
}
//function playGame is going to be add into reset button so we can play another game
playGame();

/*
Orignal array [0,1,2; 3,4,5; 6,7,8]
Winning combination:
Horizontal: [0,1,2] [3,4,5] [6,7,8]
Vertical: [0,3,6] [1,4,7] [2,5,8]
Diagonal: [0,4,8] [2,4,6]
*/
$( "#restart" ).on( "click", function() {
    $('h3').text(`It's player 1 turn`);
    i=1;
    for (k=0;k<9;k++){
        $(`td#${k}`).html(`<button id="${k}" type="button" class="btn btn-info play">Check</button>`)
    }
    playGame();
    console.log(i);
  });


    