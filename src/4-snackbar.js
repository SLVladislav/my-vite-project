import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


// iziToast.show({
   
// });

const ref = {
    btnRef: document.querySelector("button[type = submit]"),
    btnForm: document.querySelector(".form"),
    inputDelay: document.querySelector("input[name = delay]"),
    inputReject: document.querySelector("input[value = rejected]"),
    inputFulfield: document.querySelector("input[value = fulfilled]")
}

ref.btnRef.addEventListener("submit", (event) => {
    event.preventDefault();
})

const formBtn = delay => {
    return new Promise((resolve, reject) => {
        // console.log(`✅ Fulfilled promise in ${delay}ms`);
        setTimeout(() => {
            
            if (isSucces) {
                resolve("succes value");
            } else {
                reject("error")
            }
        }, 1000)
    })
}

formBtn("Vlad")
    .then(delay => console.log(delay))
    .catch(error => console.error(error));
