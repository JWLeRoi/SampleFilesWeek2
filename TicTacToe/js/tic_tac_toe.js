/**
 * Created by Jack on 3/29/2015.
 */

var turn = "X";

$(document).ready(function()
{
    var strLanguageType = localStorage.getItem('language');

    $("#box0").val("");
    $("#box1").val("");
    $("#box2").val("");
    $("#box3").val("");
    $("#box4").val("");
    $("#box5").val("");
    $("#box6").val("");
    $("#box7").val("");
    $("#box8").val("");

    if (strLanguageType === "british")
    {
        $("#turnType").text("Enter a Cross");
    }
    else
    {
        $("#turnType").text("Enter an X");
    }

    if (strLanguageType === "british")
    {
        $("#gameName").text("Noughts & Crosses");

    }

    else if (strLanguageType ==="american")
    {
        $("#gameName").text("Tic Tac Toe");

    }

    $("#box0").on("click", function()
    {
        if ($("#box0").val() === "")
        {
            if (turn === "X")
            {
                $("#box0").val("X");
                turn = "O";

                if (strLanguageType === "british")
                {
                    $("#turnType").text("Enter a Nought");
                }
                else
                {
                    $("#turnType").text("Enter an O");

                }

            }
            else
            {
                $("#box0").val("O");
                turn = "X";

                if (strLanguageType === "british")
                {
                    $("#turnType").text("Enter a Cross");
                }
                else
                {
                    $("#turnType").text("Enter an X");

                }

            }

        }

    });

    $("#box1").on("click", function()
    {
        if ($("#box1").val() === "")
        {
            if (turn === "X")
            {
                $("#box1").val("X");
                turn = "O";

                if (strLanguageType === "british")
                {
                    $("#turnType").text("Enter a Nought");
                }
                else
                {
                    $("#turnType").text("Enter an O");

                }

            }
            else
            {
                $("#box1").val("O");

                if (strLanguageType === "british")
                {
                    $("#turnType").text("Enter a Cross");
                }
                else
                {
                    $("#turnType").text("Enter an X");
                }

                turn = "X";

                if (strLanguageType === "british")
                {
                    $("#turnType").text("Enter a Cross");
                }
                else
                {
                    $("#turnType").text("Enter an X");

                }

            }

        }

    });

    $("#box2").on("click", function()
    {
        if ($("#box2").val() === "")
        {
            if (turn === "X")
            {
                $("#box2").val("X");
                turn = "O";

                if (strLanguageType === "british")
                {
                    $("#turnType").text("Enter a Nought");
                }
                else
                {
                    $("#turnType").text("Enter an O");

                }

            }
            else
            {
                $("#box2").val("O");
                turn = "X";

                if (strLanguageType === "british")
                {
                    $("#turnType").text("Enter a Cross");
                }
                else
                {
                    $("#turnType").text("Enter an X");

                }

            }

        }

    });

    $("#box3").on("click", function()
    {
        if ($("#box3").val() === "")
        {
            if (turn === "X")
            {
                $("#box3").val("X");
                turn = "O";

                if (strLanguageType === "british")
                {
                    $("#turnType").text("Enter a Nought");
                }
                else
                {
                    $("#turnType").text("Enter an O");

                }

            }
            else
            {
                $("#box3").val("O");
                turn = "X";

                if (strLanguageType === "british")
                {
                    $("#turnType").text("Enter a Cross");
                }
                else
                {
                    $("#turnType").text("Enter an X");

                }

            }

        }

    });

    $("#box4").on("click", function()
    {
        if ($("#box4").val() === "")
        {
            if (turn === "X")
            {
                $("#box4").val("X");
                turn = "O";

                if (strLanguageType === "british")
                {
                    $("#turnType").text("Enter a Nought");
                }
                else
                {
                    $("#turnType").text("Enter an O");

                }

            }
            else
            {
                $("#box4").val("O");
                turn = "X";

                if (strLanguageType === "british")
                {
                    $("#turnType").text("Enter a Cross");
                }
                else
                {
                    $("#turnType").text("Enter an X");

                }

            }

        }

    });

    $("#box5").on("click", function()
    {
        if ($("#box5").val() === "")
        {
            if (turn === "X")
            {
                $("#box5").val("X");
                turn = "O";

                if (strLanguageType === "british")
                {
                    $("#turnType").text("Enter a Nought");
                }
                else
                {
                    $("#turnType").text("Enter an O");

                }

            }
            else
            {
                $("#box5").val("O");
                turn = "X";

                if (strLanguageType === "british")
                {
                    $("#turnType").text("Enter a Cross");
                }
                else
                {
                    $("#turnType").text("Enter an X");

                }

            }

        }

    });

    $("#box6").on("click", function()
    {
        if ($("#box6").val() === "")
        {
            if (turn === "X")
            {
                $("#box6").val("X");
                turn = "O";

                if (strLanguageType === "british")
                {
                    $("#turnType").text("Enter a Nought");
                }
                else
                {
                    $("#turnType").text("Enter an O");

                }

            }
            else
            {
                $("#box6").val("O");
                turn = "X";

                if (strLanguageType === "british")
                {
                    $("#turnType").text("Enter a Cross");
                }
                else
                {
                    $("#turnType").text("Enter an X");

                }

            }

        }

    });

    $("#box7").on("click", function()
    {
        if ($("#box7").val() === "")
        {
            if (turn === "X")
            {
                $("#box7").val("X");
                turn = "O";

                if (strLanguageType === "british")
                {
                    $("#turnType").text("Enter a Nought");
                }
                else
                {
                    $("#turnType").text("Enter an O");

                }

            }
            else
            {
                $("#box7").val("O");
                turn = "X";

                if (strLanguageType === "british")
                {
                    $("#turnType").text("Enter a Cross");
                }
                else
                {
                    $("#turnType").text("Enter an X");

                }

            }

        }

    });

    $("#box8").on("click", function()
    {
        if ($("#box8").val() === "")
        {
            if (turn === "X")
            {
                $("#box8").val("X");
                turn = "O";

                if (strLanguageType === "british")
                {
                    $("#turnType").text("Enter a Nought");
                }
                else
                {
                    $("#turnType").text("Enter an O");

                }

            }
            else
            {
                $("#box8").val("O");
                turn = "X";

                if (strLanguageType === "british")
                {
                    $("#turnType").text("Enter a Cross");
                }
                else
                {
                    $("#turnType").text("Enter an X");

                }

            }

        }

    });

});