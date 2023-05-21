import React from "react";
import "./List.css";
export default function List({ data, deleteTask, editTask }) {
    function handleDelete(id) {
        deleteTask(id);
    }
    function handleEdit(item) {
        editTask(item);
    }
    return (
        <div>
            {data.map((item) => {
                return (
                    <div className="row" key={item.id}>
                        <p>{item.task}</p>
                        <button onClick={() => handleDelete(item.id)}>
                            ❌
                        </button>
                        <button onClick={() => handleEdit(item)}>✏️</button>
                    </div>
                );
            })}
        </div>
    );
}
