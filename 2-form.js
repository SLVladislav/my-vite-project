import"./assets/style-CxQLkTcT.js";const t="feedback-form-state",e=document.querySelector(".feedback-form");localStorage.getItem(t);e.addEventListener("input",()=>{e.elements.email.value,e.elements.message.value,localStorage.getItem(t)&&console.log(JSON.parse(localStorage.getItem(t)))});e.addEventListener("submit",a=>{a.preventDefault(),localStorage.clear()});
//# sourceMappingURL=2-form.js.map
