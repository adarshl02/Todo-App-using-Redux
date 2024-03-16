import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/todo/todoSlice";

export default function AddForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(task));
    setTask("");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
        <button>Add Task</button>
      </form>
    </>
  );
}
