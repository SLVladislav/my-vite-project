
// async function getUsers(names) {
//     let logins = [];
//     for (const name of names) {
//         const responsLogain =  fetch(`https://api.github.com/users/${name}`).then(
//             responseOk => {
//                 if (responseOk.ok != 200) {
//                     new Error(`HTTP error! Status: ${responseOk.status}`);
//                     return null;
//                 } else {
//                    return responseOk.json();
//                 }
//             }
//         ).catch(
//             responseFail => {
//             return null;
//         })

//         logins.push(responsLogain);
//     }
//     let results = await Promise.all(logins);
   
    
//     return results;
  
 
// }
// console.log(getUsers(["octocat", "nonexistentuser123", "torvalds"]));

// const fetchUserBtn = document.querySelector(".btn");
// const userList = document.querySelector(".user-list");

// fetchUserBtn.addEventListener("click", () => {
//     fetchUsers().then((users) => {
//         renderUsers(users)
//     })
//         .catch(error => console.log(error));
      
// });

//  async function fetchUsers() {
//     return  fetch("https://jsonplaceholder.typicode.com/users")
//          .then((response) => {
//              if (!response.ok) {
//                  throw new Error(response.status)
//              }
//              return response.json();
//          })
        
// };

// function renderUsers(users) {
//     const marcup = users.map((user) => {
//         return `<li>
//         <p><b>Name</b>: ${user.name}</p>
//         <p><b>Email</b>: ${user.email}</p>
//         <p><b>Company</b>: ${user.company.name}</p>
//         </li>`;
//     }).join('');

//     userList.insertAdjacentHTML("beforeend", marcup);
// }
// console.log();


// import axios from "axios";

// axios({
//     method: "get",
//     url: "https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name",
// })


// axios.get("https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name")
// .then(response => console.log(response))
// .catch(error => console.log(error));
// axios.get('https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name')
//   .then(function (response) {
//     console.log(response.data);
//     console.log(response.status);
//     console.log(response.statusText);
//     console.log(response.headers);
//     console.log(response.config);
//   });

// Your API key: 33675030-cc14eed331d6d92ff5641cad6
// https://pixabay.com/api/?key=33675030-cc14eed331d6d92ff5641cad6&q=yellow+flowers&image_type=photo