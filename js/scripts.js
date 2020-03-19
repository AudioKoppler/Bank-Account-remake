// functions for created account
var bankAccount = {
  balance: 0, // default balance [bug when nothing entered it says "NaN"]
  deposit: function (amount) {
    this.balance = this.balance + amount; // function to add the input to deposit
  },
  withdraw: function (amount) {
    this.balance = this.balance - amount; // function to subtract the input to deposit
  }
};
$(document).ready(function () {
  //submit funktion called by clicking a button with the type=submit in the chosen form
  $("form#sign-up").submit(function (event) {
    event.preventDefault();
    event.preventDefault();

    // get values from input form an create a bankAccount account [name and deposit]
    var inputName = $("input#name").val();
    var initialDeposit = parseFloat($("input#initial-deposit").val());
    var newAccount = Object.create(bankAccount); // deposit and withdraw math functions on top

    // convert to new account
    newAccount.name = inputName;
    newAccount.deposit(initialDeposit);

    // set value of input
    $("input#name").val("");
    $("input#initial-deposit").val("");

    //showing deposit-withdraw after name and deposit input
    $("#deposit-withdraw").show(); //showing deposit-withdraw after name and deposit
    $(".account").show();
    $(".name").text(newAccount.name);
    $(".accountBalance").text(newAccount.balance.toFixed(2));


    $("form#deposit-withdraw").submit(function (event) { //submit funktion called by clicking a button with the type=submit in the chosen form
      event.preventDefault();
      // converting string to an object (if no input it counts 0)  ->> need to ask if understood right with the parsing
      var inputDeposit = $("input#deposit").val().length ? parseFloat($("input#deposit").val()) : 0;
      var inputWithdraw = $("input#withdraw").val().length ? parseFloat($("input#withdraw").val()) : 0;
      // calls the deposit and withdraw function in the created bankAccount
      newAccount.deposit(inputDeposit);
      newAccount.withdraw(inputWithdraw);
      // get updated values from deposit and withdraw function
      $("input#deposit").val("");
      $("input#withdraw").val("");
      // show the called and updated deposit
      $(".account").show();
      $(".accountBalance").text(newAccount.balance.toFixed(2)); //
    });
  });
});