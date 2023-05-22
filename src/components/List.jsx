import React from "react";
import "./List.css";
export default function List({ data, deleteTask, editTask, moveUp, moveDown }) {
    function handleDelete(id) {
        deleteTask(id);
    }
    function handleEdit(item) {
        editTask(item);
    }
    function handleUp(item) {
        moveUp(item.id);
    }
    function handleDown(item) {
        moveDown(item.id);
    }
    return (
        <div>
            {data.map((item) => {
                return (
                    <div className="row" key={item.id}>
                        <p>{item.task}</p>
                        <button onClick={() => handleDelete(item.id)}>
                            ❌Delete
                        </button>
                        <button onClick={() => handleEdit(item)}>✏️Edit</button>
                        <button onClick={() => handleUp(item)}>⬆️Up</button>
                        <button onClick={() => handleDown(item)}>⬇️Down</button>
                    </div>
                );
            })}
        </div>
    );
}
