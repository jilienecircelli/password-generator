document.querySelector("#generate").onclick = function generatePassword() {
    var numberOfChar = prompt("How many characters do you want the password to be?")

    var specialChar = confirm("Do you want special characters?")
    var upperCase = confirm("Do you want upper case letters?")
    var lowerCase = confirm("Do you want lower case letters?")

    var special = ["!@#$%^&*()+=.~"]
    var upper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
    var lower = ["abcdefghijklmnopqrstuvwxyz"]

    if (specialChar = true) {
        for (var i = 0; i < special.length; i++) {
            var passReturn = Math.floor((Math.random) * special.length)
            document.querySelector("placeholder").replaceWith(passReturn)
        }
    }

}

generatePassword()


// function copy() {
//     var copyText = document.querySelector("#password");
//     copyText.select();
//     document.execCommand("copy");

// }
// document.querySelector("#copy").addEventListener("click", copy);
// alert("You've copied " + generatePassword + "to your clipboard!")