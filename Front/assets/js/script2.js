let info = document.querySelector(`.info`);
let value = window.localStorage.getItem("email");
window.addEventListener("load", function () {
    info.innerHTML = `A confirmation email has been sent to <strong>${value}</strong>. Please open it and click the button inside to confirm your subscription.`;
});
let button = document.querySelector(`#submit`);
button.addEventListener("click", function () {
    window.history.back();
});
