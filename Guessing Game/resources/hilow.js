/**
 * Created by Jack on 3/25/2015.
 */
$(function(){

    var input = $('#guess')
        , btn = $('#guess_btn')
        , status = $('#guesses')
        , reset = $('#reset');

    var guesses = 0;
    var aNumber = getRandom();

    reset.on('click', function(){
        guesses = 0;
        aNumber = getRandom();
        input.val("");
        status.empty();
    });


    btn.on('click', function(){
        var value = parseInt(input.val());
        guesses += 1;

        if(value === aNumber){
            // game over
            tellUser(guesses, value, "turns to guess");
        } else if(value > aNumber) {
            tellUser(value,"high");
            // too high
        } else {
            tellUser(value, "low");
            // too low
        }

        input.val("");

    });

    function tellUser(value, str, text){

        var li = $('<li class="list-group-item" />');

        if(!text){
            text = "is too";
        }

        li.html("<b>"+ value + "</b> "+ text + " <b>" + str + "</b>");
        status.prepend(li);
    }



    function getRandom(){
        return Math.floor(Math.random() * 100);
    }



});