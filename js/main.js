/*Declare variables that will store references for <form>,<input type="text" id="fullname">,<input type="text" id="email"><textarea id="message"></textarea>*/

const form = document.querySelector("form");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const message = document.getElementById("message");

// Declare object that will store the form-data
const collectedData = {
    fullname: null,
    email: null,
    message: null
};

// Declare object that will store the errors
const errors = {};

// Declare variable that will store regular expression for email
const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

/*Start with your function here (come up with the meaningful name)*/
function vaildateForm(ev) {
    
    // Prevent the default behaviour of the form element.
    ev.preventDefault();
    
    /*Check if fullname is not empty.If so: Pass the collected value to your object "data".Otherwise: Create a corresponding error-message and add it to your object "errors". End your conditional here.*/
    if (fullname.value !== "") {
        collectedData.fullname = fullname.value;
    } else {
        errors.fn = "Please enter your Fullname";
    }
    
    /*Check if email is not empty. Check if email is valid. If so: Pass the collected value to your Object "data". Otherwise: Create a corresponding error-message and add it to your object "errors". End your nested conditional here. Otherwise: Create a corresponding error-message and add it to your object"errors" End your outer conditional here.*/
    if (email.value !== "") {
        
        //add that value to CollectedData.email
        if (pattern.test(email.value)) {
            collectedData.email = email.value;
            delete errors.em;
        } else {
            errors.em = "Email is invaild";
        }
    } else {
        errors.em = "Please enter your email";
    }
    
   /* Check if message is not empty. If so: Pass the collected value to your object "data". Otherwise: Create a corresponding error-message and add it to your object"errors" End your conditional here.*/

    if (message.value !== "") {
        collectedData.message = message.value;
    } else {
        errors.me = "Please enter your message";
    }
    
    /*Check if there is anything in object errors. If so: Print it in JavaScript console. Otherwise: Print the data in JavaScript console. Clear text-fields.End your conditional here.*/
    if (Object.keys(errors).length === 0) {
        console.log(collectedData);
    } else {
        console.log(errors);
        fullname.value = null;
        email.value = null;
        message.value = null;
    }
    
// Close your function here
}

// Register your form to "submit" event.
form.addEventListener("submit", vaildateForm);



