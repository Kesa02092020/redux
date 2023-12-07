"use client";

export const getTodo = () =>{
    return JSON.parse(localStorage.getItem("todos"));
}

export const saveTodo = () =>{
    return JSON.parse(localStorage.setItem("todos",JSON.stringify(todos)));
}