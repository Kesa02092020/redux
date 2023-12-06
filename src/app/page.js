'use client'
import React, { useState } from 'react'
import styles from './page.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Card, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { addTodos } from './redux/todoslice';
import Todos from './components/todos';
export default function Home() {

  const state = useSelector((state) => state.Todo.todo);

  const dispatch = useDispatch();
  console.log({ state });
  const [formdata, setFormdata] = useState({
    title: '',
    description: '',
  })

  const onHandle = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value })
  }

  const onsubmit = (e) => {
    e.preventDefault();
    //if (formdata.title !== "" && formdata.description !== "") {
      try {
        const item = {
          ...formdata,
          id: new Date().getTime(),
          isCompleted: false
        }
        dispatch(addTodos(item))
        toast.success("Todo added Success")
      }
      catch (err) {
        console.log("error", err.message);
      }
    // }
    // else {
    //   toast.error("Fill the task");
    // }


    setFormdata({
      title: '',
      description: '',
    });
  }

  return (
    <main className={styles.main} style={{ backgroundColor: "#3d251e" }}>
      <div className='container'>
        <div className='row mb-5'>
          <div className='col-md-6 col-12 mx-auto'>
            <Card body className='bg-white'>
              <Form.Control type="text" className="mb-3" name="title" value={formdata.title} placeholder="Title" onChange={(e) => onHandle(e)} />
              <Form.Control type="text" className="mb-3" name="description" value={formdata.description} placeholder="Description" onChange={(e) => onHandle(e)} />
              <Button variant="primary" className='btn border py-2 px-4' onClick={(e) => onsubmit(e)}>Add Task</Button>
            </Card>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-9 mx-auto col-12'>
            <Card body className='bg-white'>
              <Todos />
            </Card>
          </div>
        </div>
      </div>
    </main>
  )

}
