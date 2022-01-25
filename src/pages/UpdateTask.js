import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { getTask, updateTask } from "../services/db";

export default function UpdateTask() {
    let { id } = useParams();
    const { register, formState: { errors }, handleSubmit } = useForm()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        getTaskData()
    }, [])


    const getTaskData = async () => {
        console.log(id);
        const taskData = await getTask(id)
        console.log(taskData.data());
        setTitle(taskData.data().title)
        setDescription(taskData.data().description)
    }

    const onUpdate = () => {
        updateTask(id,title,description,false)
    }


    return (
        <div>
            <form onSubmit={handleSubmit(onUpdate)}>
                update task, id:{id}
                <h4>Titulo</h4>
                <input value={title} onChange={e => setTitle(e.target.value)} type={"text"} />
                <p>{errors.title?.type === 'required' && 'Se requiere un titulo'}</p>
                <h4>Descripcion</h4>
                <input value={description} onChange={e => setDescription(e.target.value)} type={"text"} />
                <p>{errors.description?.type === 'required' && 'Se requiere una descripcion'}</p>
                <button type="submit">Actualizar</button>
            </form>
        </div>
    );
}

//  updateTask; 