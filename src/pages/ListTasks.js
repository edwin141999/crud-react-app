import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteTask, getTasks } from '../services/db';

function ListTasks() {
    const [tasks, setTasks] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        getTasksData()
    }, [])

    const getTasksData = async () => {
        const tasksData = await getTasks()
        console.log(tasksData.docs);
        setTasks(tasksData.docs)
    }

    const deleteAndUpdate = (id) => {
        deleteTask(id)
        getTasksData()
    }

    return (<div>
        {
            tasks && tasks.map(e =>
                <div className='card' key={e.id}>
                    {/* <p>id: {e.id}</p> */}
                    <h4 className='title'>Titulo</h4>
                    <p className='title'>{e.data().title}</p>
                    <h4 className='descripcion'>Descripcion</h4>
                    <p>{e.data().description}</p>
                    <h4 className='hecho'>Hecho</h4>
                    <input type={'checkbox'} defaultChecked={e.data().done} onClick={() => { deleteAndUpdate(e.id) }} />
                    <div>
                        <button onClick={() => { navigate(`/updateTask/${e.id}`) }}>Update</button>
                        <button onClick={() => { deleteAndUpdate(e.id) }}>Delete</button>
                    </div>
                </div>,
            )
        }
    </div>);
}

export default ListTasks;