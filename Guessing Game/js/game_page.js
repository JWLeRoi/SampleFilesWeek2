/**
 * Created by J.LeRoi on 3/24/2015.
 */

window.onload=WinLoad;

function WinLoad()
{
    /*Set up variables.*/
    var targetNumber = getTarget();
    var numGuesses   = 0;
    var inputBox     = document.getElementById("textGuess");
    var outputBox    = document.getElementById("ulGuesses");
    var submitButton = document.getElementById("btnSubmit");
    var resetButton  = document.getElementById("btnReset");
    var guessValue;
    var newGuessLine;
    var newGuessText;

    submitButton.addEventListener("click", function(event)
    {
        //Add the guess to the total number of guesses.
        numGuesses += 1;

        //Get the guess.
        guessValue = inputBox.value;

        /*Test the guess value.*/
        //Test for a valid value.
        if (guessValue > 100 || isNaN(parseInt(guessValue)))
        {
            alert("Please enter a number from 0 to 100, inclusive.")
        }
        //Test for values higher than the target.
        else if(guessValue > targetNumber)
        {
            /*Add a new line to the guess list.*/
            newGuessLine = document.createElement("li");
            newGuessText = document.createTextNode(guessValue + " is too high at guess number " + numGuesses + ".");
            newGuessLine.appendChild(newGuessText);
            outputBox.appendChild(newGuessLine);
        }
        //Test for values lower than the target.
        else if(inputBox.value < targetNumber)
        {
            /*Add a new line to the guess list.*/
            newGuessLine = document.createElement("li");
            newGuessText = document.createTextNode(guessValue + " is too low at guess number " + numGuesses + ".");
            newGuessLine.appendChild(newGuessText);
            outputBox.appendChild(newGuessLine);
        }
        else
        {
            /*Add a new line to the guess list.*/
            newGuessLine = document.createElement("li");
            newGuessText = document.createTextNode(guessValue + " is right at guess number " + numGuesses + ".");
            newGuessLine.appendChild(newGuessText);
            outputBox.appendChild(newGuessLine);
            /*Set state for the buttons.*/
            submitButton.disabled = true;
            resetButton.disabled  = false;

        }

        //Clear the text for the input box.
        inputBox.value = "";

    });


    resetButton.addEventListener("click", function(event)
    {
        //Reset the counter for the number of guesses.
        numGuesses = 0;
        //Get a new random number for the target.
        targetNumber = getTarget();
        /*Clear the text for the input and output boxes.*/
        inputBox.value = "";
        outputBox.innerHTML="";
        /*Set state for the buttons.*/
        submitButton.disabled = false;
        resetButton.disabled = true;

    });

}

function getTarget()
{
    /*Using Math.round is preferable to either Math.ceil or Math.floor.
      Math.round gives a target range of 0 to 100.
     */
    //Get a random integer between 0 and 100, inclusive.
    var target = Math.round(Math.random() * 100);
    alert(target);
    return target;
}
