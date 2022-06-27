function startredTimer() {
    clearInterval(Interval2);
    Interval2 = setInterval(startredTimer, 500);
    if (redtimer != 00) {
        redtimer--;
        red.innerHTML = redtimer;
        redtimer2--;
        red2.innerHTML = redtimer;
    } else if (redtimer == 0) {
        document.getElementById("color3").style.display = "inline";
        document.getElementById("color33").style.display = "none";
        document.getElementById("color4").style.display = "inline";
        document.getElementById("color44").style.display = "none";
        red.innerHTML = "30";
        red2.innerHTML = "30";
        redtimer = 30;
        redtimer2 = 30;
        myMove();
        myMove4();
        startgreentimer();
    }
}

function startgreentimer() {
    clearInterval(Interval2);
    Interval2 = setInterval(startgreentimer, 500);
    if (redtimer != 00) {
        redtimer--;
        red.innerHTML = redtimer;
        redtimer2--;
        red2.innerHTML = redtimer;
    } else if (redtimer == 0) {
        document.getElementById("color3").style.display = "none";
        document.getElementById("yellow_color3").style.display = "inline";
        document.getElementById("color33").style.display = "none";
        document.getElementById("color4").style.display = "none";
        document.getElementById("color44").style.display = "none";
        document.getElementById("yellow_color4").style.display = "inline";
        red.innerHTML = "05";
        red2.innerHTML = "05";
        redtimer = 05;
        redtimer2 = 05;
        startyellowtimer();
    }
}

function startyellowtimer() {

    clearInterval(Interval2);
    Interval2 = setInterval(startyellowtimer, 500);
    if (redtimer != 00) {
        redtimer--;
        red.innerHTML = redtimer;
        redtimer2--;
        red2.innerHTML = redtimer;
    } else if (redtimer == 0) {
        document.getElementById("yellow_color3").style.display = "none";
        document.getElementById("yellow_color4").style.display = "none";
        document.getElementById("color3").style.display = "none";
        document.getElementById("color33").style.display = "inline";
        document.getElementById("color4").style.display = "none";
        document.getElementById("color44").style.display = "inline";
        red.innerHTML = "35";
        red2.innerHTML = "35";
        redtimer = 35;
        redtimer2 = 35;
        startredTimer();        
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function myMove() {
    var img1 = document.getElementById("car");
    var pos = 0;
    var id = setInterval(frame, 2);

    function frame() {

        if (pos == 750) {
            clearInterval(id);
            img1.style.top = 1.5 + 'cm';
            img1.style.marginTop = 1 + 'cm';
        } else if (redtimer == 1) {
            clearInterval(id);
            img1.style.top = 0 + 'cm';
            img1.style.marginTop = 4 + 'cm';
        } else {
            pos++;
            img1.style.top = pos + 'px';
        }
        if (pos == 250) {
            myMove11();
        }
    }
}

function myMove11() {
    var img11 = document.getElementById("car11");
    var pos11 = 0;
    var id11 = setInterval(frame11, 2);

    function frame11() {
        if (pos11 == 750) {
            clearInterval(id11);
            img11.style.top = 0 + "px";
        } else if (redtimer == 1) {
            clearInterval(id11);
            img11.style.top = 0 + "px";
        } else {
            pos11++;
            img11.style.top = pos11 + 'px';
        }
        if (pos11 == 250) {
            document.getElementById("car12").style.visibility = "visible";
            myMove12();
        }
    }
}

function myMove12() {
    var img12 = document.getElementById("car12");
    var pos12 = 0;
    var id12 = setInterval(frame12, 2);

    function frame12() {
        if (pos12 == 750) {
            clearInterval(id12);
            img12.style.top = 0 + "px";
        } else if (redtimer == 1) {
            clearInterval(id12);
            img12.style.top = 0 + "px";
            document.getElementById("car12").style.visibility = "hidden";
        } else {
            pos12++;
            img12.style.top = pos12 + 'px';
        }
        if (pos12 == 250) {
            myMove();
        }
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////

function myMove4() {
    var img4 = document.getElementById("car4");
    var pos4 = 0;
    var id4 = setInterval(frame4, 2);

    function frame4() {

        if (pos4 == 750) {
            clearInterval(id4);
            img4.style.bottom = 1.5 + 'cm';
            img4.style.marginBottom = 0 + 'cm';
        } else if (redtimer == 1) {
            clearInterval(id4);
            img4.style.bottom = 0 + 'cm';
            img4.style.marginBottom = 2.5 + 'cm';
        } else {
            pos4++;
            img4.style.marginBottom = pos4 + 'px';
        }
        if (pos4 == 250) {
            myMove41();
        }
    }
}

function myMove41() {
    var img41 = document.getElementById("car41");
    var pos41 = 0;
    var id41 = setInterval(frame41, 2);

    function frame41() {
        if (pos41 == 750) {
            clearInterval(id41);
            img41.style.bottom = 2.7 + "cm";
        } else if (redtimer == 1) {
            clearInterval(id41);
            img41.style.bottom = 0.2 + "cm";
        } else {
            pos41++;
            img41.style.bottom = pos41 + 'px';
        }
        if (pos41 == 250) {
            document.getElementById("car42").style.visibility = "visible";
            myMove42();
        }
    }
}

function myMove42() {
    var img42 = document.getElementById("car42");
    var pos42 = 0;
    var id42 = setInterval(frame42, 2);

    function frame42() {
        if (pos42 == 750) {
            clearInterval(id42);
            img42.style.bottom = 0 + "px";
            document.getElementById("car42").style.visibility = "hidden";
        } else if (redtimer == 1) {
            clearInterval(id42);
            img42.style.bottom = 0 + "px";
            document.getElementById("car42").style.visibility = "hidden";
        } else {
            pos42++;
            img42.style.bottom = pos42 + 'px';
        }
        if (pos42 == 250) {
            myMove4();
        }
    }
}
