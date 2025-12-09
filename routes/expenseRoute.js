const express = require("express");
const route = express.Router();
const expenseController = require("../controller/expenseController");

route.post("/addExpense", expenseController.addExpense);
route.get("/expenses", expenseController.getExpenses);
route.delete("/expense/:id", expenseController.deleteExpense);

module.exports = route;
