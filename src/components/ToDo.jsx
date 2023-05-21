import React from "react";
import Form from "./Form";
import List from "./List";
import { useState } from "react";

export default function ToDo() {
    const [data, setData] = useState([]);
    const [newTask, setNewTask] = useState(null);
    function addTask(task) {
        setData([...data, { id: data.length, task }]);
    }
    function deleteTask(id) {
        setData(data.filter((task) => task.id !== id));
    }
    function editTask(item) {
        setNewTask(item);
    }
    function updateTask(updatedTask) {
        setData(
            data.map((task) => (task.id === updateTask.id ? updatedTask : task))
        );
        setNewTask(null);
    }
    return (
        <div>
            <h3>To-Do list</h3>
            <Form addTask={addTask} newTask={newTask} updateTask={updateTask} />
            <List data={data} deleteTask={deleteTask} editTask={editTask} />
        </div>
    );
}
