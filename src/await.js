// READ ______________________________________________________________________________________________//

// import axios from 'axios';

// axios.get("http://localhost:3000/books/2").then(response => console.log(response)
fetch("http://localhost:3000/books/2").then(response => response.json()).then(console.log)

//_________________________________________________________________________________________________________//
