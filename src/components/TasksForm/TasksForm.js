import "./TasksForm.scss";
import { useState, useEffect, useRef } from "react";
import { v4 } from 'uuid'; 

function TasksForm(props) {
    const { edit, onSubmit } = props;
    const [input, setInput] = useState(edit ? edit.value : '');
    const inputRef = useRef(null);

    // auto focus input field when page loads
    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    // submit handler to create new task object
    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit({ 
            id: v4(), 
            text: input
        });
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit} className='task-form'>
            {edit ? (
                <div>
                    <input placeholder='Update your task' value={input} onChange={handleChange} name='text' ref={inputRef} className='task-form__input'/>
                    <button onClick={handleSubmit} className='task-form__button task-form__button--update'> Update </button>
                </div>
            ) : (
                <div>
                    <input placeholder='Add a new task!' value={input} onChange={handleChange} name='text' className='task-form__input' ref={inputRef}/>
                    <button onClick={handleSubmit} className='task-form__button'> Add </button>
                </div>
            )}
        </form>
    )    
}

export default TasksForm;