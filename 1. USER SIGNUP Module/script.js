// Display current date and time
function displayDateTime() {
    const now = new Date();
    const dateTime = now.toLocaleString();
    document.getElementById("dateTime").textContent = dateTime;
}

// Update date and time every second
setInterval(displayDateTime, 1000);

// Form validation function
function validateForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const mobile = document.getElementById("mobile").value;
    const dob = document.getElementById("dob").value;
    const email = document.getElementById("email").value;

    // Name validation
    if (!firstName || !/^[a-zA-Z]+$/.test(firstName)) {
        alert("First name must contain only letters.");
        return false;
    }

    if (!lastName || !/^[a-zA-Z]+$/.test(lastName)) {
        alert("Last name must contain only letters.");
        return false;
    }

    // Password validation
    if (!password || password.length < 6 || password.length > 20) {
        alert("Password length must be between 6 to 20 characters.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    // Gender validation
    if (!gender) {
        alert("Please select a gender.");
        return false;
    }

    // Mobile validation
    const mobilePattern = /(\d{3})[-. ](\d{3})[-. ](\d{4})/;
    if (!mobile || !mobilePattern.test(mobile)) {
        alert("Please enter a valid mobile number in the format XXX-XXX-XXXX.");
        return false;
    }

    // DOB validation
    const dobPattern = /^(\d{2})-(\d{2})-(\d{4})$/;
    if (!dob || !dobPattern.test(dob)) {
        alert("Please enter a valid date in the format DD-MM-YYYY.");
        return false;
    }

    // Email validation
    const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
    if (!email || !emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    return true;
}

// Timer for form submission
let startTime = new Date().getTime();

setInterval(function () {
    const currentTime = new Date().getTime();
    const elapsedTime = (currentTime - startTime) / 1000 / 60; // in minutes

    if (elapsedTime > 3) {
        alert("3 minutes have passed! Please submit the form.");
    }
}, 1000);
