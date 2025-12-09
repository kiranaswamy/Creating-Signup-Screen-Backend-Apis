const User = require('./expenseModule');
const Expense = require('./userModule');

User.hasMany(Expense);
Expense.belongsTo(User);



module.exports = {User,Expense}