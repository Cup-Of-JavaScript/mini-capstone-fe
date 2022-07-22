import React from 'react'
import { useState,useRef } from 'react'
import axios from "axios"
import './Todolist.css'

export const Todolist = () => {
    let inputListRef = useRef(null);
    let selectListRef = useRef(null);
    let [todoList, getTodolist] = useState("");
    let [Delete,setDelete] = useState("");
    
        

    const onHandleClick = async () => {
      let res = {
       name: inputListRef.current.value
      }
      await axios.post(`http://localhost:5152/todolists/`,res)
      return(res);
    }

    const onHandleSelectToDo = async () => {
        let name = selectListRef.current.value;
        let r = await axios.get(`http://localhost:5152/todolists/${name}`)
        getTodolist(r.data.name)
    }

    const HandleDelete = async () => {
        setDelete(0);
     }

    return (
        <div className="taskboxes">
            <div className="new">
                <input ref = {inputListRef} placeholder="New TODO List"></input>
                <button id="new button" onClick={()=> onHandleClick()}>Add</button>
            </div>
            <div className="select">
                <select ref={selectListRef} value={todoList} onChange={(e) => onHandleSelectToDo(e.target.value)}>
                    <option >Select TODO List </option>
                </select>
                <button onClick={() => HandleDelete()} id="select button">Delete</button>
            </div>
            <div className="add">
                <input placeholder="Add Task"></input>
                <button id="add button">Add</button>
            </div>
        </div>
    )
}