
const form = document.querySelector(".login-form");
form.addEventListener("submit", addFormSubmit)

function addFormSubmit(elem) {
 elem.preventDefault();
    const { email, password } = elem.currentTarget.elements;
    
    if (email.value === "" || password.value === "") {
alert('Please fill in all the fields')
    } 
    else {
        const allInformation = {
            Email: email.value,
            Password: password.value,

        }
        console.log(allInformation); form.reset();
    }
     
    
}
