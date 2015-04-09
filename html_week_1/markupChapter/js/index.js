/**
 * Created by J.LeRoi on 3/24/2015.
 */

    // Function to change the content of t2
function modifyText() {
    var t2 = document.getElementById("t2");
    if (t2.firstChild.nodeValue == "three") {
        t2.firstChild.nodeValue = "two";
    } else {
        t2.firstChild.nodeValue = "three";
    }
}

// add event listener to table
var el = document.getElementById("outside");
el.addEventListener("click", modifyText, false);