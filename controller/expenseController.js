const Expense = require("../module/expenseModule");

// Add Expense
const addExpense = async (req, res) => {
  try {
    const { amount, description, category } = req.body;

    if (!amount || !description) {
      return res.status(400).json({ error: "Amount and Description required" });
    }

    const expense = await Expense.create({
      amount,
      description,
      category
    });

    return res.status(201).json(expense);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to add expense" });
  }
};

// Get All Expenses
const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch expenses" });
  }
};

// Delete Expense
const deleteExpense = async (req, res) => {
  try {
    const id = req.params.id;
    await Expense.destroy({ where: { id } });
    res.json({ message: "Expense deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete" });
  }
};
module.exports = {addExpense,deleteExpense,getExpenses}