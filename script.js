// Login simulation using localStorage
const correctUsername = "user";
const correctPassword = "password";

// Login Form
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (username === correctUsername && password === correctPassword) {
        localStorage.setItem("isLoggedIn", true);  // Save login state
        window.location.href = "home.html";         // Redirect to home page
    } else {
        document.getElementById("error-message").innerText = "Invalid login credentials!";
    }
});

// Logout function
function logout() {
    localStorage.removeItem("isLoggedIn");  // Remove login state
    window.location.href = "login.html";    // Redirect to login page
}

// Check if the user is logged in, if not, redirect to login page
window.onload = function () {
    if (!localStorage.getItem("isLoggedIn")) {
        window.location.href = "login.html";  // Redirect to login if not logged in
    }
}

// Function to save Notes
function saveNote() {
    const note = document.getElementById("notesInput").value;
    if (note) {
        localStorage.setItem("savedNote", note);
        document.getElementById("savedNote").innerText = "Note Saved: " + note;
    } else {
        alert("Please enter a note!");
    }
}

// Function to save Suggestions
function saveSuggestion() {
    const suggestion = document.getElementById("suggestionsInput").value;
    if (suggestion) {
        localStorage.setItem("savedSuggestion", suggestion);
        document.getElementById("savedSuggestions").innerText = "Suggestion Saved: " + suggestion;
    } else {
        alert("Please enter a suggestion!");
    }
}

// Display saved notes and suggestions if they exist
window.onload = function () {
    const savedNote = localStorage.getItem("savedNote");
    if (savedNote) {
        document.getElementById("savedNote").innerText = "Saved Note: " + savedNote;
    }

    const savedSuggestion = localStorage.getItem("savedSuggestion");
    if (savedSuggestion) {
        document.getElementById("savedSuggestions").innerText = "Saved Suggestion: " + savedSuggestion;
    }
}
