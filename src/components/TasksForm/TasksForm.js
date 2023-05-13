import "./TasksForm.scss";
import { useState, useEffect, useRef } from "react";
import { v4 } from 'uuid'; 

function TasksForm(props) {
    const { edit, onSubmit } = props;
    const [input, setInput] = useState(edit ? edit.value : '');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit({ id: v4(), text: input});
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit} className='task-form'>
            {edit ? (
                <div>
                    <input placeholder='Update your task' value={input} onChange={handleChange} name='text' ref={inputRef} className='todo-input edit'/>
                    <button onClick={handleSubmit} className='todo-button edit'> Update </button>
                </div>
                ) : (
                <div>
                    <input placeholder='Add a new task!' value={input} onChange={handleChange} name='text' className='todo-input' ref={inputRef}/>
                    <button onClick={handleSubmit} className='todo-button'> Add </button>
                </div>
            )}
        </form>
    )    
}

export default TasksForm;