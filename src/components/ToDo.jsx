import React from "react";
import Form from "./Form";
import List from "./List";
import { useState, useReducer } from "react";

export default function ToDo() {
    const [newTask, setNewTask] = useState(null);
    const [state, dispatch] = useReducer(reducer, []);
    function reducer(state, action) {
        switch (action.type) {
            case "ADD":
                return [
                    ...state,
                    { id: state.length + 1, task: action.payload },
                ];
            case "REMOVE":
                return state.filter((task) => task.id !== action.payload);
            case "EDIT":
                setNewTask(null);
                return state.map((task) =>
                    task.id === action.payload.id ? action.payload : task
                );
            case "MOVE UP":
                let newArray = [...state];
                for (let i = 1; i < newArray.length; i++) {
                    if (newArray[i].id === action.payload) {
                        let temp = { ...newArray[i], id: newArray[i - 1].id };
                        newArray[i] = {
                            ...newArray[i - 1],
                            id: newArray[i].id,
                        };
                        newArray[i - 1] = temp;
                    }
                }
                return newArray;
            case "MOVE DOWN":
                let moveD = [...state];
                for (let i = 0; i < moveD.length - 1; i++) {
                    if (moveD[i].id === action.payload) {
                        let temp = {
                            ...moveD[i],
                            id: moveD[i + 1].id,
                        };
                        moveD[i] = {
                            ...moveD[i + 1],
                            id: moveD[i].id,
                        };
                        moveD[i + 1] = temp;
                    }
                }
                return moveD;
            default:
                return state;
        }
    }
    function editTask(item) {
        setNewTask(item);
    }
    return (
        <div>
            <h3>To-Do list</h3>
            <Form newTask={newTask} dispatch={dispatch} />
            <List data={state} dispatch={dispatch} editTask={editTask} />
        </div>
    );
}
