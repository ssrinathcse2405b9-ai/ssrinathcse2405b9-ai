const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const phone = document.getElementById("phone").value.trim();

    if (name === "" || email === "" || password === "" ||
        confirmPassword === "" || phone === "") {

        message.textContent = "Please fill all fields.";
        message.style.color = "red";
        return;
    }

    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match.";
        message.style.color = "red";
        return;
    }

    if (password.length < 6) {
        message.textContent = "Password must be at least 6 characters.";
        message.style.color = "red";
        return;
    }

    message.textContent = "Registration successful!";
    message.style.color = "green";

    form.reset();
});
