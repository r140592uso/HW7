

// just practice---------------------

// function getUsers() {
//   function renderPage() {
//     let response = this.responseText;
//     let responsData = JSON.parse(response);
//     console.log(responsData);
//     let ul = document.createElement("ul");
//     // responsData.data.forEach(element => {
//     //   let li = document.createElement("li");
//     //   li.textContent = `${element.first_name} ${element.last_name}`;
//     //   ul.appendChild(li);
//     // });

//     let li = document.createElement("li");
//     li.textContent = responsData.data[3].email;
//     ul.appendChild(li);
//     document.getElementById("api").appendChild(ul);
//   }
//   let request = new XMLHttpRequest();
//   request.addEventListener("load", renderPage);
//   request.open("GET", "https://reqres.in/api/users?page=2");
//   request.send();
// }
// getUsers();

// // error
// function getUsers() {
//   function renderPage() {
//     let response = this.responseText;
//     let responsData = JSON.parse(response);
//     console.log(responsData);
//     let ul = document.createElement("ul");
//     // //   <Tu yvela minda rom wamovigo
//     // responsData.data.forEach(element => {
//     //   let li = document.createElement("li");
//     //   li.textContent = `${element.first_name} ${element.last_name}`;
//     //   ul.appendChild(li);
//     // });
//     // //   <tu erti konkretuli momaqvs
//     let li = document.createElement("li");
//     li.textContent = responsData.data[3].email;
//     ul.appendChild(li);
//     document.getElementById("api").appendChild(ul);
//   }

//   function errorRander() {
//     let p = document.createElement("p");
//     p.textContent = "Server Error";
//     p.style.color = "red";
//     document.getElementById("api").appendChild(p);
//   }
//   let request = new XMLHttpRequest();
//   request.addEventListener("error", errorRander);
//   request.open("GET", "https://reqres.isers?page=2");
//   request.send();
// }
// getUsers();

// fetch

// fetch("https://reqres.in/api/users?page=2", {
//   method: "GET",
// })
//   .then(function (response) {
//     if (response.status !== 200) {
//       throw response.status;
//     }
//     return response.json();
//   })
//   .then(function (responseData) {
//     let ul = document.createElement("ul");
//     let li = document.createElement("li");
//     li.textContent = responseData.data[3].email;
//     ul.appendChild(li);
//     document.getElementById("api").appendChild(ul);
//   })
//   .catch(function (error) {
//     let p = document.createElement("p");
//     p.textContent = "Server Error";
//     p.style.color = "red";
//     document.getElementById("api").appendChild(p);
//   });

// fetch foreach
// fetch("https://reqres.in/api/users?page=2", {
//   method: "GET",
// })
//   .then(function (response) {
//     if (response.status !== 200) {
//       throw response.status;
//     }
//     return response.json();
//   })
//   .then(function (responseData) {
//     let ul = document.createElement("ul");
//     responseData.data.forEach((element) => {
//       let li = document.createElement("li");
//       li.textContent = `${element.first_name} ${element.last_name}`;
//       ul.appendChild(li);
//       document.getElementById("api").appendChild(ul);
//     });
//   })
//   .catch(function (error) {
//     let p = document.createElement("p");
//     p.textContent = "Server Error";
//     p.style.color = "red";
//     document.getElementById("api").appendChild(p);
//   });

//  bevri useristvis fragment js
// fetch("https://reqres.in/api/users?page=2", {
//   method: "GET",
// })
//   .then(function (response) {
//     if (response.status !== 200) {
//       throw response.status;
//     }
//     return response.json();
//   })
//   .then(function (responseData) {
//     let ul = document.createElement("ul");
//     const fragment = document.createDocumentFragment();
//     responseData.data.forEach((element) => {
//       let li = document.createElement("li");
//       li.textContent = `${element.first_name} ${element.last_name}`;
//       fragment.appendChild(li);
//     });
//     ul.appendChild(fragment);
//     document.getElementById("api").appendChild(ul);
//   })
//   .catch(function (error) {
//     if (error == 404) {
//       let p = document.createElement("p");
//       p.textContent = "Page Not Found";
//       p.style.color = "red";
//       document.getElementById("api").appendChild(p);
//     } else if (error == 500) {
//       let p = document.createElement("p");
//       p.textContent = "Server Error";
//       p.style.color = "red";
//       document.getElementById("api").appendChild(p);
//     }
//   });

// load more
// let currentPage = 1;
// function getUsersAjax(page) {
//   fetch("https://reqres.in/api/users?page=" + page, {
//     method: "GET",
//   })
//     .then(function (response) {
//       if (response.status !== 200) {
//         throw response.status;
//       }
//       return response.json();
//     })
//     .then(function (responseData) {
//       const fragment = document.createDocumentFragment();
//       responseData.data.forEach((element) => {
//         let li = document.createElement("li");
//         li.textContent = `${element.first_name} ${element.last_name}`;
//         fragment.appendChild(li);
//       });
//       document.getElementById("list").appendChild(fragment);
//     })
//     .catch(function (error) {
//       if (error == 404) {
//         let p = document.createElement("p");
//         p.textContent = "Page Not Found";
//         p.style.color = "red";
//         document.getElementById("api").appendChild(p);
//       } else if (error == 500) {
//         let p = document.createElement("p");
//         p.textContent = "Server Error";
//         p.style.color = "red";
//         document.getElementById("api").appendChild(p);
//       }
//     });
// }
// document.getElementById("loadmore").addEventListener("click", function () {
//   // currentPage++; an
//   // currentpage = currentPage + 1; an
//   currentPage += 1;
//   getUsersAjax(currentPage);
// });
// getUsersAjax(currentPage);



// load next load previous
// let currentPage = 1;
// let totalPages;
// function getUsersAjax(page) {
//   fetch("https://reqres.in/api/users?page=" + page, {
//     method: "GET",
//   })
//     .then(function (response) {
//       if (response.status !== 200) {
//         throw response.status;
//       }
//       return response.json();
//     })
//     .then(function (responseData) {
//       const fragment = document.createDocumentFragment();

//       responseData.data.forEach((element) => {
//         let li = document.createElement("li");
//         let p = document.createElement("p");

//         p.textContent = `${element.first_name} ${element.last_name}`;
//         let image = document.createElement("img");
//         image.src = element.avatar;
//         li.appendChild(image);
//         li.appendChild(p);
//         fragment.appendChild(li);
//       });
//       document.getElementById("list").innerHTML = " ";
//       document.getElementById("list").appendChild(fragment);
//       totalPages = responseData.total_pages;
//     })
//     .catch(function (error) {
//       if (error == 404) {
//         let p = document.createElement("p");
//         p.textContent = "Page Not Found";
//         p.style.color = "red";
//         document.getElementById("api").appendChild(p);
//       } else if (error == 500) {
//         let p = document.createElement("p");
//         p.textContent = "Server Error";
//         p.style.color = "red";
//         document.getElementById("api").appendChild(p);
//       }
//     });
// }
// document.getElementById("loadprev").addEventListener("click", function () {
//   if (currentPage == 1) {
//     return;
//   }
//   currentPage -= 1;
//   getUsersAjax(currentPage);
// });
// document.getElementById("loadnext").addEventListener("click", function () {
//   if (currentPage == totalPages) {
//     return;
//   }
//   currentPage += 1;
//   getUsersAjax(currentPage);
// });

// getUsersAjax(currentPage);



