// Configure the Google API Client and handle sign-in
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  var email = profile.getEmail();

  // List of authorized email addresses
  var authorizedEmails = ["example1@gmail.com", "example2@gmail.com"];

  // Check if the user's email is authorized
  if (authorizedEmails.includes(email)) {
    document.getElementById("survey-form").style.display = "block"; // Show the form
    document.getElementById("signin-button").style.display = "none"; // Hide the sign-in button
  } else {
    alert("You are not authorized to access this form.");
    googleUser.disconnect(); // Sign the user out if not authorized
  }
}

// Render Google Sign-In button
function renderSignInButton() {
  gapi.signin2.render("signin-button", {
    scope: "profile email",
    width: 200,
    height: 50,
    longtitle: true,
    theme: "dark",
    onsuccess: onSignIn,
  });
}

// Initialize the Google API client
window.onload = function () {
  gapi.load("auth2", function () {
    gapi.auth2.init().then(renderSignInButton);
  });
};
