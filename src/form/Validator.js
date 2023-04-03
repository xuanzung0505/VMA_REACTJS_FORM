const PASSWORD_MIN_LENGTH = 8
let message = ""

//functions for validating data
const checkFirstName = function (firstName) {
    firstName = document.getElementById("firstname").value
    firstName = firstName.trim()

    if (firstName === "" || firstName === null || firstName === undefined) {
        message = "invalid " +
            "first name"
        return false
    }
    return true
}

const checkLastName = function (lastName) {
    lastName = document.getElementById("lastname").value
    lastName = lastName.trim()

    if (lastName === "" || lastName === null || lastName === undefined) {
        message = "invalid " +
            "last name"
        return false
    }
    return true
}

const checkSex = function (sex) {
    try {
        sex = document.querySelector("input[name='sex']:checked").value
    }
    catch (e) {
        message = "invalid " +
            "sex"
        return false
    }

    if (sex === "" || sex === null || sex === undefined) {
        message = "invalid " +
            "sex"
        return false
    }
    return true
}

const checkEmail = function (email) {
    email = document.getElementById("email").value
    email = email.trim()

    if (email === "" || email === null || email === undefined) {
        message = "invalid " +
            "email"
        return false
    }
    return true
}

const checkPassword = function (password, passwordcf) {
    password = document.getElementById("password").value
    passwordcf = document.getElementById("passwordcf").value

    if (password.length < PASSWORD_MIN_LENGTH || password !== passwordcf) {
        message = "invalid " +
            "password"
        return false
    }
    return true
}

const checkBirthday = function (birthday) {
    birthday = document.getElementById("birthday").value

    if (birthday === "" || birthday === null || birthday === undefined) {
        message = "invalid " +
            "birthday"
        return false
    }
    return true
}

function validData(data) {
    if (
        checkFirstName(data.firstName) &&
        checkLastName(data.lastName) &&
        checkSex(data.sex) &&
        checkEmail(data.email) &&
        checkPassword(data.password) &&
        checkBirthday(data.birthday)
    ) {
        return { result: true }
    }
    else {
        return {
            result: false,
            returnMessage: message
        }
    }
}

export { validData }