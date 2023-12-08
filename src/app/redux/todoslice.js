import { createSlice } from "@reduxjs/toolkit"
import {getTodo, saveTodo } from "../constant/localstorge";


export const todoslice = createSlice({
    name:"Todo",
    initialState:{
        todo:getTodo() || [],
    },
    reducers:{
        addTodos(state,action){
            state.todo.push(action.payload)
            saveTodo(state.todo)
        },
        updateTodo(state,action){
            state.todo = state.todo.map((task,i) => {
                if(i === action.payload){
                    task.isCompleted = true;
                }
                return task;
            })
            saveTodo(state.todo);
        },
        removeTodo(state,action){
            state.todo = state.todo.filter((task,i) => i !== action.payload);
            saveTodo(state.todo);
        }

    }
}) 

export const {addTodos,updateTodo,removeTodo} = todoslice.actions;