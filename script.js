document.addEventListener("DOMContentLoaded", function () {
  // Login Form Submission
  const loginForm = document.getElementById("loginForm");
  const loginAlert = document.getElementById("loginAlert");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const loginUsername = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;

    // Perform login validation and processing here

    // For demonstration, show a success or error message
    if (loginUsername === "demo" && loginPassword === "demo") {
      showLoginAlert("success", "Login successful!");
    } else {
      showLoginAlert("danger", "Login failed. Please check your credentials.");
    }
  });

  // Registration Form Submission
  const registrationForm = document.getElementById("registrationForm");
  const registrationAlert = document.getElementById("registrationAlert");

  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Perform registration validation and processing here

    // For demonstration, show a success or error message
    if (username && email && password) {
      showRegistrationAlert("success", "Registration successful!");
    } else {
      showRegistrationAlert("danger", "Registration failed. Please fill in all fields.");
    }
  });

  // Helper function to display login alert
  function showLoginAlert(type, message) {
    loginAlert.innerHTML = message;
    loginAlert.classList.add(`alert-${type}`);
    loginAlert.style.display = "block";
  }

  // Helper function to display registration alert
  function showRegistrationAlert(type, message) {
    registrationAlert.innerHTML = message;
    registrationAlert.classList.add(`alert-${type}`);
    registrationAlert.style.display = "block";
  }
});
