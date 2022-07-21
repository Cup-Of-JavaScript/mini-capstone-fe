import React from 'react'
import './Todolist.css'

export const Todolist = () => {

    const onHandleSelectToDo = async () => {

    }

    return (

        <div className='main'>
            <div className='header'>
                TODO List Application
            </div>
            <div className='taskboxes'>
                <div className='new'>
                    <input placeholder="New TODO List"></input>
                    <button class="btn btn1">Add</button>
                </div>
                <div className='select'>
                    <select onChange={e => onHandleSelectToDo()}>
                        <option>Select TODO List </option>
                    </select>
                    <button class="btn btn2">Delete</button>
                </div>
                <div className='add'>
                    <input placeholder="Add TODO List Task"></input>
                    <button class="btn btn3">Add</button>
                </div>
            </div>
        </div>
    )
}
