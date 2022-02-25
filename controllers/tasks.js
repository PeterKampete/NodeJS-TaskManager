const Task = require('../models/Task')

const getAllTasks = (req, res) => {
  res.send("get all tasks");
};
const createTask = async (req, res) => {
  const task = await Task.create(req.body)
  res.status(201).json(task);
  console.log(task._id);
};
const getTask = (req, res) => {
  const { id } = req.params;
  res.send(`single task with id: ${id}`);
  console.log(req.method);
};
const updateTask = (req, res) => {
  res.send("update Single Task");
};
const deleteTask = (req, res) => {
  res.send("delete Single Task");
};
module.exports = { getAllTasks, createTask, updateTask, getTask, deleteTask };
