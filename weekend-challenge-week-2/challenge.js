//This is animation for when you click my Resume title
$("#name").click(function () {
    // Scale up and change color smoothly 
    $("#name").animate({
        fontSize: "35px",
        color: "#FF6347", // tomato color
        opacity: 0.8
    }, 1000).animate({
        fontSize: "2em", color: "#000000", // back to black
        opacity: 1
    }, 1000);
});

//This is an alert for when you click contact paragraph
$("#contact-p").click(function () {
    alert("If you want his phone number you should email him");
});
// Toggle Work Experience paragraph 
$("#work-link").click(function () {
    if ($("#work-p").css("display") === "none") {
        $("#work-p").css("display", "block");
    }
    else {
        $("#work-p").css("display", "none");
    }
});
// Toggle Contact Info paragraph 
$("#contact-link").click(function () {
    if ($("#contact-p").css("display") === "none") {
        $("#contact-p").css("display", "block");
    } else {
        $("#contact-p").css("display", "none");
    }
});
// Toggle Education paragraph 
$("#education-link").click(function () {
    if ($("#education-p").css("display") === "none") {
        $("#education-p").css("display", "block");
    } else { $("#education-p").css("display", "none"); }
});
// Toggle Extracurricular Activities paragraph 
$("#activities-link").click(function () {
    if ($("#activities-p").css("display") === "none") {
        $("#activities-p").css("display", "block");
    } else { $("#activities-p").css("display", "none"); }
});
