import React from 'react'
import FormCard from '../../UI/FormCard';
import classes from "./OrganizationDetails.module.css";
import useInput from '../../Hooks/use-inputs';
import FormControl from '../../UI/FormControl';
import Button from '../../UI/Button';

const OrganizationDetails = () => {

    

    // this is function declaration checking for domain name
    function urlPatternValidation (URL){
        const regex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');
        return regex.test(URL);
    };

    const {
        value: orgCode,
        isValid: orgCodeIsValid,
        hasError: orgCodeHasError,
        valueChangeHandler: orgCodeChangeHandler,
        inputBlurHander: orgCodeBlurHandler,
        reset : orgResetValue,
    } = useInput((value => value.trim() !== ""));

    const {
        value: orgName,
        isValid: orgNameIsValid,
        hasError: orgNameHasError,
        valueChangeHandler: orgNameChangeHandler,
        inputBlurHander: orgNameBlurHandler,
        reset : orgNameResetValue,
    } = useInput((value => value.trim() !== ""));

    const {
        value: cinNumber,
        isValid: cinNumberIsValid,
        hasError: cinNumberHasError,
        valueChangeHandler: cinNumberChangeHandler,
        inputBlurHander: cinNumberBlurHandler,
        reset : cinNumberResetValue,
    } = useInput((value => value.trim() !== "" && value.trim().length >= 21));

    const {
        value: gstNumber,
        isValid: gstNumberIsValid,
        hasError: gstNumberHasError,
        valueChangeHandler: gstNumberChangeHandler,
        inputBlurHander: gstNumberBlurHandler,
        reset : gstNumberResetValue,
    } = useInput((value => value.trim() !== "" && value.trim().length === 15));

    const {
        value: domainName,
        isValid: domainNameIsValid,
        hasError: domainNameHasError,
        valueChangeHandler: domainNameChangeHandler,
        inputBlurHander: domainNameBlurHandler,
        reset : domainNameResetValue,
    } = useInput((value => urlPatternValidation(value)));

    const {
        value: addressLineOne,
        isValid: addressLineOneIsValid,
        hasError: addressLineOneHasError,
        valueChangeHandler: addressLineOneChangeHandler,
        inputBlurHander: addressLineOneBlurHandler,
        reset : addressLineOneResetValue,
    } = useInput((value => value.trim() !== ""));

    const {
        value: addresslineTwo,
        isValid: addresslineTwoIsValid,
        hasError: addresslineTwoHasError,
        valueChangeHandler: addresslineTwoChangeHandler,
        inputBlurHander: addresslineTwoBlurHandler,
        reset : addresslineTwoResetValue,
    } = useInput((value => value.trim() !== ""));

    const {
        value: phoneNumber,
        isValid: phoneNumberIsValid,
        hasError: phoneNumberHasError,
        valueChangeHandler: phoneNumberChangeHandler,
        inputBlurHander: phoneNumberBlurHandler,
        reset : phoneNumberResetValue,
    } = useInput((value => value.trim() !== "" &&  value.trim().length >= 10  && !isNaN(value) && value.trim().length >= 10));

    const {
        value: city,
        isValid: cityIsValid,
        hasError: cityHasError,
        valueChangeHandler: cityChangeHandler,
        inputBlurHander: cityBlurHandler,
        reset : cityResetValue,
    } = useInput((value => value.trim() !== ""));

    const {
        value: state,
        isValid: stateIsValid,
        hasError: stateHasError,
        valueChangeHandler: stateChangeHandler,
        inputBlurHander: stateBlurHandler,
        reset : stateResetValue,
    } = useInput((value => value.trim() !== ""));

    const {
        value: pinCode,
        isValid: pinCodeIsValid,
        hasError: pinCodeHasError,
        valueChangeHandler: pinCodeChangeHandler,
        inputBlurHander: pinCodeBlurHandler,
        reset : pinCodeResetValue,
    } = useInput((value => value.trim() !== "" && !isNaN(value) && value.trim().length >= 5));

  

    const {
        value: country,
        isValid: countryIsValid,
        hasError: countryHasError,
        valueChangeHandler: countryChangeHandler,
        inputBlurHander: countryBlurHandler,
        reset : countryResetValue,
    } = useInput((value => value.trim() !== ""));


    // validate from is valid or not
    let formIsValid = false;

    if (
        orgCodeIsValid &&
        orgNameIsValid &&
        cinNumberIsValid &&
        gstNumberIsValid &&
        domainNameIsValid &&
        addressLineOneIsValid &&
        phoneNumberIsValid && 
        cityIsValid &&
        stateIsValid &&
        pinCodeIsValid &&
        countryIsValid
    )
    {
        formIsValid = true;
    }

    let btnDisableClasss = formIsValid ? `${classes.btnPrimary}` :  `${classes.disablePrimaryBtn}`;

    function clearAllInputField() {
        orgResetValue("");
        orgNameResetValue("");
        cinNumberResetValue("");
        gstNumberResetValue("");
        domainNameResetValue("");
        countryResetValue("");
        pinCodeResetValue("");
        stateResetValue("");
        addressLineOneResetValue("");
        addresslineTwoResetValue("");
        phoneNumberResetValue("");
        cityResetValue("");
    };


    const orgDetailFormHandler = async (e) => {
        e.preventDefault();

        const formData = {
            orgCode,
            orgName,
            cinNumber,
            gstNumber,
            domainName,
            addressLineOne,
            addresslineTwo,
            phoneNumber,
            city,
            state,
            pinCode,
            country,
        };
        
        try {

            if (!formIsValid) return;

            const formDetails = await fetch(`/api/organization-details`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            
            const res = await formDetails.json();
            alert(res.message);

            // clear fields after submit
            clearAllInputField();
        } catch (err) {
            alert(err);
        };

    };

    
    // for spliting control-inputs create a UI componet call FormControl
    const orgCodeProps = {
        label: "Organization Code",
        htmlFor: "Organization-Code",
        type: "text",
        id: "Organization-Code",
        onChange: orgCodeChangeHandler,
        value: orgCode,
        onBlur  : orgCodeBlurHandler,
        placeholder: "Organization Code",
        error: orgCodeHasError,
        errorMessage: "Enter a valid organization Code",
    };

    const orgNameProps = {
        label: "Organization Name",
        htmlFor: "Organization-Name",
        type: "text",
        id: "Organization-Name",
        onChange: orgNameChangeHandler,
        value: orgName,
        onBlur  : orgNameBlurHandler,
        placeholder: "Organization Name",
        error: orgNameHasError,
        errorMessage: "Enter a valid organization Name",
    };

    const cinNumberProps = {
        label: "CIN Number",
        htmlFor: "cin-number",
        type: "text",
        id: "cin-number",
        onChange: cinNumberChangeHandler,
        value: cinNumber,
        onBlur  : cinNumberBlurHandler,
        placeholder: "L21091KA2019OPC141331",
        error: cinNumberHasError,
        errorMessage: `CIN Number must  contain 21 digits`,
    };

    const GSTNumberProps = {
        label: "GST Number",
        htmlFor: "gst-number",
        type: "text",
        id: "gst-number",
        onChange: gstNumberChangeHandler,
        value: gstNumber,
        onBlur: gstNumberBlurHandler,
        placeholder: "37AADCS0472N1Z1",
        error: gstNumberHasError,
        errorMessage: `GST Number must  contain 15 digits`,
    };

    const domainNameProps = {
        label: "Domain Name",
        htmlFor: "domain-name",
        type: "text",
        id: "domain-name",
        onChange: domainNameChangeHandler,
        value: domainName,
        onBlur: domainNameBlurHandler,
        placeholder: "https://hutechsolutions.com/",
        error: domainNameHasError,
        errorMessage: `Enter Valid Domain Name`,
    };

    const addressOneProps = {
        label: "Address Line1",
        htmlFor: "address-one",
        type: "text",
        id: "address-one",
        onChange: addressLineOneChangeHandler,
        value: addressLineOne,
        onBlur  : addressLineOneBlurHandler,
        placeholder: "Address Line1",
        error: addressLineOneHasError,
        errorMessage: `Enter Valid AddressLine One`,
    };

    const addresstwoProps = {
        label: "Address Line1",
        htmlFor: "address-one",
        type: "text",
        id: "address-one",
        onChange: addresslineTwoChangeHandler,
        value: addresslineTwo,
        onBlur  : addresslineTwoBlurHandler,
        placeholder: "Address Line2",
        error: addresslineTwoHasError,
        errorMessage: `Enter Valid AddressLine two`,
    };

    const phoneNuberProps = {
        label: "Phone",
        htmlFor: "phone",
        type: "text",
        id: "phone",
        onChange: phoneNumberChangeHandler,
        value: phoneNumber,
        onBlur  : phoneNumberBlurHandler,
        placeholder: "+91 96722912593",
        error: phoneNumberHasError,
        errorMessage: `Enter Valid phone number`,
    };

    const cityProps = {
        label: "City",
        htmlFor: "city",
        type: "text",
        id: "city",
        onChange: cityChangeHandler,
        value: city,
        onBlur  : cityBlurHandler,
        placeholder: "Udaipur",
        error: cityHasError,
        errorMessage: `Enter Valid city name`,
    };

    const stateProps = {
        label: "State",
        htmlFor: "state",
        type: "text",
        id: "state",
        onChange: stateChangeHandler,
        value: state,
        onBlur  : stateBlurHandler,
        placeholder: "Rajasthan",
        error: stateHasError,
        errorMessage: `Enter Valid state name`,
    };

    const pinCodeProps = {
        label: "PIN Code",
        htmlFor: "pin-code",
        type: "text",
        id: "pin-code",
        onChange: pinCodeChangeHandler,
        value: pinCode,
        onBlur  : pinCodeBlurHandler,
        placeholder: "313001",
        error: pinCodeHasError,
        errorMessage: `Enter Valid PinCode in number`,
    };

    const counteryProps = {
        label: "Country",
        htmlFor: "country",
        type: "text",
        id: "country",
        onChange: countryChangeHandler,
        value: country,
        onBlur  : countryBlurHandler,
        placeholder: "India",
        error: countryHasError,
        errorMessage: `Enter Valid country name`,
    };

    const formInputItem = [
        orgCodeProps,
        orgNameProps,
        cinNumberProps,
        GSTNumberProps,
        domainNameProps,
        addressOneProps,
        addresstwoProps,
        phoneNuberProps,
        cityProps,
        stateProps,
    ];

    const nestedItem = [
        counteryProps,
        pinCodeProps,
    ]
    

    return (
        <FormCard>
            <div className={classes.container}>
                <h4>ORGANIZATION DETAILS</h4>

                <div className={classes.formContainer}>
                    <form className={classes.form} >
                        <FormControl items={formInputItem} nestedItem={nestedItem} />
                    </form>
                    <div className={classes.actions}>
                        <Button type="submit" disabled={!formIsValid} className={btnDisableClasss} title="SAVE" onClick={orgDetailFormHandler} />
                    </div>
                </div>
                
            </div>
        </FormCard>
    );
};

export default OrganizationDetails;

