import { createSlice } from "@reduxjs/toolkit"


export const todoslice = createSlice({
    name:"Todo",
    initialState:{
        todo:[]
    },
    reducers:{
        addTodos(state,action){
            state.todo.push(action.payload)
        }
        // updateTodo(state,action){
        //     state.todos = state.todos.map((task) => task.id === action.payload.id?action.payload:todos)
        // },
        // removeTodos(state,action){
        //     state.todos = state.todos.filter((task) => task.id !== action.payload.id)
        // }

    }
}) 

export const {addTodos} = todoslice.actions;

export default todoslice.reducer;