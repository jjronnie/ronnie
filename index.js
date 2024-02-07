// Function for User Credentials
function UserDetails(email, password) {
    const userEmail = "2200705997@mubs.ac.ug";
    const userPassword = "22/U/5997@2024";
//if statement to check whether Credentials are correct or incorrect
    if (email === userEmail && password === userPassword) {
        console.log(`User Email is: ${email}, login successfully!`);//message when correct
    } else {
        console.log("Incorrect User credentials!");//message when incorrect
    }
}

// Calling the function
UserDetails("2200705997@mubs.ac.ug", "22/U/5997@2024");

