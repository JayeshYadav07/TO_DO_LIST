import React from "react";
import "./List.css";
export default function List({ data, dispatch, editTask }) {
    function handleDelete(id) {
        dispatch({ type: "REMOVE", payload: id });
    }
    function handleEdit(item) {
        editTask(item);
    }
    function handleUp(item) {
        dispatch({ type: "MOVE UP", payload: item.id });
    }
    function handleDown(item) {
        dispatch({ type: "MOVE DOWN", payload: item.id });
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
