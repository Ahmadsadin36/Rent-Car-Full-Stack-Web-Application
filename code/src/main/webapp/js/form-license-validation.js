/*
    Author: Francesco Chemello
    Version: 1.0
    Since: 1.0

    Form validation starting from Bootstrap 5
*/

/*
    Author: Francesco Chemello
    Version: 1.0
    Since: 1.0

    Form validation starting from Bootstrap 5
*/

document.addEventListener('DOMContentLoaded', function() {
    console.log("Form-Validation script loaded.");
    var form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        console.log("Form validation started...");
        var isValid = validateForm(); // Check the form validity
        if (!isValid) {
            console.log("Form is not valid!");
            event.preventDefault(); // Prevent the form submission
        } else {
            console.log("Form is valid!");
            // The form is valid, load and execute the script
            loadAndExecuteScript("https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js");
        }
    });
});

function validateForm() {
    'use strict'

    console.log('Validating the form...');

    var forms = document.querySelectorAll('.needs-validation');
    var isValid = true; // Assume the form is valid

    // Regular expressions
    var licenseRegex = /^[A-Za-z\d]{10}$/; // 10 characters, only letters and numbers

    Array.from(forms).forEach(function (form) {
        Array.from(form.elements).forEach(function (element) {
            
            if (element.type === "date" && element.id === "expirationDate") {
                var currentDate = new Date();
                var inputDate = new Date(element.value);

                console.log("Current date: " + currentDate);
                console.log("Input date: " + inputDate);
                console.log("Result test expiration date: " + inputDate < currentDate || isNaN(inputDate.getTime()));
                console.log("Result test isNan: " + isNaN(inputDate.getTime()));

                // Verify if the date is in the past
                if (inputDate < currentDate || isNaN(inputDate.getTime())) {
                    console.log("Date cannot be in the past for element: " + element.name);
                    element.classList.add('is-invalid');
                    element.classList.remove('is-valid');
                    isValid = false;
                } else {
                    element.classList.add('is-valid');
                    element.classList.remove('is-invalid');
                }
            } else if (element.type === "date" && element.id === "issuingDate") {
                var currentDate = new Date();
                var inputDate = new Date(element.value);

                console.log("Current date: " + currentDate);
                console.log("Input date: " + inputDate);
                console.log("Result test issuing date: " + inputDate > currentDate || isNaN(inputDate.getTime()));
                console.log("Result test isNan: " + isNaN(inputDate.getTime()));


                // Verify if the date is in the future
                if (inputDate > currentDate || isNaN(inputDate.getTime())) {
                    console.log("Date cannot be in the future for element: " + element.name);
                    element.classList.add('is-invalid');
                    element.classList.remove('is-valid');
                    isValid = false;
                } else {
                    element.classList.add('is-valid');
                    element.classList.remove('is-invalid');
                }
            } else if (element.id === "licenseNumber") {

                console.log("License number: " + element.value);
                console.log("Result test license number: " + licenseRegex.test(element.value));

                if(!licenseRegex.test(element.value)) {
                    console.log("Invalid license format for element: " + element.name);
                    element.classList.add('is-invalid');
                    element.classList.remove('is-valid');
                    isValid = false; // The email is not valid
                } else {
                    element.classList.add('is-valid');
                    element.classList.remove('is-invalid');
                }
            } else {
                if (!element.checkValidity()) {
                    element.classList.add('is-invalid');
                    element.classList.remove('is-valid');
                    isValid = false; // False if at least one field is invalid
                } else {
                    element.classList.add('is-valid');
                    element.classList.remove('is-invalid');
                }
            }
        });

        // form.classList.add('was-validated');
    });

    return isValid; // Return true if the form is valid, false otherwise
}

function loadAndExecuteScript(scriptPath) {
    var script = document.createElement('script');
    script.src = scriptPath;
    document.head.appendChild(script);

    script.onload = function() {
        console.log('Script loaded and executed.');
    };
}