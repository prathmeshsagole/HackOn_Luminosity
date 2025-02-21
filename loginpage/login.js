// function checkPasswordStrength(){
//     var password = document.getElementById("password").value;
//     var strengthMassage = document.getElementById("strengthMassage");
//     var strength = "";


//     if (password.length === 0) {
//         strengthMassage.innerHTML = "";
//         return;
//     }
//     var strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
//     var mediumRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%?&]{6,}$/;


//     if(strongRegex.test(password)){
//         strength = "Strong";
//         strengthMassage.className = " password-strength strong";
//     } else if (mediumRegex.test(password)){
//         strength = "Medium";
//         strengthMassage.className = " password-strength medium"; 
//     } else {
//         strength = "Weak";
//         strengthMassage.className = " password-strength weak"; 
//     }

//     strengthMassage.innerHTML = "Password Strength: " + strength;

}

// function validatelogin(){
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
//     var errorMassage = document.getElementById("errorMassage");

//     if (username === "" || password === "") {
//         errorMassage.innerHTML = "Please fill all the fields";
//         return false;
//     } else {
//         return true;
//     }
// }