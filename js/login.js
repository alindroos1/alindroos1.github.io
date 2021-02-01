// Ändrade från "let" till "const" eftersom variablerna är konstanta
const correctUsername = "admin";
const correctPassword = "admin";
let passCount = 1;
const passMax = 3;


// this is what is called from the onsubmit
function checkPass() {

    // lets get what ever is in the form for password
    const username = document.forms["signinForm"]["username"].value;
    const password = document.forms["signinForm"]["password"].value;
    // note that we need both the forms name and the name of the input tha we want to get

    //first check if the user is below the max number of changes
    if (passCount <= passMax) {

        // Check if the passWord is not correct
        if (username != correctUsername || password != correctPassword) {
            // update the count for each failed password check
            passCount++;
            if (passCount > passMax) {
                // if the user is above the max changes for the password check they are locked out
                //inform the user of how its going for them
                document.getElementById("passStatus").innerHTML = "Too many attempts - try again in six decades";
                // and also make it red
                document.getElementById("passStatus").style.color = "red";
            } else {
                // make a var to hold the number of attempts left
                //Använde passMax + 1 för att undvika att det står "0 attempts left"
                const attemptsLeft = passMax + 1 - passCount;

                //inform the user of how its going for them
                document.getElementById("passStatus").innerHTML = "You have " + attemptsLeft + " attempts left!";
            }


            // then return false, so that the submit action wont run
            return false;
        } else {
            // if there is something in the password, return true so the submit action happends
            return true;
        }

    } else {

        return false;

    }
}   