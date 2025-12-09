function Timetracker() {
  console.log("🔥 Button clicked");
  const amount = document.getElementById("expense-amount").value;
  const description = document.getElementById("expense-description").value;
  const category = document.getElementById("expense-category").value;

  if (!amount || !description) {
    alert("Please enter both amount and description!");
    return;
  }


  axios.post("http://localhost:3000/api/addExpense", {
    amount: amount,
    description: description,
    category: category
  })
  .then(response => {
    console.log("Saved to DB:", response.data);

    // Now add it to UI
    const li = document.createElement("li");
    li.textContent = `${description} - ${amount} - ${category}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.width = '150px';
    deleteBtn.onclick = () => li.remove();

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.style.width = '150px';
    editBtn.style.marginRight = '10px';
    editBtn.onclick = () => {
      document.getElementById("expense-amount").value = amount;
      document.getElementById("expense-description").value = description;
      document.getElementById("expense-category").value = category;
      li.remove();
    };

    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    document.getElementById("expense-list").appendChild(li);

    // Reset input fields
    document.getElementById("expense-amount").value = "";
    document.getElementById("expense-description").value = "";
    document.getElementById("expense-category").value = "Fuel";
  })
  .catch(err => {
    console.log("Error:", err);
  });
}
