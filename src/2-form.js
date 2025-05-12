const formData = {
    email: "",
    message: "",
}

const localStorageKey = "feedback-form-state";

const formEl = document.querySelector(".feedback-form");
const localValue = localStorage.getItem(localStorageKey);
if (localValue) {
    const parseLocal = JSON.parse(localValue);
    formEl.elements.email.value = parseLocal || '';
    formEl.elements.message.value = parseLocal || '';
    formData.email = parseLocal || '';
    formData.message = parseLocal || '';
}  






// console.log(formEl);
formEl.addEventListener("input", () => {    
    const emailForm = formEl.elements.email.value.trim();    
    const messageForm = formEl.elements.message.value.trim();
    formData.email = emailForm;
    formData.message = messageForm;  
    console.log(emailForm);
    
    
   localStorage.setItem(localStorageKey, JSON.stringify(formData));
    // console.log(storageForm);    
    
    
});
formEl.addEventListener("submit", evt => {
    evt.preventDefault();
    if (!formData.email || !formData.message){
        return console.log("Fill please all fields");
            }
    console.log(formData);
    
    localStorage.removeItem(localStorageKey);
    formEl.reset();
    formData.email = "";
    formData.message = "";   
    
})

