"use strict";
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

    for (const key in queue) {
      let span = document.createElement("span");
      span.textContent = `${queue[key]}`;
      li.append(span);
    }
    list.append(li);
  });
}
