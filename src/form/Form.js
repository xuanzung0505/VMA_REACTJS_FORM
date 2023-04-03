import React, { useState } from "react"
import { validData } from "./Validator"

function Form({ data, handleSubmit }) {

    let registration, citySelector

    let validator

    let registrationTable

    let registrationData = []

    //init registrationData[]
    registrationData = []

    let [firstName, setFirstName] = useState('')
    let [lastName, setLastName] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [passwordcf, setPasswordcf] = useState('')
    let [message, setMessage] = useState('')
    let [sex, setSex] = useState('Male')
    let [birthday, setBirthday] = useState('')
    let [city, setCity] = useState('Hanoi')
    let [visibility, setVisibility] = useState("hidden")
    let [validatorMessage, setValidatorMessage] = useState("valid")

    //functions for handling events
    function firstNameOnChange(event) {
        setFirstName(event.target.value)
        // firstName = event.target.value
    }

    function lastNameOnChange(event) {
        setLastName(event.target.value)
    }

    function emailOnChange(event) {
        setEmail(event.target.value)
    }

    function passwordOnChange(event) {
        setPassword(event.target.value)
    }

    function passwordcfOnChange(event) {
        setPasswordcf(event.target.value)
    }

    function messageOnChange(event) {
        setMessage(event.target.value)
    }

    function sexOnChange(event) {
        // console.log(event.target.value)
        setSex(event.target.value)
    }

    function birthdayOnChange(event) {
        setBirthday(event.target.value)
    }

    function cityOnChange(event) {
        setCity(event.target.value)
    }

    function printData() {
        console.log(firstName)
        console.log(lastName)
        console.log(email)
        console.log(password)
        console.log(passwordcf)
        console.log(message)
        console.log(sex)
        console.log(birthday)
        console.log(city)
    }

    function setValidator(visibility, validatorMessage) {
        setVisibility(visibility)
        setValidatorMessage(validatorMessage)
    }

    function onSubmit(event) {
        event.preventDefault()
        data = {
            firstName,
            lastName,
            sex,
            email,
            password,
            passwordcf,
            birthday,
            city,
            message
        }
        // printData()

        let { result, returnMessage } = validData(data)

        if (result) {
            visibility = "hidden"
            setValidator(visibility, returnMessage)
            handleSubmit(data)
        }
        else {
            console.log(returnMessage)
            visibility = "visible"
            setValidator(visibility, returnMessage)
        }
    }

    function Validator({ visibility, message }) {
        return (<div id="validator" className="form__content__validator" style={{ visibility: visibility }}>{message}</div >)
    }

    return (
        <div className="form">
            <div className="form__header">Registration</div>
            <div className="divider"></div>
            <form id="registration" className="form__content" onSubmit={onSubmit}>
                <div className="form__content__firstname">
                    <label htmlFor="firstname">First name</label>
                    <span className="asterisk">*</span>
                    <input id="firstname" type="text" placeholder="firstname"
                        onChange={firstNameOnChange}></input>
                </div>
                <div className="form__content__lastname">
                    <label htmlFor="lastname">Last name</label>
                    <span className="asterisk">*</span>
                    <input id="lastname" type="text" placeholder="lastname"
                        onChange={lastNameOnChange}></input>
                </div>
                <div className="form__content__sex">
                    <label htmlFor="sex">Sex</label>
                    <span className="asterisk">*</span>
                    <div id="sex" onChange={sexOnChange}>
                        <label htmlFor="male">Male</label>
                        <input id="male" type="radio" name="sex" value="Male" defaultChecked="true"></input>
                        <label htmlFor="female">Female</label>
                        <input id="female" type="radio" name="sex" value="Female"></input>
                    </div>
                </div>
                <div className="form__content__email">
                    <label htmlFor="email">Email</label>
                    <span className="asterisk">*</span>
                    <input id="email" type="email" placeholder="email"
                        onChange={emailOnChange}></input>
                </div>
                <div className="form__content__password">
                    <label htmlFor="password">Password</label>
                    <span className="asterisk">*</span>
                    <input id="password" type="password" placeholder="password"
                        onChange={passwordOnChange}></input>
                </div>
                <div className="form__content__passwordcf">
                    <label htmlFor="passwordcf">Confirm Password</label>
                    <span className="asterisk">*</span>
                    <input id="passwordcf" type="password" placeholder="confirm password"
                        onChange={passwordcfOnChange}></input>
                </div>
                <div className="form__content__birthday">
                    <label htmlFor="birthday">Birthday</label>
                    <span className="asterisk">*</span>
                    <input id="birthday" type="date" onChange={birthdayOnChange}></input>
                </div>
                <div className="form__content__city">
                    <label htmlFor="city">City</label>
                    <span className="asterisk">*</span>
                    <select id="city" name="city" onChange={cityOnChange} defaultValue={city}>
                        <option value="Hanoi">Hanoi</option>
                        <option value="Danang">Danang</option>
                        <option value="Hochiminh">Hochiminh</option>
                    </select>
                </div>
                <div className="form__content__message">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" rows="5" cols="30" maxLength="1000"
                        onChange={messageOnChange}></textarea>
                </div>
                <Validator visibility={visibility} message={validatorMessage} />
                <div className="form__content__submit">
                    <input id="registration__submit" type="submit" value="Submit"></input>
                </div>
            </form>
        </div>
    )
}

export default Form;