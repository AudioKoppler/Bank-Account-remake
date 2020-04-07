function validate() {
    let username = document.getElementById("input-username").value;
    let password = document.getElementById("input-password").value;

    $.getJSON("https://spreadsheets.google.com/feeds/list/1iXxWbWG7Gm55AuEXQBbR0PAM9WysM3meuD5ZT0fmr-s/od6/public/values?alt=json", function (data) {
        let sheetData = data.feed.entry;
        for (i = 0; i < sheetData.length; i++) {
            if (username === sheetData[i]["gsx$username"]["$t"] && password === sheetData[i]["gsx$password"]["$t"]) {
                $(".col-md-3").text("Hey " + username + "! get ready to get be ripped off!");
                $("#sign-up").show();
                $("#signIn").hide();
                $(".loginInfo").hide();
                return false;
            } else {
                alert('Sorry! Username or Password is wrong!');
                return false;
            }
        }
    });
    $("#input-username").val("")
    $("#input-password").val("")
}
/*  https://docs.google.com/spreadsheets/d/1iXxWbWG7Gm55AuEXQBbR0PAM9WysM3meuD5ZT0fmr-s/edit?usp=sharing */