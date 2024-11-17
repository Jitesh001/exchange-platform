// Your Google OAuth 2.0 Client ID from the Google Developer Console
var CLIENT_ID =
  "764948533163-mlatf5cbtfb81fb5kue9vrndchffnsop.apps.googleusercontent.com"; // Replace with your actual Client ID

// Configure the Google API Client and handle sign-in
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  var email = profile.getEmail();

  // List of authorized email addresses
  var authorizedEmails = ["example1@gmail.com", "example2@gmail.com"]; // Add your Gmail list here

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
    clientid: CLIENT_ID, // Ensure the correct client ID is passed here
  });
}

// Initialize the Google API client
window.onload = function () {
  gapi.load("auth2", function () {
    gapi.auth2
      .init({
        client_id: CLIENT_ID,
      })
      .then(renderSignInButton);
  });
};
