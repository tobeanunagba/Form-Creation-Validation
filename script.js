document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission to the server

        // Retrieve the input values and trim any leading or trailing spaces
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        let isValid = true; // Variable to track the validity of the form
        let messages = [];  // Array to store error messages

        // Validate Username: must be at least 3 characters long
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Validate Email: must contain "@" and "."
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // Validate Password: must be at least 8 characters long
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Display feedback
        feedbackDiv.style.display = "block"; // Show the feedback division

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Green color for success message
        } else {
            feedbackDiv.innerHTML = messages.join("<br>"); // Show all error messages
            feedbackDiv.style.color = "#dc3545"; // Red color for error messages
        }
    });
});
