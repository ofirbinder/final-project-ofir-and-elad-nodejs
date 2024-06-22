"use strict";

//! creating options to the element select by getting all services from server
function createServiceSelect(res) {
  const select = document.querySelector("select");

  //! Create option elements and append to select
  res.forEach((optionData) => {
    const option = document.createElement("option");

    option.value = optionData.serviceTitle;
    option.textContent = `${optionData.serviceTitle} - ${optionData.price} ₪`;
    select.appendChild(option);
  });

  const test = document.querySelector(".options");
  //! Append select element to the body or any other parent element
  test.appendChild(select);
}

//! get all services
fetch(`/orders/services`, {
  method: "GET",
})
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    createServiceSelect(res);
  })
  //! handle error
  .catch((err) => console.log(err));

//! build queues list from the data fetched from BE + icon to delete from table the queue and also from the list
function buildListOfQueues(queues) {
  document.querySelector(
    ".user"
  ).textContent = `Hello, ${queues[1][0].firstName} ${queues[1][0].lastName}`;

  const list = document.querySelector(".list");
  queues[0].forEach((queue) => {
    const li = document.createElement("li");
    li.classList.add("header-queues");

    const deleteIconSVG = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    deleteIconSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    deleteIconSVG.setAttribute("fill", "none");
    deleteIconSVG.setAttribute("viewBox", "0 0 24 24");
    deleteIconSVG.setAttribute("stroke-width", "1.5");
    deleteIconSVG.setAttribute("stroke", "currentColor");
    deleteIconSVG.classList.add("delete-icon");
    deleteIconSVG.innerHTML = `
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
      />`;
    li.appendChild(deleteIconSVG);

    deleteIconSVG.addEventListener("click", (e) => {
      //! Find the closest list item (li)
      const listItem = e.target.closest("li");

      //! Extract the primary key from the first span element within the list item - it store the orderID so we can request the server to remove it
      const primaryKey = listItem.querySelector("span").textContent;

      //! Prepare the data for the request
      const requestData = {
        orderID: primaryKey,
      };

      //! Send a POST request to your Node.js backend with the extracted primary key
      fetch("/orders/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      })
        .then((res) => {
          //! Check if the response is successful
          if (res.ok) {
            //! If successful, we can remove the list item from the DOM if needed
            listItem.remove();
          } else {
            //! If not successful, handle the error accordingly
            console.error("Failed to delete the item");
          }
        })
        .catch((err) => {
          //! Handle any network errors
          console.error("Network error:", err);
        });
    });

    //! creating for every field span that represent it. ID: orderID , Date: date of queue and Service: serviceTitle
    for (const key in queue) {
      let span = document.createElement("span");
      span.textContent = `${queue[key]}`;
      li.append(span);
    }
    list.append(li);
  });
}

//! get all queues
fetch(`/orders/queues`, {
  method: "GET",
})
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    buildListOfQueues(res);
  })
  //! handle error
  .catch((err) => console.log(err));

//! user current date so user won't book queue to date that pass away and same for current time.
let date = new Date();
let year = date.getFullYear();
console.log(date.getMonth());
let month = String(date.getMonth() + 1).padStart(2, "0");
let todayDate = String(date.getDate()).padStart(2, "0");

let datePattern = year + "-" + month + "-" + todayDate;
const dateElement = document.getElementById("day");
dateElement.min = datePattern;
// dateElement.value = datePattern;

let hours = String(date.getHours()).padStart(2, "0");
let minutes = String(date.getMinutes()).padStart(2, "0");

let timePattern = hours + ":" + minutes;
const timeElement = document.getElementById("hours");

dateElement.addEventListener("change", function () {
  if (datePattern === dateElement.value) {
    timeElement.min = timePattern;
    // timeElement.value = timePattern;
  } else timeElement.min = "07:00";
});

// let promptService = prompt("Enter The Service: ");

// console.log(promptService);

// const printPromet = function () {
//   const requestData = {
//     serviceTitle: promptService,
//   };

//   //! get all queues
//   fetch(`/service/service-title`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(requestData),
//   })
//     .then((res) => res.json())
//     .then((res) => {
//       if (res.length !== 0) console.table(res);
//       else console.log("Nothing to show!");
//     })
//     //! handle error
//     .catch((err) => console.log(err));
// };

// printPromet();
