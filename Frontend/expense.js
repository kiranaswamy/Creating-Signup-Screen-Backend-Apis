
// function Timetracker() {
//   console.log("🔥 Button clicked");
//   const amount = document.getElementById("expense-amount").value;
//   const description = document.getElementById("expense-description").value;
//   const category = document.getElementById("expense-category").value;

//   if (!amount || !description) {
//     alert("Please enter both amount and description!");
//     return;
//   }


//   const token = localStorage.getItem("token"); 
//   if (!token) {
//     alert("You must be logged in to add an expense!");
//     return;
//   }

//   axios.post(
//     "http://localhost:3000/api/addExpense",
//     {
//       amount: amount,
//       description: description,
//       category: category
//     },
//     {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     }
//   )
//   .then(response => {
//     console.log("Saved to DB:", response.data);

//     const li = document.createElement("li");
//     li.textContent = `${description} - ${amount} - ${category}`;

//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";
//     deleteBtn.style.width = '150px';
//     deleteBtn.onclick = () => li.remove();

//     const editBtn = document.createElement("button");
//     editBtn.textContent = "Edit";
//     editBtn.style.width = '150px';
//     editBtn.style.marginRight = '10px';
//     editBtn.onclick = () => {
//       document.getElementById("expense-amount").value = amount;
//       document.getElementById("expense-description").value = description;
//       document.getElementById("expense-category").value = category;
//       li.remove();
//     };

//     li.appendChild(editBtn);
//     li.appendChild(deleteBtn);

//     document.getElementById("expense-list").appendChild(li);

//     // Reset input fields
//     document.getElementById("expense-amount").value = "";
//     document.getElementById("expense-description").value = "";
//     document.getElementById("expense-category").value = "Fuel";
//   })
//   .catch(err => {
//     console.log("Error:", err.response?.data || err);
//     if (err.response?.status === 401) {
//       alert("Unauthorized! Please login again.");
//       window.location.href = "signin.html";
//     }
//   });
// }

// function LeaderBoard(){
//  const token = localStorage.getItem("token");

//   if (!token) {
//     alert("Please login to view leaderboard!");
//     return;
//   }

//   axios.get("http://localhost:3000/api/leaderboard", {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     })
//     .then(response => {
//       console.log("Leaderboard API:", response.data);

//       const leaderboard = response.data; // array of { name, totalExpense }

//       const boardDiv = document.querySelector(".leadr-board");
//       boardDiv.innerHTML = `<h1>Leader Board</h1>`;

//       leaderboard.forEach((user, index) => {
//         boardDiv.innerHTML += `
//           <div class="card p-3 mt-2">
//             <h4>${index + 1}. ${user.name}</h4>
//             <p><strong>Total Expense:</strong> ₹${user.totalExpense}</p>
//           </div>
//         `;
//       });
//     })
//     .catch(err => {
//       console.error("Leaderboard Error:", err.response?.data || err);
//       alert("Failed to load leaderboard!");
//     });
// }

// function Timetracker() {
//   console.log("🔥 Button clicked");
//   const amount = document.getElementById("expense-amount").value;
//   const description = document.getElementById("expense-description").value;
//   const category = document.getElementById("expense-category").value;

//   if (!amount || !description) {
//     alert("Please enter both amount and description!");
//     return;
//   }

//   const token = localStorage.getItem("token"); 
//   if (!token) {
//     alert("You must be logged in to add an expense!");
//     return;
//   }

//   axios.post(
//     "http://localhost:3000/api/addExpense",
//     { amount, description, category },
//     { headers: { Authorization: `Bearer ${token}` } }
//   )
//   .then(response => {
//     console.log("Saved to DB:", response.data);

//     const li = document.createElement("li");
//     li.textContent = `${description} - ${amount} - ${category}`;




//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";
//     deleteBtn.style.width = '150px';
//     deleteBtn.onclick = () => {
//       // Delete from backend
//       axios.delete(`http://localhost:3000/api/expense/${response.data.id}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       })
//       .then(() => li.remove())
//       .catch(err => console.error("Delete Error:", err.response?.data || err));
//     };

//     const editBtn = document.createElement("button");
//     editBtn.textContent = "Edit";
//     editBtn.style.width = '150px';
//     editBtn.style.marginRight = '10px';
//     editBtn.onclick = () => {
//       document.getElementById("expense-amount").value = amount;
//       document.getElementById("expense-description").value = description;
//       document.getElementById("expense-category").value = category;
//       li.remove();
//     };

//     li.appendChild(editBtn);
//     li.appendChild(deleteBtn);
//     document.getElementById("expense-list").appendChild(li);

