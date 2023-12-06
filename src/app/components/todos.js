import React from 'react'
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
//import { addTodos } from '../redux/todoslice';
const Todo = ({data}) =>{
    return(
        <tr>
                        <td>{data.id}</td>
                        <td>{data.title}</td>
                        <td>{data.description}</td>
                        <td>{data.isCompleted?<span>Done</span>:<span>Not</span>}</td>
                        <td>
                            <div className='d-flex justify-content-start gap-4'>
                                <Button variant="success">Update</Button>
                                <Button variant="danger">Delete</Button>
                            </div>
                        </td>
                    </tr>
    )
}
const todos = () => {
    const itemselect = useSelector((state) => state.Todo.todo)
    return (
        <div>
            <Table responsive="sm">
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
                    {itemselect.map((task,i) => {
                        return <Todo data={task} key={i} />
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default todos
