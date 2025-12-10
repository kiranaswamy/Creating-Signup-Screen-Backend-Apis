const Expense = require("../module/expenseModule");
const User = require('../module/userModule');
const { fn, col } = require("sequelize");


const addExpense = async (req, res) => {
  console.log(req)
  try {
    const { amount, description, category } = req.body;
    const userId = req.userId; 
    console.log("User ID:", userId);

    if (!amount || !description) {
      return res.status(400).json({ error: "Amount and Description required" });
    }

    const expense = await Expense.create({
      amount,
      description,
      category,
      UserId: userId,
    });

    return res.status(201).json(expense);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add expense" });
  }
};


const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll();
    res.status(200).json(expenses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch expenses" });
  }
};


const deleteExpense = async (req, res) => {
  try {
    const id = req.params.id;
    await Expense.destroy({ where: { id } });
    res.json({ message: "Expense deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete expense" });
  }
};
const leardboardData = async (req,res)=>{
  try {
    const leaderboard = await User.findAll({
      attributes: [
        "id",
        "name",
        "email",
        [fn("SUM", col("expenses.amount")), "totalExpense"]  
      ],
      include: [
        {
          model: Expense,
          attributes: []
        }
      ],
      group: ["User.id"], // Group by user
      order: [[fn("SUM", col("expenses.amount")), "DESC"]] 
    });

    res.status(200).json(leaderboard);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  addExpense,
  getExpenses,
  deleteExpense,
  leardboardData
};
