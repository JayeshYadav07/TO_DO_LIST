import React from "react";
import Form from "./Form";
import List from "./List";
import { useState } from "react";

export default function ToDo() {
    const [data, setData] = useState([]);
    const [newTask, setNewTask] = useState(null);
    function addTask(task) {
        setData([...data, { id: data.length + 1, task }]);
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
    function moveUp(id) {
        let newArray = [...data];
        for (let i = 1; i < newArray.length; i++) {
            if (newArray[i].id === id) {
                let temp = { ...newArray[i], id: newArray[i - 1].id };
                newArray[i] = { ...newArray[i - 1], id: newArray[i].id };
                newArray[i - 1] = temp;
                setData(newArray);
            }
        }
    }
    function moveDown(id) {
        let newArray = [...data];
        for (let i = 0; i < newArray.length - 1; i++) {
            if (newArray[i].id === id) {
                let temp = { ...newArray[i], id: newArray[i + 1].id };
                newArray[i] = { ...newArray[i + 1], id: newArray[i].id };
                newArray[i + 1] = temp;
                setData(newArray);
            }
        }
    }
    return (
        <div>
            <h3>To-Do list</h3>
            <Form addTask={addTask} newTask={newTask} updateTask={updateTask} />
            <List
                data={data}
                deleteTask={deleteTask}
                editTask={editTask}
                moveUp={moveUp}
                moveDown={moveDown}
            />
        </div>
    );
}
