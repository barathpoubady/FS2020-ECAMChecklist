const checkListData = `[{
    "name": "Airbus A320",
    "checklists": [{
            "name": "PRELIMINARY COKPIT PREP",
            "checklists": [
                { "name": "DOME LIGHTS", "value": "ON" },
                { "name": "BAT", "value": "CHECK/AUTO" },
                { "name": "EXT PWR", "value": "ON" },
                { "name": "NAV/LOG", "value": "ON" },
                { "name": "ADJUST COCKPIT LIGHTS", "value": "SET" },
                { "name": "APU", "value": "START" },
                { "name": "AIR COND panel", "value": "SET" }
            ]
        },
        {
            "name": "COCKPIT PREPARATION - OVERHEAD PANEL",
            "checklists": [
                { "name": "SIGNS", "value": "SET" },
                { "name": "EMERGENCY EXIT", "value": "ON" },
                { "name": "AIRFIELD DATA", "value": "OBTAIN" },
                { "name": "ADIR's 1/2/3", "value": "ON" },
                { "name": "PUMPS", "value": "ON" },
                { "name": "CREW SUP.", "value": "ON" },
                { "name": "CAPT/PURGE", "value": "ON" }
            ]
        },
        {
            "name": "COCKPIT PREPARATION - FMGS",
            "checklists": [
                { "name": "F-PLN INIT", "value": "COMPLETE" },
                { "name": "ALIGN IRS", "value": "PRESS" },
                { "name": "F-PLN A", "value": "COMPLETE" },
                { "name": "RADIO NAV", "value": "CHECK" },
                { "name": "ZFCG, ZFW", "value": "INSERT" },
                { "name": "BLOCK FUEL", "value": "INSERT" },
                { "name": "TAKE OFF DATA PERF", "value": "INSERT" }
            ]
        },
        {
            "name": "COCKPIT PREPARATION - GLARESHIELD",
            "checklists": [
                { "name": "BARO REF", "value": "SET" },
                { "name": "FD", "value": "CHECK ON" },
                { "name": "ND mode and range", "value": "SET" },
                { "name": "VOR/ADF sel", "value": "AS RORD" },
                { "name": "ATC", "value": "SET" }
            ]
        },
        {
            "name": "BEFORE PUSHBACK",
            "checklists": [
                { "name": "WINDOWS/DOORS", "value": "CHECK" },
                { "name": "THR LEVEL", "value": "IDLE" },
                { "name": "EXT PWR", "value": "CHECK OFF" },
                { "name": "BEACON", "value": "ON" }
            ]
        },
        {
            "name": "ENGINE START",
            "checklists": [
                { "name": "ENG MODE SEL", "value": "IGN/START" },
                { "name": "MASTER SW2/SW1", "value": "ON" }
            ]
        },
        {
            "name": "AFTER START",
            "checklists": [
                { "name": "ENG MODE SEL", "value": "NORM" },
                { "name": "APU BLEED", "value": "OFF" },
                { "name": "GND SPLRS", "value": "ARM" },
                { "name": "FLAPS", "value": "SET" },
                { "name": "PITCH TRIM (disp, calc, brf)", "value": "SET" },
                { "name": "ENG ANTI ICE", "value": "AS RORD" },
                { "name": "WING ANTI ICE", "value": "AS RORD" },
                { "name": "APU MASTER SW.", "value": "OFF" }
            ]
        },
        {
            "name": "TAXI",
            "checklists": [
                { "name": "NOSE LIGHT.", "value": "TAXI" },
                { "name": "PARKING BRAKE", "value": "OFF" }
            ]
        },
        {
            "name": "BEFORE TAKE OFF",
            "checklists": [
                { "name": "AUTO BRAKE", "value": "MAX" },
                { "name": "FCU ALT/HDG", "value": "CHECK" },
                { "name": "ATC CODE", "value": "SET" },
                { "name": "PACS", "value": "OFF" },
                { "name": "PWS", "value": "ON" },
                { "name": "TO CONFIG", "value": "PRESS" },
                { "name": "CAB", "value": "CALL" },
                { "name": "T.O. LIGHTS", "value": "ALL" },
                { "name": "TCAS", "value": "TA or TA/RA" }
            ]
        },
        {
            "name": "TAKE OFF",
            "checklists": [
                { "name": "CHRONO", "value": "START" }
               
            ]
        },
        {
            "name": "AFTER TAKE OFF",
            "checklists": [
                { "name": "STROBE", "value": "AUTO" },
                { "name": "WING", "value": "OFF" },
                { "name": "RUNWAY LIGHT", "value": "OFF" },
                { "name": "PACS", "value": "ON" },
                { "name": "SPEED BRAKE", "value": "DISARM" }
            ]
        },
        {
            "name": "CLIMB",
            "checklists": [
                { "name": "At transition altitude: BARO REF.", "value": "SET/X CHECK" },
                { "name": "Before 10000 FEET:", "value": "" },
                { "name": "NOSE LIGHT", "value": "OFF" },
                { "name": "LAND LIGHT", "value": "OFF" },
                { "name": "SEAT BELT", "value": "A.S RORD" }
            ]
        },
        {
            "name": "CRUISE",
            "checklists": [
                { "name": "TOD", "value": "CALCUL" }
            ]
        },
        {
            "name": "DESCENT PREPARATION",
            "checklists": [
                { "name": "LANDING DATA", "value": "PREPARE" },
                { "name": "FMGS", "value": "PREPARE" }
            ]
        },
        {
            "name": "DESCENT",
            "checklists": [
                { "name": "DESCENT", "value": "INITIATE" },
                { "name": "At 10000 feet:", "value": "" },
                { "name": "LAND LIGHT", "value": "AS RORD" },
                { "name": "SEATBELT", "value": "ON/AUTO" },
                { "name": "RADIO NAV.", "value": "SELECT/IDENT" },
                { "name": "BARO REF", "value": "SET/X CHECK" }
            ]
        },
        {
            "name": "ILS APPROACH",
            "checklists": [
                { "name": "APP PHASE MCDU", "value": "ACTIVATE" },
                { "name": "LOC CAPTURE", "value": "MONITOR" },
                { "name": "APPR", "value": "PRESS" },
                { "name": "GEAR", "value": "DOWN" },
                { "name": "GRNS SPLRS", "value": "ARM" },
                { "name": "AUTO BRAKE", "value": "AS RORD" }
            ]
        },
        {
            "name": "AFTER LANDING",
            "checklists": [
                { "name": "AUTOBRAKE", "value": "DISENGAGE" },
                { "name": "LAND LIGHT", "value": "OFF" },
                { "name": "GRND SPOILER", "value": "DISARM" },
                { "name": "FLAPS", "value": "RETRACT" },
                { "name": "ENG MODE SEL", "value": "NORM" },
                { "name": "TCAS", "value": "STBY" },
                { "name": "PWS", "value": "OFF" },
                { "name": "APU", "value": "START" },
                { "name": "BRAKE TEMP.", "value": "CHECK/BRAKE FAN as Rqr" }
            ]
        },
        {
            "name": "PARKING",
            "checklists": [
                { "name": "PARKING BRAKE", "value": "ON" },
                { "name": "APU BLEED", "value": "ON" },
                { "name": "ENG MAST 1&2", "value": "OFF" },
                { "name": "BEACON LIGHT", "value": "OFF" },
                { "name": "ELAPSED TIME", "value": "STOP" },
                { "name": "FUEL PUMP.", "value": "OFF" },
                { "name": "SEAT BELT", "value": "OFF" }
            ]
        },
        {
            "name": "SECURING THE AIRCRAFT",
            "checklists": [
                { "name": "PARKING BRAKE", "value": "CHECK ON" },
                { "name": "EXTERIOR LIGHT", "value": "OFF" },
                { "name": "APU BLEED", "value": "OFF" },
                { "name": "APU MASTER SW.", "value": "OFF" },
                { "name": "NO SMOKING", "value": "OFF" },
                { "name": "EXT POWER", "value": "AS RORD" },
                { "name": "BAT 1+2", "value": "OFF" }
            ]
        }

    ]
}]`;
let dataCheck = JSON.parse(checkListData);
dataCheck = dataCheck[0];
let x = "";
let compteurRow = 0;
for (i in dataCheck.checklists) {
    x += "<div class='table' id='table_" + i + "'>" + "<h2>" + dataCheck.checklists[i].name + "</h2>";
    for (j in dataCheck.checklists[i].checklists) {
        x += "<div id='table_row_id_" + compteurRow + "' class='table_row '><div class='table_small'> <label class='container'>" + dataCheck.checklists[i].checklists[j].name +
            "<input onchange='clickCheck(" + compteurRow + " , this.checked)' type='checkbox'><span class='checkmark'></span></label> </div>" +
            "<div class='table_small second'><div class='table_small_val doted'><span class='value-txt'>" + dataCheck.checklists[i].checklists[j].value + "</span></div></div></div>";
        compteurRow++;
    }
    x += "</div>";
}
let docElementCheckList = document.querySelector("#checklist-perso");
docElementCheckList.innerHTML = x;

