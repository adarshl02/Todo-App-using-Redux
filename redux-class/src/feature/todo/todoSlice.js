import {createSlice,nanoid} from '@reduxjs/toolkit';

const initialState={
    todos:[{id:"abc",task:"demo-task",isDone:false}],
};

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const newTodo={
                id:nanoid(),
                task:action.payload,
                isDone:false
            };
            state.todos.push(newTodo); //direct mutation            
        },
        deleteTodo :(state,action)=>{
            state.todos=state.todos.filter((todo)=>
                todo.id!==action.payload)
            },
        markAsDone:(state,action)=>{
            state.todos=state.todos.map((todo)=>{
                if(todo.id===action.payload){
                    todo.isDone=true;
                }
            });
        },
    }
});

export const  {addTodo,deleteTodo,markAsDone}=todoSlice.actions;

//we can use selectors to access the data in our slice of the Redux store
//selectors are pure functions that return a value based on the input state
//they do not modify the state directly
export default todoSlice.reducer;