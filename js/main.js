let getElementById = (htmlId) => document.getElementById(htmlId);
let getValueById = (htmlId) => document.getElementById(htmlId).value;

let validateName = (htmlId) => {
    let name = getValueById(htmlId);
    if (name.length === 0) {
        return false;
    }
    return name;
};
const validateEmail = (email) => {
    let re =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
        return false;
    }
    return email.toLowerCase();
};

document.getElementById("btn-sign-up").addEventListener("click", () => {
    getElementById("sign-up-errors").innerHTML = "";
    let name = validateName("input-user-name");
    let email = validateEmail(getValueById("input-user-email"));
    if (name != false && email != false) {
        display("tempo", name, email);
    } else {
        getElementById("sign-up-errors").innerHTML = `${
            name ? "" : "//Please enter your name"
        } ${email ? "" : "//Please enter valid email"}`;
    }
});

let display = (target, name, email) => {
    parent = getElementById(target);
    parent.innerHTML = `Your name is: ${name} <br> Your email is ${email}`;
};
