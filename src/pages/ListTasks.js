import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteTask, getTasks } from '../services/db';
import '../pages/listTasks.css'

function ListTasks() {
    const [tasks, setTasks] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        getTasksData()
    }, [])

    const getTasksData = async () => {
        const tasksData = await getTasks()
        setTasks(tasksData.docs)
    }

    const deleteAndUpdate = (id) => {
        deleteTask(id)
        getTasksData()
    }

    return (
        <div className='container'>
            {
                tasks && tasks.map(e =>
                    <div className='card' key={e.id}>
                        <div className='card_body'>
                            <h3>Titulo</h3>
                            <p>{e.data().title}</p>
                            <div className='line'></div>
                            <h3>Descripcion</h3>
                            <p>{e.data().description}</p>
                            <div className='line'></div>
                            <label>
                                <input type={'checkbox'} defaultChecked={e.data().done} onClick={() => { deleteAndUpdate(e.id) }} />Hecho
                            </label>
                            <div className='line'></div>
                            <div className='card_button'>
                                <button className='btnUpdate' onClick={() => { navigate(`/updateTask/${e.id}`) }}>Update</button>
                                <button className='btnDelete' onClick={() => { deleteAndUpdate(e.id) }}>Delete</button>
                            </div>
                        </div>
                    </div>,
                )
            }
        </div>
    );
}

export default ListTasks;