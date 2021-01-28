"use strict";


$("#start").click(openPage);

function openPage () {
    $("#splash").addClass("removed");
    $("#splash").on("animationend", () => {
        $("#splash").hide();
    });
}

