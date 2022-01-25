import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { addTask } from "../services/db";
import '../pages/createTask.css'

function CreateTask() {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const navigate = useNavigate()
    const onSubmit = (data) => {
        console.log(data);
        addTask(data.title, data.description)
        navigate('/listTasks')
    }

    return (
        <div className="div">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h4>Titulo</h4>
                <input type={"text"} {...register("title", { required: true })} />
                <p>{errors.title?.type === 'required' && 'Se requiere un titulo'}</p>
                <h4>Descripcion</h4>
                <input type={"text"} {...register("description", { required: true })} />
                <p>{errors.description?.type === 'required' && 'Se requiere una descripcion'}</p>
                <button type="submit">Crear</button>
            </form>
        </div>);
}

export default CreateTask;