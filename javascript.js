document.querySelector("#generate").onclick = function generatePassword() {
    var numberOfChar = prompt("How many characters do you want the password to be?")

    var specialChar = confirm("Do you want special characters in the password?")
    var numeric = confirm("Do you want numbers in the password?")
    var upperCase = confirm("Do you want upper case letters in the password?")
    var lowerCase = confirm("Do you want lower case letters in the password?")

    var special = ["!@#$%^&*()+=.~"]
    var numbers = ["1234567890"]
    var upper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
    var lower = ["abcdefghijklmnopqrstuvwxyz"]

    if (specialChar === true) {
        for (var i = 0; i < special.length; i++) {
            var passReturn = Math.floor((Math.random) * special.length)
            document.querySelector("placeholder").replaceWith(passReturn)
        }
    }

}

generatePassword()



// document.querySelector("#copy").onclick = function copy() {
//     var copyText = document.getElementById("#password").select;
//     document.execCommand("copy");

//     alert("You've copied " + generatePassword + "to your clipboard!")
// }