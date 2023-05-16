import "./Task.scss";
import { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TasksForm from "../TasksForm/TasksForm";


function Task({ tasks, completeTask, removeTask, updateTask }) {
    const [edit, setEdit] = useState({ id: null, value: ''});
    
    const submitUpdate = value => {
        updateTask(edit.id, value);
        setEdit({ id: null, value: ''});
    };
    
    if (edit.id) {
        return <TasksForm edit={edit} onSubmit={submitUpdate} />;
    }

    return tasks.map((task, index) => (
        <div className={task.isComplete ? 'taskItem complete' : 'taskItem'} key={index}>
            <div key={task.id} onClick={() => completeTask(task.id)}>
                {task.text}
            </div>
            <div className='taskItem__icons'>
                <RiCloseCircleLine
                    onClick={() => removeTask(task.id)}
                    className='taskItem__delete-icon'
                />
                <TiEdit
                    onClick={() => setEdit({ id: task.id, value: task.text })}
                    className='taskItem__edit-icon'
                />
            </div>
        </div>
    ))
}

export default Task;