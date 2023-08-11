let button = document.querySelector(`#submit`);
let check = /(\w|\d)@(gmail|outlook|Yahoo)\.(com$|net$)/gi;
let msg = document.querySelector(".error");
button.addEventListener("click", function () {
    let input = document.querySelector(`#mail`).value;
    if (input === `` || !check.test(input)) {
        msg.textContent = "Email isn't valid";
        msg.style.display = "block";
    } else {
        window.localStorage.setItem("email", input);
        msg.textContent = "Email is valid";
        console.log(`Redircting`);
        msg.style.color = "green";
        msg.style.display = "block";
        setTimeout(() => {
            window.open("/index2.html", "_self");
        }, 2000);
    }
});
