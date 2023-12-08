"use client";
export const getTodo = () => {
    if (typeof window !== 'undefined') {
        return JSON.parse(localStorage.getItem("todo"));
    }
}


export const saveTodo = (todo) => {
    console.log({todo:todo,msg:"set"});
    localStorage.setItem("todo", JSON.stringify(todo));
    return;
}
