$(document).ready(function() {
    var Random=Math.floor(Math.random()*101+19)

    $("#targnum").text(Random);

    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)


    var playerTotal=0;
    var wins= 0;
    var losses= 0;

    $("#wins").append(wins);
    $("#losses").append(losses);

function reset(){
    Random=Math.floor(Math.random()*101+19);

    $("#targnum").text(Random);
     num1= Math.floor(Math.random()*11+1)
     num2= Math.floor(Math.random()*11+1)
     num3= Math.floor(Math.random()*11+1)
     num4= Math.floor(Math.random()*11+1)
    playerTotal= 0;
    $("#total").text(playerTotal);
    }

function winner(){
    wins++;
    $("#wins").text(wins);
    reset();
}

function loser(){
    losses++;
    $("#losses").text(losses);
    reset();
}

    $("#one").click(function() {
        playerTotal = playerTotal + num1;
        $("#total").text(playerTotal);
        
        if (playerTotal == Random){
            winner();
        }
        else if (playerTotal > Random){
            loser();
        }
    })

    $("#two").click(function() {
        playerTotal = playerTotal + num2;
        $("#total").text(playerTotal);
        
        if (playerTotal == Random){
            winner();
        }
        else if (playerTotal > Random){
            loser();
        }
    })

    $("#three").click(function() {
        playerTotal = playerTotal + num3;
        $("#total").text(playerTotal);
        
        if (playerTotal == Random){
            winner();
        }
        else if (playerTotal > Random){
            loser();
        }
    })

    $("#four").click(function() {
        playerTotal = playerTotal + num4;
        $("#total").text(playerTotal);
        
        if (playerTotal == Random){
            winner();
        }
        else if (playerTotal > Random){
            loser();
        }
    });
});
