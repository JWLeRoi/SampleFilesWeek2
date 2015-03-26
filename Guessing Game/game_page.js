/**
 * Created by J.LeRoi on 3/24/2015.
 */

var targetNumber = getTarget();
var numGuesses = 0;

window.onload=WinLoad;

function WinLoad()
{
    var inputBox = document.getElementById("inGuess");
    var outputBox = document.getElementById("ulGuesses");
    var submitButton=document.getElementById("btnSubmit");
    var resetButton=document.getElementById("btnReset");
    var guessValue;
    var newGuessLine;
    var newGuessText
    //alert(inputBox);


    submitButton.addEventListener("click", function(event)
    {
        numGuesses += 1;
        guessValue = inputBox.value;

        if (guessValue > 100 || isNaN(parseInt(guessValue)))
        {

            alert("Please enter a number from 0 to 100, inclusive.")
        }
        else if(guessValue > targetNumber)
        {
            newGuessLine = document.createElement("li");
            newGuessText = document.createTextNode(guessValue + " is too high.");
            newGuessLine.appendChild(newGuessText);
            outputBox.appendChild(newGuessLine);
        }
        else if(inputBox.value < targetNumber)
        {
            newGuessLine = document.createElement("li");
            newGuessText = document.createTextNode(guessValue + " is too low.");
            newGuessLine.appendChild(newGuessText);
            outputBox.appendChild(newGuessLine);
        }
        else
        {
            newGuessLine = document.createElement("li");
            newGuessText = document.createTextNode(guessValue + " is right.");
            newGuessLine.appendChild(newGuessText);
            outputBox.appendChild(newGuessLine);
            submitButton.disabled = true;
            resetButton.disabled = false;

        }

        inputBox.value = "";

    });


    resetButton.addEventListener("click", function(event)
    {
        numGuesses = 0;
        targetNumber = getTarget();
        inputBox.value = "";
        outputBox.innerHTML="";
        submitButton.disabled = false;
        resetButton.disabled = true;

    });

}

function getTarget()
{
    var target = Math.round(Math.random() * 100);
    alert(target);
    return target;
}
