/**
 * Created by j.LeRoi on 3/27/2015.
 */
//const use was characterized with Chrome Version 41.0.2272.101 m
const strArrHOLES = ["WwETtYyrUuIiSsFfGHhJjKkLlZzXxCcVvNnMm12357", "4690QqROoPpAaDdb", "B"];



window.onload=WinLoad;


$(function()
{
    var submitButton = $("btnSubmit");

    submitButton.on("click", function()
    {
        alert("Here");

    });


    function WinLoad()
    {
        //const use was characterized with Chrome Version 41.0.2272.101 m
        //const strArrHOLES = ["WwETtYyrUuIiSsFfGHhJjKkLlZzXxCcVvNnMm12357", "4690QqROoPpAaDdb", "B"];
        alert(strArrHOLES);
        var chars = "apoiusnf79OYIUHDNTWV182048978".split("");
        alert(chars);
        var counts = chars.map(findChar);
        alert(counts);
    }

    function findChar(inChar)
    {
        alert("for");
        for(var index  = 0; index < 3; index += 1)
        {
            alert(index)
            if(holes[index].contains(inChar))
            {
                return index;

            }

        }

    }

});