function clickCheck(cptRow, checked) {
    var eleRow = document.querySelector("#table_row_id_" + cptRow);
    checked ? eleRow.classList.add('checked-value') : eleRow.classList.remove('checked-value');
}

(function() {
    //keydown event
    //keyup event 
    //keypress event (does not fire on modifier keys space, shift, etc designed for user input primarily)

    //crossBrowser Events util object
    var util = {
            addEvent: function(el, type, fn) {
                if (typeof addEventListener !== "undefined") {
                    el.addEventListener(type, fn, false);
                } else if (typeof attahcEvent !== "undefined") {
                    el.attachEvent("on" + type, fn);
                } else {
                    el["on" + type] = fn;
                }
            },
            remove: function(el, type, fn) {
                if (typeof removeEventListener !== "undefined") {
                    el.removeEventListener(type, fn, false);
                } else if (typeof detachEvent !== "undefined") {
                    el.detachEvent("on" + type, fn);
                } else {
                    el["on" + type] = fn;
                }
            },
            getTarget: function(e) {
                if (typeof e.target !== "undefined") {
                    return e.target;
                } else {
                    return e.srcElement;
                }
            },
            preventDefault: function(e) {
                if (typeof e.preventDefault !== "undefined") {
                    e.preventDefault();
                } else {
                    e.returnValue = false;
                }
            },
            getCharCode: function(e) {
                if (typeof e.charCode === "number") {
                    //standard browser we get .charCode    
                    return e.charCode;
                } else {
                    //for legacy IE it is .keyCode
                    return e.keyCode;
                }
            }
        }
        /* --------------------------------------------*/

    const checkListWrapper_table = [];
    // checkListWrapper_table.push(document.querySelector("#table_0"));
    // checkListWrapper_table.push(document.querySelector("#table_1"));
    // checkListWrapper_table.push(document.querySelector("#table_2"));
    // checkListWrapper_table.push(document.querySelector("#table_3"));
    // checkListWrapper_table.push(document.querySelector("#table_4"));
    // checkListWrapper_table.push(document.querySelector("#table_5"));
    // checkListWrapper_table.push(document.querySelector("#table_6"));

    let dataCheck = JSON.parse(checkListData);
    dataCheck = dataCheck[0];
    for (i = 0; i < 24; i++) {
        checkListWrapper_table.push(document.querySelector("#table_" + i));
    }

    var checlisteFunc = {
        razCheck: function() {
            for (i in dataCheck.checklists) {
                checkListWrapper_table[i].style.visibility = "hidden";
            }
            // checkListWrapper_table[0].style.visibility = "hidden";
            // checkListWrapper_table[1].style.visibility = "hidden";
            // checkListWrapper_table[2].style.visibility = "hidden";
            // checkListWrapper_table[3].style.visibility = "hidden";
            // checkListWrapper_table[4].style.visibility = "hidden";
            // checkListWrapper_table[5].style.visibility = "hidden";
            // checkListWrapper_table[6].style.visibility = "hidden";
        }
    }

    var cpt = 0;
    var cptrRow = 0;
    checlisteFunc.razCheck();

    util.addEvent(document, "keydown", function(e) {
        //do not need the cross browser code to retrieve it
        // works in every browser with some differences
        var code = e.keyCode;
        // alert(code);
        //will return 65 through 90 reguardless of upper case or lower case because the keydown and key up event give us access to modifier keys. checks for shift, cap, alt etc.
        //(code >= 65 && code <= 90) 

        //these return true or false based on if these keys are pressed
        var altKey = e.altKey,
            ctrlKey = e.ctrlKey,
            shiftKey = e.shiftKey;


        // if (cpt === -1) {
        //     cpt = 0;
        // } else if (cpt >= 7) {
        //     cpt = 6;
        // }
        var firstpage = document.querySelector("#firstpage");
        firstpage.style.display = "none";
        if (code === 49) {
            // alert("pressed ctrl + b");
            checlisteFunc.razCheck();
            cpt = cpt === 0 ? 0 : cpt - 1;
            checkListWrapper_table[cpt].style.visibility = "visible";
        }
        if (code === 50) {
            checlisteFunc.razCheck();
            // alert("pressed ctrl + b");
            cpt = cpt === 23 ? 23 : cpt + 1;
            checkListWrapper_table[cpt].style.visibility = "visible";
        }
        if (code === 51) {
            var eleRow = document.querySelector("#table_row_id_" + cptrRow);
            var eleCheck = document.querySelector("#table_row_id_" + cptrRow + " input");
            eleCheck.checked = false;
            eleRow.classList.remove('checked-value');
            cptrRow = cptrRow === 0 ? 0 : cptrRow - 1;
        }
        if (code === 52) {
            var eleRow = document.querySelector("#table_row_id_" + cptrRow);
            var eleCheck = document.querySelector("#table_row_id_" + cptrRow + " input");
            eleCheck.checked = true;
            eleRow.classList.add('checked-value');
            cptrRow = cptrRow + 1;
            // this.checkListWrapper.style.visibility = "hidden";
        }
        if (code === 53) {
            checlisteFunc.razCheck();
            // alert("pressed ctrl + b");
            // cpt = cpt === 6 ? 6 : cpt + 1;
            //checkListWrapper_table[cpt].style.visibility = "visible";
        }
    });

    var container = document;

    container.addEventListener("touchstart", startTouch, false);
    container.addEventListener("touchmove", moveTouch, false);

    // Swipe Up / Down / Left / Right
    var initialX = null;
    var initialY = null;

    function startTouch(e) {
        initialX = e.touches[0].clientX;
        initialY = e.touches[0].clientY;
    };

    function moveTouch(e) {
        var firstpage = document.querySelector("#firstpage");
        firstpage.style.display = "none";
        if (initialX === null) {
            return;
        }

        if (initialY === null) {
            return;
        }

        var currentX = e.touches[0].clientX;
        var currentY = e.touches[0].clientY;

        var diffX = initialX - currentX;
        var diffY = initialY - currentY;

        if (Math.abs(diffX) > Math.abs(diffY)) {
            // sliding horizontally
            if (diffX > 0) {
                checlisteFunc.razCheck();
                // alert("pressed ctrl + b");
                cpt = cpt === 23 ? 23 : cpt + 1;
                checkListWrapper_table[cpt].style.visibility = "visible";
                // swiped left
                console.log("swiped left");
            } else {
                // alert("pressed ctrl + b");
                checlisteFunc.razCheck();
                cpt = cpt === 0 ? 0 : cpt - 1;
                checkListWrapper_table[cpt].style.visibility = "visible";
                // swiped right
                console.log("swiped right");
            }
        } else {
            // sliding vertically
            if (diffY > 0) {
                // swiped up
                console.log("swiped up");
            } else {
                // swiped down
                console.log("swiped down");
            }
        }

        initialX = null;
        initialY = null;

        e.preventDefault();
    };

}());