const { default: mongoose } = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timeStamp: true,
  }
);

const TodoModel = mongoose.models.todo || mongoose.model("todo", todoSchema);

export default TodoModel;
