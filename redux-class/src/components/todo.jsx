import { useDispatch, useSelector} from "react-redux"
import AddForm from "./AddForm";
import { deleteTodo } from "../feature/todo/todoSlice";

export default function Todo(){
    const todos=useSelector((state)=>state.todos);
    const dispatch=useDispatch();

    const clickHandler=(id)=>{
        dispatch(deleteTodo(id));
    };
    return(
        <>
        <h1>Todo List App</h1>
        <AddForm/>
        <ul>
            {todos.map((todo)=>(
                <li key={todo.id}>{todo.task}
                <button onClick={()=>clickHandler(todo.id)}>Delete</button>
                </li>
                
            ))}
        </ul>
        </>
    );
}