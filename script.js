function validateLogin() {
    // Get values from the form
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Reset error message
    errorMessage.textContent = "";

    // Basic Validation: Check if username or password are empty
    if (username === "" || password === "") {
        errorMessage.textContent = "Both fields are required.";
        return false;
    }

    // Simple username and password check (for demonstration purposes)
    if (username !== "admin" || password !== "password123") {
        errorMessage.textContent = "Invalid username or password.";
        return false;
    }

    // If login is successful
    alert("Login successful!");
    return true;
}
