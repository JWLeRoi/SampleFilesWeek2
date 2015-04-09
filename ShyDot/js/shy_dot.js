/**
 * Created by Jack on 4/2/2015.
 */

$(document).ready( function()
{
    var intMSecPerMove         = 400;
    var intFramesPerSecond     = 250;
    var flMSecPerFrame         = 1000/intFramesPerSecond;
    var intFramesPerMove       = Math.round(intMSecPerMove/flMSecPerFrame);
    var intBaseIntervalMSec    = Math.floor(flMSecPerFrame);
    var intTotalFrames         = 0;
    var intFrameTargetTimeMSec = 0;
    var intFrameTotalTimeMSec  = 0;
    var intIntervalTimeMSec    = 0;
    var intAddTimeMSec         = 0;

    var hDot05 = $("#div_dot_05");

    var intTopStart           = parseInt(hDot05.css("top"),  10);  //.substring(0, hDot05.css("top").length - 2), 10);
    var intLeftStart          = parseInt(hDot05.css("left"), 10); //.substring(0, hDot05.css("left").length - 2), 10);
    var intXPixelsMove        = 200;
    var intYPixelsMove        = 400;
    var flXPixelsPerFrame     = intXPixelsMove/intFramesPerMove;
    var flYPixelsPerFrame     = intYPixelsMove/intFramesPerMove;
    var intXPixelsAccumulator = 0;
    var intYPixelsAccumulator = 0;
    var strXTemp              = "";
    var strYTemp              = "";


    var strArrBackgroundColors = hDot05.css("background-color").split(",");
    var strRedValue            = strArrBackgroundColors[0];
    var strArrRedValue         = strRedValue.split("(");
    var intRedValue            = parseInt(strArrRedValue[1], 10);
    var intGreenValue          = parseInt(strArrBackgroundColors[1]);
    var strBlueValue           = strArrBackgroundColors[2];
    var strArrBlueValue        = strBlueValue.split(")");
    var intBlueValue           = parseInt(strArrBlueValue[0], 10);
    var intNewRedValue         = 256;
    var intNewGreenValue       = 0;
    var intNewBlueValue        = 0;
    var flRedDeltaPerFrame     = (intNewRedValue   - intRedValue)  /intFramesPerMove;
    var flGreenDeltaPerFrame   = (intNewGreenValue - intGreenValue)/intFramesPerMove;
    var flBlueChangePerFrame   = (intNewBlueValue  - intBlueValue) /intFramesPerMove;
    var intRedDelta            = 0;
    var intGreenDelta          = 0;
    var intBlueDelta           = 0;
    var strRedTemp             = "";
    var strGreenTemp           = "";
    var strBlueTemp            = "";

    var intHeightValue        = parseInt(hDot05.css("height"), 10);
    var intWidthValue         = parseInt(hDot05.css("width"), 10);
    var intNewHeightValue     = 5;
    var intNewWidthValue      = 300;
    var flHeightDeltaPerFrame = (intNewHeightValue - intHeightValue)/intFramesPerMove;
    var flWidthDeltaPerFrame  = (intNewWidthValue  - intWidthValue) /intFramesPerMove;
    var intHeightDelta        = 0;
    var intWidthDelta         = 0;
    var strHeightTemp         = "";
    var strWidthTemp          = "";

    var hStartButton = $("#btnStart");
    var hResetButton = $("#btnReset");

    hResetButton.on("click", function ()
    {
        hDot05.css("top","100px");
        intTopStart    = 100;

        hDot05.css("left", "100px");
        intLeftStart   = 100;

        hDot05.css("height", "75px");
        intHeightValue = 75;

        hDot05.css("width", "20px");
        intWidthValue  = 20;

        hDot05.css("background-color","#0000FF");

        intTotalFrames = 0;
    });

    hStartButton.on("click", function()
    {
        var interval1 = window.setInterval( function ()
        {
            intTotalFrames ++;

            intFrameTargetTimeMSec = Math.round(intTotalFrames*flMSecPerFrame);
            intIntervalTimeMSec    = intFrameTargetTimeMSec - intFrameTotalTimeMSec;
            intFrameTotalTimeMSec += intIntervalTimeMSec;
            intAddTimeMSec         = intIntervalTimeMSec - intBaseIntervalMSec;
            intXPixelsAccumulator  = Math.round(intTotalFrames*flXPixelsPerFrame);
            intYPixelsAccumulator  = Math.round(intTotalFrames*flYPixelsPerFrame);
            strXTemp               = (intLeftStart + intXPixelsAccumulator).toString(10) + "px";
            strYTemp               = (intTopStart  + intYPixelsAccumulator).toString(10) + "px";

            intRedDelta   = Math.round(intTotalFrames*flRedDeltaPerFrame);
            intGreenDelta = Math.round(intTotalFrames*flGreenDeltaPerFrame);
            intBlueDelta  = Math.round(intTotalFrames*flBlueChangePerFrame);
            strRedTemp    = (intRedValue   + intRedDelta)  .toString(16);
            strGreenTemp  = (intGreenValue + intGreenDelta).toString(16);
            strBlueTemp   = (intBlueValue  + intBlueDelta) .toString(16);

            if (strRedTemp.length === 1)
            {
                strRedTemp = "0" + strRedTemp;
            }
            if (strGreenTemp.length === 1)
            {
                strGreenTemp = "0" + strGreenTemp;
            }
            if (strBlueTemp.length === 1)
            {
                strBlueTemp = "0" + strBlueTemp;
            }

            intHeightDelta = Math.round(intTotalFrames*flHeightDeltaPerFrame);
            intWidthDelta  = Math.round(intTotalFrames*flWidthDeltaPerFrame);
            strHeightTemp  = (intHeightValue   + intHeightDelta).toString(10) + "px";
            strWidthTemp   = (intWidthValue    + intWidthDelta) .toString(10) + "px";

            if (intAddTimeMSec > 0)
            {
                window.setTimeout(function ()
                {
                    hDot05.css("left", strXTemp);
                    hDot05.css("top",  strYTemp);

                    hDot05.css("background-color", "#" + strRedTemp + strGreenTemp + strBlueTemp);

                    hDot05.css("height", strHeightTemp);
                    hDot05.css("width",  strWidthTemp);

                }, intAddTimeMSec);

            }
            else
            {
                hDot05.css("left", strXTemp);
                hDot05.css("top",  strYTemp);

                hDot05.css("background-color", "#" + strRedTemp + strGreenTemp + strBlueTemp);

                hDot05.css("height", strHeightTemp);
                hDot05.css("width",  strWidthTemp);
            }

            if (intTotalFrames === intFramesPerMove)
            {
                window.clearInterval(interval1);

            }

        }, intBaseIntervalMSec);

    });

});

