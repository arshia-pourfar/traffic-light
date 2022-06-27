var green = document.getElementById("greentime");
var green2 = document.getElementById("greentime2");
var greentimer = 30;
var greentimer2 = 30;
var greentimerr = 30;
var Interval;
var red = document.getElementById("redtime");
var red2 = document.getElementById("redtime2");
var redtimer = 35;
var redtimer2 = 35;
var Interval2;
var img2 = document.getElementById("car2");
var img21 = document.getElementById("car21");
var img22 = document.getElementById("car22");
var img23 = document.getElementById("car23");
var img24 = document.getElementById("car24");
var img3 = document.getElementById("car3");
var img31 = document.getElementById("car31");
var img32 = document.getElementById("car32");
var img33 = document.getElementById("car33");
var img34 = document.getElementById("car34");
function startgreenTimer2() {
    clearInterval(Interval);
    Interval = setInterval(startgreenTimer2, 500);
    if (greentimerr == 30) {
        myMove2();
        myMove3();
    }
    if (greentimer != 00) {
        greentimer--;
        green.innerHTML = greentimer;
        greentimer2--;
        green2.innerHTML = greentimer;
        greentimerr--;
    } else if (greentimer == 0) {
        document.getElementById("color2").style.backgroundColor = "yellow";
        document.getElementById("color").style.backgroundColor = "yellow";
        green.innerHTML = "05";
        green2.innerHTML = "05";
        greentimer = 05;
        greentimer2 = 05;
        startyellowtimer2();
    }

}

function startyellowtimer2() {

    clearInterval(Interval);
    Interval = setInterval(startyellowtimer2, 500);
    if (greentimer != 00) {
        greentimer--;
        green.innerHTML = greentimer;
        greentimer2--;
        green2.innerHTML = greentimer;
    } else if (greentimer == 0) {
        document.getElementById("color2").style.backgroundColor = "#ff0000";
        document.getElementById("color").style.backgroundColor = "#ff0000";
        green.innerHTML = "35";
        green2.innerHTML = "35";
        greentimer = 35;
        greentimer2 = 35;
        startredtimer2();
}
}

function startredtimer2() {

    clearInterval(Interval);
    Interval = setInterval(startredtimer2, 500);
    if (greentimer != 00) {
        greentimer--;
        green.innerHTML = greentimer;
        greentimer2--;
        green2.innerHTML = greentimer;
    } else if (greentimer == 0) {
        document.getElementById("color2").style.backgroundColor = "#01b601";
        document.getElementById("color").style.backgroundColor = "#01b601";
        green.innerHTML = "30";
        green2.innerHTML = "30";
        greentimer = 30;
        greentimer2 = 30;
        greentimerr = 30;
        startgreenTimer2();
    }
}
////////////////////////////////////////////////////////////////////////////////
function myMove2() {
    var img2 = document.getElementById("car2");
    var pos2 = 0;
    var id2 = setInterval(frame2, 2);

    function frame2() {

        if (pos2 == 1000) {
            clearInterval(id2);
            img2.style.visibility = "hidden";
            img2.style.marginRight = 0 + 'cm';
        } else if (greentimer == 1) {
            clearInterval(id2);
            img2.style.marginRight = 0 + 'cm';
        } else {
            pos2++;
            img2.style.marginRight = pos2 + 'px';
        }
        if (pos2 == 200) {
            img21.style.visibility = "visible";
            myMove21();
        }
    }
}

function myMove21() {
    var img21 = document.getElementById("car21");
    var pos21 = 0;
    var id21 = setInterval(frame21, 2);

    function frame21() {
        if (pos21 == 1000) {
            clearInterval(id21);
            img21.style.visibility = "hidden";
            img21.style.marginRight = 0 + 'cm';
        } else if (greentimer == 1) {
            clearInterval(id21);
            img21.style.marginRight = 0 + 'cm';
        } else {
            pos21++;
            img21.style.marginRight = pos21 + 'px';
        }
        if (pos21 == 200) {
            img22.style.visibility = "visible";
            myMove22();
        }
    }
}

function myMove22() {
    var img22 = document.getElementById("car22");
    var pos22 = 0;
    var id22 = setInterval(frame22, 2);

    function frame22() {
        if (pos22 == 1100) {
            clearInterval(id22);
            img22.style.visibility = "hidden";
            img22.style.marginRight = 0 + 'cm';
        } else if (greentimer == 1) {
            clearInterval(id22);
            img22.style.marginRight = 0 + 'cm';
        } else {
            pos22++;
            img22.style.marginRight = pos22 + 'px';
        }
        if (pos22 == 200) {
            img23.style.visibility = "visible";
            myMove23();
        }
    }
}

