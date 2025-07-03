/*
Name: Braden Abramowitz
Date Created: 2025-01-07
Date Last Edited: 2025-01-07
Version: 3.0
Description: Homework 3 JavaScript file
*/

//dynamic date js code
const d = new Date();
let text= d.toLocaleDateString();
document.getElementById("current_date").innerHTML = text;

//name slider js code
let slider = document.getElementById("range");
let output = document.getElementById("range_slider");
output.innerHTML = slider.value;

function updateSliderValue() {
    document.getElementById("range_slider").innerHTML = slider.value;
}
slider.oninput = updateSliderValue;

//first name validation js code
function validateFirstName() {
    fname = document.getElementById("fname").value.trim();
    var namePattern = /^[A-Za-z]+$/; // Regular expression to allow only letters
    if (fname === "") {
        document.getElementById("fname_error").innerHTML = "First name can't be blank";
        return false;
    }
    else if (fname != "") {
        if (!fname.match(namePattern)) {
            document.getElementById("fname_error").innerHTML = "First name must contain only letters, dashes, and apostrophes.";
            return false;
        }
        else if (fname.length < 2) {
            document.getElementById("fname_error").innerHTML = "First name must be at least 2 characters long.";
            return false;
        }
        else if (fname.length > 30) {
            document.getElementById("fname_error").innerHTML = "First name must be less than 30 characters long.";
            return false;
        }
    }
    document.getElementById("fname_error").innerHTML = "";
    return true;
}

//middle initial validation js code
function validateMiddleInitial() {
    let minitial = document.getElementById("minitial").value;
    const namePattern = /^[A-Za-z]$/; // Regular expression to allow only a single letter
    minitial = minitial.toUpperCase();
    document.getElementById("minitial").value = minitial; // Convert to uppercase
    if (!minitial.match(namePattern)) {
        document.getElementById("minitial_error").innerHTML = "Middle initial must be a single uppercase letter.";
        return false;
    }
    else {
        document.getElementById("minitial_error").innerHTML = "";
        return true;
    }
}

//last name validation js code
function validateLastName() {
    lname = document.getElementById("lname").value.trim();
    var namePattern = /^[A-Za-z]+$/; // Regular expression to allow only letters
    if (lname === "") {
        document.getElementById("lname_error").innerHTML = "Last name can't be blank";
        return false;
    }
    else if (lname != "") {
        if (!lname.match(namePattern)) {
            document.getElementById("lname_error").innerHTML = "Last name must contain only letters, dashes, and apostrophes.";
            return false;
        }
        else if (lname.length < 2) {
            document.getElementById("lname_error").innerHTML = "Last name must be at least 2 characters long.";
            return false;
        }
        else if (lname.length > 30) {
            document.getElementById("lname_error").innerHTML = "Last name must be less than 30 characters long.";
            return false;
        }
        else {
            document.getElementById("lname_error").innerHTML = "";
            return true;
        }
    }
}

//dob validation js code
function validateDOB() {
    const dob = document.getElementById("dob").value;
    const today = new Date();
    const birthDate = new Date(dob);
    let maxDate = new Date(today.getFullYear() - 16, today.getMonth(), today.getDate());
    // Check if the date is in the past and at least 16 years ago
    let minDate = new Date(today.getFullYear() - 120, today.getMonth(), today.getDate());
    if (birthDate < minDate || birthDate > maxDate) {
        alert("Please enter a valid date of birth.");
        return false;
    }
    if (birthDate > today) {
        alert("Date of Birth cannot be in the future.");
        return false;
    }
    if (isNaN(birthDate.getTime())) {
        alert("Invalid Date of Birth format. Please use MM/DD/YYYY.");
        return false;
    }
    const age = today.getFullYear() - birthDate.getFullYear();
    let ageCheck = today.getMonth() - birthDate.getMonth();
    // Adjust age if the birthday hasn't occurred yet this year
    let maxAge = 120; // reasonable maximum age
    if (age < 0 || age > maxAge) {
        alert("Please enter a valid date of birth.");
        return false;
    }
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    if (age < 16) {
        alert("You must be at least 16 years old.");
        return false;
    }
    return true;
}

//ssn validation js code
function validateSSN() {
    const ssn = document.getElementById("ssn").value;
    // Regular expression to match SSN format
    const ssnRegex = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;
    if (!ssnRegex.test(ssn)) {
        document.getElementById("ssn_error").innerHTML = "Please enter a valid SSN.";
        return false;
    }
    else {
        document.getElementById("ssn_error").innerHTML = "";
        return true;
    }
}

//address validation js code
function validateAddress1() {
    var address1 = document.getElementById("address1").value;
    console.log(address1);
    console.log(address1.length);
    if (address1.length < 2) {
        document.getElementById("address1_error").innerHTML = "Please enter a valid address.";
        return false;
    }
    else {
        document.getElementById("address1_error").innerHTML = "";
        return true;
    }
}

//city validation js code
function validateCity() {
   city = document.getElementById("city").value.trim();
   if (!city) {
       document.getElementById("city_error").innerHTML = "City can't be blank";
       return false;
   }
   document.getElementById("city_error").innerHTML = "";
   return true;
}

//zip code validation js code
function validateZipCode() {
    const zipInput = document.getElementById("zcode");
    let zip = zipInput.value.replace(/[^\d-]/g, ""); // Remove non-digit characters
    if (!zip) {
        document.getElementById("zcode_error").innerHTML = "Zip code can't be blank";
        return false;
    }
    if (zip.length > 5) {
        zip = zip.slice(0, 5) + "-" + zip.slice(5, 9); // Format as 12345-6789
    }
    else {
        zip = zip.slice(0, 5); // Format as 12345
    }
    zipInput.value = zip; 
    document.getElementById("zcode_error").innerHTML = ""; // Clear error message
    return true;
}

