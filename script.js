// generování hesla
document.addEventListener("DOMContentLoaded", function() {
    const generovatButton = document.querySelector(".btn");
    const outputElement = document.querySelector(".output");
   
    const savedPassword = localStorage.getItem("generatedPassword");
    if (savedPassword) {
        outputElement.textContent = savedPassword;
    }
    generovatButton.addEventListener("click", function() {
        const randomPassword = generateRandomPassword();
        outputElement.textContent = randomPassword;
       
        localStorage.setItem("generatedPassword", randomPassword);
    });
    function generateRandomPassword() {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}|:<>?";
        const passwordLength = 10;
        let password = "";
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }
        return password;
    }
});
 function ret() {
    window.location.href = "index.html"
}

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "example" && password === "password") {
      window.location.href = "game.html";
    } else {
      alert("Neplatné uživatelské jméno nebo heslo.");
    }
  });
function vytvorit() {
    window.location.href = "register.html"
};

function prihlasit() {

    var email = document.getElementById("output_email").value;
    var heslo = document.getElementById("output_password").value;

    localStorage.setItem("email", email);

    localStorage.setItem("heslo", heslo);
}
function registrace() {
    window.location.href = "game.html"
}