function myMove23() {
    var img23 = document.getElementById("car23");
    var pos23 = 0;
    var id23 = setInterval(frame23, 2);

    function frame23() {
        if (pos23 == 1250) {
            clearInterval(id23);
            img23.style.visibility = "hidden";
            img23.style.marginRight = 0 + 'cm';
        } else if (greentimer == 1) {
            clearInterval(id23);
            img23.style.marginRight = 0 + 'cm';
        } else {
            pos23++;
            img23.style.marginRight = pos23 + 'px';
        }
        if (pos23 == 200) {
            img24.style.visibility = "visible";
            myMove24();
        }
    }
}

function myMove24() {
    var img24 = document.getElementById("car24");
    var pos24 = 0;
    var id24 = setInterval(frame24, 2);

    function frame24() {
        if (pos24 == 1400) {
            clearInterval(id24);
            img24.style.visibility = "hidden";
            img24.style.marginRight = 0 + 'cm';
        } else if (greentimer == 1) {
            clearInterval(id24);
            img24.style.marginRight = 0 + 'cm';
        } else {
            pos24++;
            img24.style.marginRight = pos24 + 'px';
        }
        if (pos24 == 500) {
            img2.style.visibility = "visible";
            myMove2();
        }
    }
}
///////////////////////////////////////////////////////////////////////////
function myMove3() {
    var img3 = document.getElementById("car3");
    var pos3 = 0;
    var id3 = setInterval(frame3, 2);

    function frame3() {

        if (pos3 == 1000) {
            clearInterval(id3);
            img3.style.left = 0 + 'cm';
            img3.style.visibility = "hidden";
        } else if (greentimer == 1) {
            clearInterval(id3);
            img3.style.left = 0 + 'cm';
            img3.style.visibility = "visible";
        } else {
            pos3++;
            img3.style.left = pos3 + 'px';
        }
        if (pos3 == 200) {
            img31.style.visibility = "visible";
            myMove31();
        }
    }
}

function myMove31() {
    var img31 = document.getElementById("car31");
    var pos31 = 0;
    var id31 = setInterval(frame31, 2);

    function frame31() {
        if (pos31 == 1000) {
            clearInterval(id31);
            img31.style.visibility = "hidden";
            img31.style.left = 0 + 'cm';
        } else if (greentimer == 1) {
            clearInterval(id31);
            img31.style.left = 0 + 'cm';
        } else {
            pos31++;
            img31.style.left = pos31 + 'px';
        }
        if (pos31 == 200) {
            img32.style.visibility = "visible";
            myMove32();
        }
    }
}

function myMove32() {
    var img32 = document.getElementById("car32");
    var pos32 = 0;
    var id32 = setInterval(frame32, 2);

    function frame32() {
        if (pos32 == 1100) {
            clearInterval(id32);
            img32.style.visibility = "hidden";
            img32.style.left = 0 + 'cm';
        } else if (greentimer == 1) {
            clearInterval(id32);
            img32.style.left = 0 + 'cm';
        } else {
            pos32++;
            img32.style.left = pos32 + 'px';
        }
        if (pos32 == 200) {
            img33.style.visibility = "visible";
            myMove33();
        }
    }
}

function myMove33() {
    var img33 = document.getElementById("car33");
    var pos33 = 0;
    var id33 = setInterval(frame33, 2);

    function frame33() {
        if (pos33 == 1250) {
            clearInterval(id33);
            img33.style.visibility = "hidden";
            img33.style.left = 0 + 'cm';
        } else if (greentimer == 1) {
            clearInterval(id33);
            img33.style.left = 0 + 'cm';
        } else {
            pos33++;
            img33.style.left = pos33 + 'px';
        }
        if (pos33 == 200) {
            img34.style.visibility = "visible";
            myMove34();
        }
    }
}

function myMove34() {
    var img34 = document.getElementById("car34");
    var pos34 = 0;
    var id34 = setInterval(frame34, 2);

    function frame34() {
        if (pos34 == 1200) {
            clearInterval(id34);
            img34.style.visibility = "hidden";
            img34.style.left = 0 + 'cm';
        } else if (greentimer == 1) {
            clearInterval(id34);
            img34.style.left = 0 + 'cm';
        } else {
            pos34++;
            img34.style.left = pos34 + 'px';
        }
        if (pos34 == 500) {
            img3.style.visibility = "visible";
            myMove3();
        }
    }
}