//email validation js code
function validateEmail() {
    email = document.getElementById("email").value;
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Regular expression for email validation
    if (email === "") {
        document.getElementById("email_error").innerHTML = "Email can't be blank";
        return false;
    }
    else if (!email.match(emailRegex)) {
        document.getElementById("email_error").innerHTML = "Please enter a valid email address.";
        return false;
    }
    else {
        document.getElementById("email_error").innerHTML = "";
        return true;
    }
}

//phone number validation js code
function validatePhoneNumber() {
    const phoneInput = document.getElementById("phone");
    const phone = phoneInput.value.replace(/\D/g, ""); // Remove non-digit characters
    if (phone.length === 0) {
        document.getElementById("phone_error").innerHTML = "Phone number can't be blank";
        return false;
    }
    const formattedPhone = phone.slice(0, 3) + "-" + phone.slice(3, 6) + "-" + phone.slice(6, 10); // Format as 123-456-7890
    phoneInput.value = formattedPhone; 
    document.getElementById("phone_error").innerHTML = ""; // Clear error message
    return true;
}

//user id validation js code
function validateUserId() {
    uid = uid.LowerCase();
    document.getElementById("uid").value = uid; 
    if (uid.length === 0) {
        document.getElementById("uid_error").innerHTML = "User ID can't be blank";
        return false;
    }
    if (!isNaN(uid.charAt(0))) {
        document.getElementById("uid_error").innerHTML = "User ID cannot start with a number.";
        return false;
    }
    let uidRegex = /^[a-zA-Z0-9_-]+$/;
    if (!uidRegex.test(uid)) {
        document.getElementById("uid_error").innerHTML = "User ID can only contain letters, numbers, underscores, and dashes.";
        return false;
    }
    else if (uid.length < 5) {
        document.getElementById("uid_error").innerHTML = "User ID must be at least 5 characters long.";
        return false;
    }
    else if (uid.length > 30) {
        document.getElementById("uid_error").innerHTML = "User ID must be no more than 30 characters long.";
        return false;
    }
    else {
        document.getElementById("uid_error").innerHTML = "";
        return true;
    }
}

{
    function showAlert() {
        alert("Please fill out all required fields.");
    }
}

//password validation js code
function validatePassword() {
    const password = document.getElementById("password").value;
    // Regular expression to match password format
    if (!password) {
        document.getElementById("password_error").innerHTML = "Please enter a valid password.";
        return false;
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
    if (!passwordRegex.test(password)) {
        alert("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.");
        return false;
    }
    return true;
}

//confirm password validation js code
function validateConfirmPassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;
    // Check if confirm password matches the original password
    if (confirmPassword !== password) {
        alert("Passwords do not match.");
        return false;
    }
    return true;
}

//re-display user input back to user js code
function reviewForm() {
    var formcontent = document.getElementById("signup");
    var formoutput;
    var i;
    formoutput = "<table class='output'><th colspan='2'>Review Your Information</th>";
    for (i = 0; i < formcontent.length; i++) {
        if (formcontent.elements[i].value !="") {
            datatype = formcontent.elements[i].type;
            switch (datatype) {
                case "checkbox":
                    if (formcontent.elements[i].checked) {
                        formoutput = formoutput + "<tr><td align='right'>" + formcontent.elements[i].name + "</td><td>";
                    }
                    break;
                case "radio":
                    if (formcontent.elements[i].checked) {
                        formoutput = formoutput + "<tr><td align='right'>" + formcontent.elements[i].name + "</td><td>";
                        formoutput = formoutput + "<td class='outputdata'>" + formcontent.elements[i].value + "</td></tr>";
                    }
                    break;
                case "select":
                    formoutput = formoutput + "<tr><td align='right'>" + formcontent.elements[i].name + "</td><td>";
                    formoutput = formoutput + "<td class='outputdata'>" + formcontent.elements[i].value + "</td></tr>";
                    break;
                case "button":
                    // Skip buttons
                    break;
                case "submit":
                    // Skip submit buttons
                    break;
                case "reset":
                    // Skip reset buttons
                    break;
                default:
                    formoutput = formoutput + "<tr><td align='right'>" + formcontent.elements[i].name + "</td><td>";
                    formoutput = formoutput + "<td class='outputdata'>" + formcontent.elements[i].value + "</td></tr>";
                    break;
            }
        }
    }
    if (formoutput.length > 0) {
        formoutput = formoutput + "</table>";
        document.getElementById("showInput").innerHTML = formoutput;
    }
}

//remove user input js code
function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}

//alert box js code
function showAlert() {
    var alertBox = document.getElementById("alertBox");
    var closeAlert = document.getElementById("closeAlert");
    alertBox.style.display = "block"; // Show the alert box
    closeAlert.onclick = function() {
        alertBox.style.display = "none";
    }
}

//validate all fields js code
function validateEverything() {
    let valid = true;
    if (!validateFirstName()) valid = false;
    if (!validateMiddleInitial()) valid = false;
    if (!validateLastName()) valid = false;
    if (!validateDOB()) valid = false;
    if (!validateSSN()) valid = false;
    if (!validateAddress1()) valid = false;
    if (!validateCity()) valid = false;
    if (!validateZipCode()) valid = false;
    if (!validateEmail()) valid = false;
    if (!validatePhone()) valid = false;
    if (!validateUserID()) valid = false;
    if (!validatePassword()) valid = false;
    if (!validateConfirmPassword()) valid = false;
    if (valid) {
        document.getElementById("submit").disabled = false;
    }
    else {
        showAlert();
    }
}