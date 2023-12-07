import React from 'react'
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { updateTodo, removeTodo } from '../redux/todoslice';
const Todo = ({data,index}) =>{
    const updatedispatch = useDispatch();

    const UpdateTodos = () =>{
        updatedispatch(updateTodo(index))  
        toast.success("Updated Todo Success")      
    } 
    const removeTodos = () =>{
        updatedispatch(removeTodo(index))  
        toast.success("Deleted Success")      
    } 
    console.log(data);
    return(

        <tr>
                        <td className={`${data.isCompleted? "text-decoration-line-through":""}`}>{data.id}</td>
                        <td className={`${data.isCompleted?"text-decoration-line-through":""}`}>{data.title}</td>
                        <td className={`${data.isCompleted?"text-decoration-line-through":""}`}>{data.description}</td>
                        <td >{data.isCompleted?<span>Done</span>:<span>Not</span>}</td>
                        <td>
                            <div className='d-flex justify-content-start gap-4'>
                                <Button variant="success" onClick={UpdateTodos}>Update</Button>
                                <Button variant="danger" onClick={removeTodos}>Delete</Button>
                            </div>
                        </td>
                    </tr>
    )
}
const todos = () => {
    const itemselect = useSelector((state) => state.Todo.todo)
    return (
        <div>
            <Table className='overflow-auto table align-middle'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>                    
                    {itemselect && itemselect.length > 0? itemselect.map((task,i) => {
                        console.log(task);
                        return <Todo data={task} index={i} key={i} />
                    }):<tr><td colspan="5" className='p-0 border fs-4 fw-bold text-center py-4'>No Task Founded</td></tr>}
                </tbody>
            </Table>
        </div>
    )
}

export default todos
