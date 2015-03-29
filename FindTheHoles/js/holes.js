/**
 * Created by j.LeRoi on 3/25/2015.
 */

/*
 Define constant array to search for the number of holes in the tested character.
 Characters in element 0 have 0 holes. Characters in element 1 have 1 hole. Characters in element 2 have 2 holes.
 Use of const was characterized with Chrome Version 41.0.2272.101 m
 */
const strArrHOLES = ["WwETtYyrUuIiSsFfGHhJjKkLlZzXxCcVvNnMm12357", "4690QeqRO#@oPpAaDdb", "%&B"];

//Use JQuery to delay execution until the page is ready.
$(document).ready(function()
{
    /*Set up variables.*/
    /*Use JQuery to get handles for HTML elements.*/
    var submitButton = $("#btnSubmit");
    var inputText    = $("#inBox");
    var outputText   = $("#outBox");

    var count;

    //Use JQuery to set up handler for click event in entry box.
    inputText.on("click", function()
    {
        inputText.val("");
        outputText.val("");
    });

    //Use JQuery to set up handler for Enter key press in entry box.
    inputText.keypress(function(event)
    {
        //Test for the Enter key.
        if (event.which === 13)
        {
            //Count the number of holes in the input string.
            count  = inputText.val().split("").map(findChar).reduce(function(runningTotal, currentValue)
            {
                return runningTotal + currentValue;
            });

            /*Select the output for the number of holes.*/
            if (count === 1)
            {
                //Display the output message for 1 hole.
                outputText.val("There is " + count + " hole in the string.");
            }
            else
            {
                //Display the output message for 0 holes or more than 1 hole.
                outputText.val("There are " + count + " holes in the string.");
            }

        }

    });

});

/*Test the submitted character for the number of holes.*/
function findChar(inChar)
{
    /*
     Loop through the constant array for the number of holes.
     The constant array has 3 elements.
     */
    for (var index = 0; index < 4; index += 1)
    {
        /*
         If the index reaches 3, the submitted character is not found in the constant array
         and it is assumed the submitted character has 0 holes.
         */
        if (index === 3)
        {
            return 0;
        }

        /*
         If the submitted character matches one of the characters in the 0 element
         of the constant array, the submitted character has 0 holes. Return the 0 index.
         If the submitted character matches one of the characters in the 1 element
         of the constant array, the submitted character has 1 hole. Return the 1 index.
         If the submitted character matches one of the characters in the 2 element
         of the constant array, the submitted character has 2 holes. Return the 2 index.
         */
        if (strArrHOLES[index].includes(inChar))
        {
            return index;

        }

    }

};
