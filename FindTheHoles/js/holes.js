/**
 * Created by j.LeRoi on 3/25/2015.
 */

//use of const was characterized with Chrome Version 41.0.2272.101 m
const strArrHOLES = ["WwETtYyrUuIiSsFfGHhJjKkLlZzXxCcVvNnMm12357", "4690QeqROoPpAaDdb", "B"];
/*//var result = findChar("w")
//alert(result);
alert("Before 0");

if (strArrHOLES[0].includes("B"))
{
    alert("0");

}

alert("Before 1");
if (strArrHOLES[1].includes("B"))
{
    alert("1");

}

alert("Before 2");
if (strArrHOLES[2].includes("B"))
{
    alert("2");

}
*/


$(document).ready(function()
{
    var submitButton = $("#btnSubmit");
    var inputText    = $("#inBox");
    var outputText   = $("#outBox");



    inputText.on("click", function()
    {
        //inputText.val("");
        //alert("inputText - click");
        inputText.val("");
        outputText.val("");
    });

    inputText.keypress(function(event)
    {
        if (event.which === 13)
        {
            var inputStrArray = inputText.val().split("");
            //alert(inputStrArray);
            var result = inputStrArray.map(findChar);
            var count  = result.reduce(function(runningTotal, currentValue)
            {
                return runningTotal + currentValue;
            });

            //alert(count);

            outputText.val("There are " + count + " holes in the string.");

            //alert("Here");
            //alert("inputText - keypress")
        }

    });

});

function findChar(inChar)
{
    //alert("Here");
    for (var index = 0; index < 3; index += 1)
     {
     //alert(index + " " + inChar);
         if (strArrHOLES[index].includes(inChar))
         {
            //alert(index + " " + inChar);
             return index;

         }

     }

};
