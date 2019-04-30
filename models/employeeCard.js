const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: { type: String, required: true },
  PhoneNumber: {type: String, required: true },
  image: { type: String, required: true}
});

const EmployeeCard = mongoose.model("EmployeeCard", employeeSchema);

module.exports = EmployeeCard;
