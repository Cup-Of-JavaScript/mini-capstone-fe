import React from 'react'
import './Todolist.css'

export const Todolist = () => {

    const onHandleSelectToDo = async () => {

    }

    return (
        <div className="taskboxes">
            <div className="new">
                <input placeholder="New TODO List"></input>
                <button id="new button">Add</button>
            </div>
            <div className="select">
                <select onChange={e => onHandleSelectToDo()}>
                    <option>Select TODO List </option>
                </select>
                <button id="select button">Delete</button>
            </div>
            <div className="add">
                <input placeholder="Add Task"></input>
                <button id="add button">Add</button>
            </div>
        </div>
    )
}
