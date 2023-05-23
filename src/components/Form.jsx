import React, { useEffect } from "react";
import { useState } from "react";
export default function Form({ newTask, dispatch }) {
    const [taskName, setTaskName] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        if (newTask) {
            newTask.task = taskName;
            dispatch({ type: "EDIT", payload: newTask });
        } else {
            dispatch({ type: "ADD", payload: taskName });
        }
        setTaskName("");
    }
    useEffect(() => {
        if (newTask) {
            setTaskName(newTask.task);
        }
    }, [newTask]);
    function handleChange(e) {
        setTaskName(e.target.value);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={taskName}
                    placeholder="Task Name"
                />
                <button type="submit">{newTask ? "Edit" : "Add"}</button>
            </form>
        </>
    );
}
