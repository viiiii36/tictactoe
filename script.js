//create the game with 9 turns, if the turn is odd number then the div will change to X, 
//even number will change to O
//Player 1 is X, player 2 is O
playGame=()=>{
    let i = 1;
    //Use array to decide who wins
    let array1=[];
    let array2=[];
$('h3').text(`It's player 1 turn`);
$('.play').each(function(){
    $(this).click(function(){
        if (i<10){
            var id = $(this).attr('id');
            //Player 2 turn, modifying the div into "O" string and modify the header 3 to reflect next turn 
            if (i%2==0){
                $(`td#${id}`).text('O');
                array2.push(id);
                //sort the player's array in ascending order to compare with the winning array
                $.each(array2, function(index,value) {
                    array2.sort(function(a, b){return a-b});})
                //call function to see if this player wins this turn and pop a message
                if(winning(array2)=='win'){
                    $('#gameover').attr('class','alert alert-success');
                    $('#gameover').attr('role',"alert")
                    $('#gameover').html(`<h4 class="alert-heading">Game Over</h4>
                    <p>Player 2 won!</p>`)
                };
                $('h3').text(`It's player 1 turn`);
                
            }
            //Player 1 turn, modifying the div into "X" string and modify the header 3 to reflect next turn 
            else{
                $(`td#${id}`).text('X');
                array1.push(id);
                //sort the player's array in ascending order to compare with the winning array
                $.each(array1, function(index,value) {
                    array1.sort(function(a, b){return a-b});})
                    if(winning(array1)=='win'){
                        $('#gameover').attr('class','alert alert-success');
                        $('#gameover').attr('role',"alert")
                        $('#gameover').html(`<h4 class="alert-heading">Game Over</h4>
                        <p>Player 1 won!</p>`)
                    };
                $('h3').text(`It's player 2 turn`);}
            console.log(array1);
            console.log(array2);
            i++;
            if(i==10){
                $('#gameover').attr('class','alert alert-danger');
                $('#gameover').attr('role',"alert")
                $('#gameover').html(`<h4 class="alert-heading">Game Over</h4>
                <p>Nobody won!</p>`)
            }
            console.log(i);
            
        }
    })
})

}
//function playGame is going to be add into reset button so we can play another game
playGame();

//Making a restart button, which is going to set all the div element back to the original buttons 
$( "#restart" ).on( "click", function() {
    $('#gameover').empty();
    $('#gameover').attr('class','');
    $('h3').text(`It's player 1 turn`);
    i=1;
    for (k=0;k<9;k++){ 
        $(`td#${k}`).html(`<button id="${k}" type="button" class="btn btn-info play">Check</button>`)
    }
    //and call playGame function to start a new game
    playGame();
    console.log(i);
  });
  /*
Winning combination:
HOrizontal: [0,1,2] [3,4,5] [6,7,8]
Vertical: [0,3,6] [1,4,7] [2,5,8]
Diagonal: [0,4,8] [2,4,6]
*/

let winningArray=[0,1,2,3,4,5,6,7,8,0,3,6,1,4,7,2,5,8,0,4,8,2,4,6];
//function to decide if the player's winning 
winning=(arr)=>{
    let i=0;
    //There are 8 winning positional combinations
        while (i<8){
            let winCombo=winningArray.slice(i*3,i*3+3);
            //compare data from html td element
            if($(`td#${winCombo[0]}`).html()==$(`td#${winCombo[1]}`).html() 
            && $(`td#${winCombo[1]}`).html()==$(`td#${winCombo[2]}`).html()){
                return 'win';
                break;
            }
        i++;
    }
}

       
    
