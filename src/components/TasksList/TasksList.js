import { useEffect, useState } from 'react';
import TasksForm from "../TasksForm/TasksForm";
import Task from "../Task/Task";

function TasksList() {
    const [tasks, setTasks] = useState([{id: '1', text: 'Finish capstone'}]);

    // on mount check to see if there are items in the task list stored in local storage
    useEffect(() => {
        if(localStorage.getItem("tasks")) {
            const tasksArray = JSON.parse(localStorage.getItem("tasks"));
            setTasks(tasksArray);
        }
    }, [])

    // add new task. Store new tasks in localstorage
    const addTask = (task) => {
        const newTask = [task, ...tasks];
        localStorage.setItem("tasks", JSON.stringify(newTask));
        setTasks(newTask);
    }

    // update existing task
    const updateTask = (taskId, newValue) => {
        // const updatedTask = (task) => task.map(item => (item.id === taskId ? newValue : item));
        const updatedTask = tasks.map(item => (item.id === taskId ? newValue : item));
        localStorage.setItem("tasks", JSON.stringify(updatedTask));
        setTasks(updatedTask);
    };

    // delete task from list
    const removeTask = (id) => {
        const removedTask = [...tasks].filter(task => task.id !== id);
        localStorage.setItem("tasks", JSON.stringify(removedTask));
        setTasks(removedTask);
    };

    // mark task as complete
    const completeTask = (id) => {
        const completedTask = tasks.map(task => {
            if (task.id === id) {
                task.isComplete = !task.isComplete;
            }
            return task;
        })
        localStorage.setItem("tasks", JSON.stringify(completedTask));
        setTasks(completedTask);
    };

    return (
        <div>
            <section className='taskList'>
            <h1>What's on the list for today?</h1>
            <TasksForm onSubmit={addTask} />
            <Task tasks={tasks} completeTask={completeTask} removeTask={removeTask} updateTask={updateTask} />
            </section>
        </div>
    );
}

export default TasksList;