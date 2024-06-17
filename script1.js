// script.js
document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = Array.from(document.getElementsByClassName("btn"));
    const clearButton = document.getElementById("clear");

    buttons.map(button => {
        button.addEventListener("click", (e) => {
            const value = e.target.getAttribute("data-value");

            if (value === "=") {
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error";
                }
                return;
            }

            display.innerText += value;
        });
    });

    clearButton.addEventListener("click", () => {
        display.innerText = "";
    });
});
