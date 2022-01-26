import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { getTask, updateTask } from "../services/db";
import '../pages/updateTask.css'

export default function UpdateTask() {
    let { id } = useParams();
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const { handleSubmit } = useForm()
    const navigate = useNavigate()

    useEffect(() => {
        getTaskData()
    }, [])


    const getTaskData = async () => {
        const taskData = await getTask(id)
        setTitle(taskData.data().title)
        setDescription(taskData.data().description)
    }

    const onUpdate = () => {
        updateTask(id, title, description, false)
        navigate('/listTasks')
    }

    return (
        <div className="div">
            <form onSubmit={handleSubmit(onUpdate)}>
                <h2>Titulo</h2>
                <input className="updateBody" value={title} onChange={e => setTitle(e.target.value)} type={"text"} />
                <h2>Descripcion</h2>
                <input className="updateBody" value={description} onChange={e => setDescription(e.target.value)} type={"text"} />
                <button type="submit">Actualizar</button>
            </form>
        </div>
    );
}

//  updateTask; 