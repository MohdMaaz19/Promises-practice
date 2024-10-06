const API_URL = 'https://jsonplaceholder.typicode.com/users';

// function fetchUserData() {
//   return new Promise((resolve, reject) => {
//     fetch(API_URL)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();  // Parse the JSON data
//       })
//       .then((data) => {
//         // Transform the data into an array of objects with name and username
//         const result = data.map(user => ({
//           name: user.name,
//           username: user.username
//         }));
//         resolve(result);  // Resolve with the transformed data
//       })
//       .catch((error) => {
//         reject(error);  // Handle any error that occurred during fetch
//       });
//   });
// }

// Example usage:
// fetchUserData()
//   .then((users) => console.log(users))  // Log the array of objects with name and username
//   .catch((error) => console.log('Error:', error));

// function fetchUserData(){
//     return new Promise((resolve, reject) => {
//         fetch(API_URL)
//         .then((response)=>{
//             return response.json()
//         })
//         .then((result)=>{
//             const users = result.map((user)=>({
//                 name:user.name,
//                 username:user.username
//             }))
//         resolve(users)
//         })
//         .catch((error)=>{
//             reject(error)
//         })
//     })
// }
// fetchUserData()
// .then((users)=>console.log(users))
// .catch((error)=>console.log(error))


function fetchUserData(){
    return new Promise((resolve, reject) => {
        fetch(API_URL)
        .then((response)=>{
            return response.json()
        })
        .then((result=>{
            const users = result.map((user)=>({
                name:user.name,
                username : user.username
            }))
            resolve(users)
        }))
        .catch((error=>{
            reject(error)
        }))
    })
}

fetchUserData()
.then((users)=>console.log(users))
.catch((error)=>console.log(error))