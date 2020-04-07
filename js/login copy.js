$.getJSON("https://spreadsheets.google.com/feeds/list/1iXxWbWG7Gm55AuEXQBbR0PAM9WysM3meuD5ZT0fmr-s/od6/public/values?alt=json", function (data) {

    var sheetData = data.feed.entry;

    var i;
    for (i = 0; i < sheetData.length; i++) {
        var User = data.feed.entry[i]['gsx$username']['$t'];
        var pwd = data.feed.entry[i]['gsx$password']['$t'];
    }
    console.log(User);
    console.log(pwd);
});



/* GETTING DATA FROM EXEL */



var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
    var username = document.getElementById("input-username").value;
    var password = document.getElementById("input-password").value;

    if (username == "Kris" && password == "dci123") {
        /* if (username == User && password == pwd) { */

        alert("Login successfully! Welcome " + username);
        window.location = "#"; // Redirecting to other page.
        $("#sign-up").show();
        return false;
    } else {
        attempt--; // Decrementing by one.
        alert("Wrong Username or Password! You have " + attempt + "  more tries!");

        // Disabling fields after 3 attempts.
        if (attempt == 0) {
            document.getElementById("input-username").disabled = true;
            document.getElementById("input-password").disabled = true;
            document.getElementById("sign-in-btn").disabled = true;
            alert("Sorry! Inputfields deactivated! Please refresh Page to try again")
            return false;
        }
    }
    $("#input-username").val("")
    $("#input-password").val("")
}



/*  https://docs.google.com/spreadsheets/d/1iXxWbWG7Gm55AuEXQBbR0PAM9WysM3meuD5ZT0fmr-s/edit?usp=sharing */