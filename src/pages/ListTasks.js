import React from 'react';


function ListTasks() {
    const TASKS = [{
        id: 1,
        title: 'titulo',
        descripcion: 'hola mundo',
        done: false
    }, {
        id: 2,
        title: 'titulo2',
        descripcion: 'hola mundo2',
        done: false
    }, {
        id: 3,
        title: 'titulo3',
        descripcion: 'hola mundo3',
        done: false
    }]

    return (<div>
        {
            TASKS.map(e =>
                <div className='card' key={e.id}>
                    <p>id:{e.id}</p>
                    <h4 className='title'>{e.title}</h4>
                    <p>{e.descripcion}</p>
                    <input type={'checkbox'} defaultChecked={e.done} />                    
                    {/* `/users/$e.id` */}
                </div>
            )
        }
    </div>);
}

export default ListTasks;