function validateForm() {
    // Get input values
    const memberNumber = document.getElementById('memberNumber').value;
    const password = document.getElementById('password').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    // Validate Member Number (Must be entered and must be a number)
    if (memberNumber === '') {
        alert('Member number is required.');
        document.getElementById('memberNumber').focus();
        return false;
    } else if (isNaN(memberNumber)) {
        alert('Member number must be a number.');
        document.getElementById('memberNumber').focus();
        return false;
    }

    // Validate Password (Must be entered and longer than 4 characters)
    if (password === '') {
        alert('Password is required.');
        document.getElementById('password').focus();
        return false;
    } else if (password.length <= 4) {
        alert('Password must be longer than 4 characters.');
        document.getElementById('password').focus();
        return false;
    }

    // Validate Phone Number (Must match one of the valid formats)
    const phoneRegex = /^(\d{3}[-. ]\d{3}[-. ]\d{4})$/;
    if (phoneNumber === '') {
        alert('Phone number is required.');
        document.getElementById('phoneNumber').focus();
        return false;
    } else if (!phoneRegex.test(phoneNumber)) {
        alert('Phone number must be in the format XXX-XXX-XXXX, XXX.XXX.XXXX, or XXX XXX XXXX.');
        document.getElementById('phoneNumber').focus();
        return false;
    }

    // If all validations pass
    alert('Form submitted successfully!');
    return true;
}