//     // Reset input fields
//     document.getElementById("expense-amount").value = "";
//     document.getElementById("expense-description").value = "";
//     document.getElementById("expense-category").value = "Fuel";
//   })
//   .catch(err => {
//     console.log("Error:", err.response?.data || err);
//     if (err.response?.status === 401) {
//       alert("Unauthorized! Please login again.");
//       window.location.href = "signin.html";
//     }
//   });
// }

// function LeaderBoard() {
//   const token = localStorage.getItem("token");

//   if (!token) {
//     alert("Please login to view leaderboard!");
//     return;
//   }

//   axios.get("http://localhost:3000/api/leaderboard", {
//       headers: { Authorization: `Bearer ${token}` }
//     })
//     .then(response => {
//       console.log("Leaderboard API:", response.data);

//       const leaderboard = response.data; 
//       const boardDiv = document.querySelector(".leadr-board");
//       boardDiv.innerHTML = `<h1>Leader Board</h1>`;

//       leaderboard.forEach((user, index) => {
//         boardDiv.innerHTML += `
//           <div class="card p-3 mt-2">
//             <h4>${index + 1}. ${user.name}</h4>
//             <p><strong>Total Expense:</strong> ₹${user.totalExpense }</p>
//           </div>
//         `;
//       });
//     })
//     .catch(err => {
//       console.error("Leaderboard Error:", err.response?.data || err);
//       alert("Failed to load leaderboard!");
//     });
// }




function Timetracker() {
  console.log("🔥 Button clicked");

  const amount = document.getElementById("expense-amount").value;
  const description = document.getElementById("expense-description").value;
  const category = document.getElementById("expense-category").value;

  if (!amount || !description) {
    alert("Please enter both amount and description!");
    return;
  }

  const token = localStorage.getItem("token");
  if (!token) {
    alert("You must be logged in to add an expense!");
    return;
  }

  axios.post(
    "http://localhost:3000/api/addExpense",
    { amount, description, category },
    { headers: { Authorization: `Bearer ${token}` } }
  )
  .then(response => {
    console.log("Saved to DB:", response.data);

    const expense = response.data;  // contains id

    addExpenseToUI(expense);

    // Reset input
    document.getElementById("expense-amount").value = "";
    document.getElementById("expense-description").value = "";
    document.getElementById("expense-category").value = "Fuel";
  })
  .catch(err => {
    console.log("Error:", err.response?.data || err);
    if (err.response?.status === 401) {
      alert("Unauthorized! Please login again.");
      window.location.href = "signin.html";
    }
  });
}


// ✅ Render One Expense in UI
function addExpenseToUI(expense) {
  const li = document.createElement("li");
  li.textContent = `${expense.description} - ${expense.amount} - ${expense.category}`;

  const token = localStorage.getItem("token");

  // DELETE BUTTON
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.width = '150px';

  deleteBtn.onclick = () => {
    axios.delete(`http://localhost:3000/api/expense/${expense.id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(() => li.remove())
    .catch(err => console.error("Delete Error:", err.response?.data || err));
  };

  // EDIT BUTTON
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.style.width = '150px';
  editBtn.style.marginRight = '10px';

  editBtn.onclick = () => {
    document.getElementById("expense-amount").value = expense.amount;
    document.getElementById("expense-description").value = expense.description;
    document.getElementById("expense-category").value = expense.category;

    li.remove();
  };

  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  document.getElementById("expense-list").appendChild(li);
}


// ✅ Load all expenses on refresh
function getAllexpenses() {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Please login first!");
    return;
  }

  axios.get("http://localhost:3000/api/expenses", {
    headers: { Authorization: `Bearer ${token}` }
  })
  .then(response => {
    console.log("All expenses:", response.data);

    document.getElementById("expense-list").innerHTML = ""; // clear old list

    response.data.forEach(exp => addExpenseToUI(exp));
  })
  .catch(err => {
    console.log("Fetch Error:", err.response?.data || err);
  });
}



// ✅ Leaderboard UI
function LeaderBoard() {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Please login to view leaderboard!");
    return;
  }

  axios.get("http://localhost:3000/api/leaderboard", {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
      console.log("Leaderboard API:", response.data);

      const leaderboard = response.data; 
      const boardDiv = document.querySelector(".leadr-board");
      boardDiv.innerHTML = `<h1>Leader Board</h1>`;

      leaderboard.forEach((user, index) => {
        boardDiv.innerHTML += `
          <div class="card p-3 mt-2">
            <h4>${index + 1}. ${user.name}</h4>
            <p><strong>Total Expense:</strong> ₹${user.totalExpense}</p>
          </div>
        `;
      });
    })
    .catch(err => {
      console.error("Leaderboard Error:", err.response?.data || err);
      alert("Failed to load leaderboard!");
    });
}

window.addEventListener("DOMContentLoaded", () => {
  getAllexpenses();
});