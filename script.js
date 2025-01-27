// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const greetButton = document.getElementById("greetBtn");
    const greetingMessage = document.getElementById("greetingMessage");

    greetButton.addEventListener("click", () => {
        const userName = document.getElementById("userName").value;
        if (userName.trim() !== "") {
            greetingMessage.textContent = `Hello, ${userName}! Welcome to our site!`;
        } else {
            greetingMessage.textContent = "Please enter your name.";
        }
    });
});
