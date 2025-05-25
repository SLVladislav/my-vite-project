import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


// iziToast.show({
   
// });

const ref = {
    // btnRef: document.querySelector("button[type = submit]"),
    btnForm: document.querySelector(".form"),
    // inputDelay: document.querySelector("input[name = delay]"),
    // inputReject: document.querySelector("input[value = rejected]"),
    // inputFulfield: document.querySelector("input[value = fulfilled]")
}

ref.btnForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const delay = Number(event.currentTarget.delay.value);
    const state = event.currentTarget.state.value;
    console.log("state", state);
    
    console.log(delay);
    
    formBtn(delay, state)
    .then(state => console.log(`✅ Fulfilled promise in ${delay} ms`))    
    .catch(state => console.error(`❌ Rejected promise in ${delay} ms`));
})



function formBtn(delay, state) {
    return new Promise((resolve, reject) => {    
        setTimeout(() => {            
            if (state) {
                resolve(state);
            } else {
                reject(state);
            }
        }, delay)
    })
}


