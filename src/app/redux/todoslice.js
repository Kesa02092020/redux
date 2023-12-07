import { createSlice } from "@reduxjs/toolkit"


export const todoslice = createSlice({
    name:"Todo",
    initialState:{
        todo:[]
    },
    reducers:{
        addTodos(state,action){
            state.todo.push(action.payload)
        },
        updateTodo(state,action){
            state.todo = state.todo.map((task,i) => {
                if(i === action.payload){
                    task.isCompleted = true;
                }
                return task;
            })
        },
        removeTodo(state,action){
            state.todo = state.todo.filter((task,i) => i !== action.payload);
        }

    }
}) 

export const {addTodos,updateTodo,removeTodo} = todoslice.actions;