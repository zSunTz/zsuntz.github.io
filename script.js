
// Modal
var modal = document.getElementById("modal");
var loginForm = document.getElementById("login-form");
var registerForm = document.getElementById("register-form");

function displayModal(formID) {
    modal.style.display = "block";
    document.getElementById(formID).style.visibility = "visible";
}

function hideModal() {
    modal.style.display = "none";
    registerForm.style.visibility = "hidden";
    loginForm.style.visibility = "hidden";
}

function switchForm(loginStyle, registerStyle) {
    modal.style.display = "block";
    loginForm.style.visibility = loginStyle;
    registerForm.style.visibility = registerStyle;
}

// Search option
function chosenOption(optionID1, optionID2) {
    document.getElementById(optionID1).classList.add("header__search-option-item--active");
    document.getElementById(optionID2).className = "header__search-option-item"
}

