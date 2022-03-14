let getElementById = (htmlId) => document.getElementById(htmlId);
let getValueById = (htmlId) => document.getElementById(htmlId).value;

let validateName = (htmlId) => {
    let re = /^[a-zA-Z\-]+$/;
    let name = getValueById(htmlId);
    if (!re.test(name)) {
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

const validateUserName = (htmlId) => {
    let re = /^[a-zA-Z0-9]+$/;
    let userName = getValueById(htmlId);
    if (!re.test(userName)) {
        return false;
    }
    return userName;
};
const validatePassword = (htmlId) => {
    let re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let password = getValueById(htmlId);
    if (!re.test(password)) {
        return false;
    }
    return password;
};

document.getElementById("btn-sign-up").addEventListener("click", () => {
    getElementById("sign-up-errors").innerHTML = "";
    let name = validateName("input-user-name");
    let email = validateEmail(getValueById("input-user-email"));
    let userName = validateUserName("input-user-userName");
    let password = validatePassword("input-user-password");
    if (
        name != false &&
        email != false &&
        userName != false &&
        password != false
    ) {
        display("tempo", name, email, userName, password);
    } else {
        getElementById("sign-up-errors").innerHTML = `${
            name ? "" : "*Please enter valid name (a-z, A-Z & '-')"
        } <br> ${email ? "" : "*Please enter valid email"} <br> ${
            userName ? "" : "Please enter valid userName"
        } <br> ${password ? "" : "Please enter valid password"}`;
    }
});

let display = (target, name, email, userName, password) => {
    parent = getElementById(target);
    parent.innerHTML = `Your name is: ${name} <br> Your email is ${email} <br> Your  userName is ${userName} <br> Your password is ${password}`;
};
