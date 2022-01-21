import React, { useEffect, useState } from 'react';
import { getTasks } from '../services/db';

function ListTasks() {
    const [tasks, setTasks] = useState(null)

    useEffect(() => {
        getTasksData()
    }, [])

    const getTasksData = async () => {
        const tasksData = await getTasks()
        console.log(tasksData.docs);
        setTasks(tasksData.docs)
    }

    return (<div>
        {
            tasks && tasks.map(e =>
                <div className='card' key={e.id}>
                    <p>id:{e.id}</p>
                    <h4 className='title'>Titulo</h4>
                    <p className='title'>{e.data().title}</p>
                    <h4 className='descripcion'>Descripcion</h4>
                    <p>{e.data().description}</p>
                    <h4 className='hecho'>Hecho</h4>
                    <input type={'checkbox'} defaultChecked={e.data().done} />
                    {/* `/users/$e.id` */}
                    <div>
                        <button>Update</button>
                        <button>Delete</button>
                    </div>
                </div>,
            )
        }
    </div>);
}

export default ListTasks;