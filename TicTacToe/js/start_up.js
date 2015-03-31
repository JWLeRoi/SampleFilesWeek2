/**
 * Created by Jack on 3/30/2015.
 */


$(document).ready(function()
{
    var radAmerican = $("#optionsRadios1");
    var radBritish  = $("#optionsRadios2");

    radAmerican.on("click", function()
    {
        window.open("tic_tac_toe.html","");
        localStorage.setItem("language", "american")
        window.close("start_up.html");
    });

    radBritish.on("click", function()
    {
        window.open("tic_tac_toe.html","");
        localStorage.setItem("language", "british")
        window.close("start_up.html");
    });

});