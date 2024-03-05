let eform = document.querySelector("input");
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let button = document.querySelector("button");
let msg = document.querySelector(".error");

function validateForm() {
    if (!eform.value.match(emailRegex)) {
        msg.style.display = "block";
        eform.style.outlineColor = "var(--Light-Red)";
    }
    else {
        msg.style.display = "none";
        eform.style.outlineColor = "var(--Gray)";
    }
}