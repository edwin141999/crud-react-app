import { useParams } from "react-router-dom";

export default function UpdateTask() {
    let { id } = useParams();
    return (
        <div>
            update task, id:{id}
        </div>
    );
}

//  updateTask; 