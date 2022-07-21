import {React, useState} from 'react'
import './Todolist.css'


export const Todolist = () => {
    let [Delete,setDelete] = useState("");

    const onHandleSelectToDo = async () => {
    }

    const HandleDelete = async () => {
        setDelete(0);
     }
    
    return (

        <div className='main'>
            <div className='header'>
                TODO List Application
            </div>
            <div className='taskboxes'>
                <div className='new'>
                    <input placeholder="New TODO List"></input>
                    <button className="btn btn1">Add</button>
                </div>
                <div className='select'>
                    <select onChange={e => onHandleSelectToDo()}>
                        <option>Select TODO List </option>
                    </select>
                    <button onClick={() => HandleDelete()}>Delete</button>
                </div>
                <div className='add'>
                    <input placeholder="Add TODO List Task"></input>
                    <button className="btn btn3">Add</button>
                </div>
            </div>
        </div>
    )
}
