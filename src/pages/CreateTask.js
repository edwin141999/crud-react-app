import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { addTask } from "../services/db";
import '../pages/createTask.css'

function CreateTask() {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const navigate = useNavigate()
    const onSubmit = (data) => {
        addTask(data.title, data.description)
        navigate('/listTasks')
    }

    return (
        <div className="div">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Titulo</h2>
                <input className="createBody" type={"text"} {...register("title", { required: true })} />
                <p className="errors">{errors.title?.type === 'required' && 'Se requiere un titulo'}</p>
                <h2>Descripcion</h2>
                <input className="createBody" type={"text"} {...register("description", { required: true })} />
                <p className="errors">{errors.description?.type === 'required' && 'Se requiere una descripcion'}</p>
                <button type="submit">Crear</button>
            </form>
        </div>);
}

export default CreateTask;