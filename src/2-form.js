const formData = {
    email: "",
    message: "",
}

const localStorageKey = "feedback-form-state";

const formEl = document.querySelector(".feedback-form");
const localValue = localStorage.getItem(localStorageKey) ?? {};
// console.log(localValue);


// const localValue = localStorage.getItem(localStorageKey) ?? formData;
// console.log(localData);

// console.log(formEl);
formEl.addEventListener("input", () => {    
    const emailForm = formEl.elements.email.value;    
    const message = formEl.elements.message.value;
    formData.email = emailForm;
    formData.message = message;

    if (localStorage.getItem(localStorageKey)) {
      console.log( JSON.parse(localStorage.getItem(localStorageKey)));      
    } 
    
   
    
    
//    localStorage.setItem(localStorageKey, JSON.stringify(formData));
    // console.log(storageForm);    
    
    
});
formEl.addEventListener("submit", evt => {
    evt.preventDefault();
    localStorage.clear();
    // localStorage.setItem(localStorageKey, evt.target.value);
    
})

