const getAllTasks = (req, res) => {
  res.send("get all tasks");
};
const createTask = (req, res) => {
  res.send(req.body);
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
