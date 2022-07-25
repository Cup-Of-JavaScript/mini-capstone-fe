import { React, useState, useEffect, useRef } from 'react'
import axios from "axios"
import './Todolist.css'


export const Todolist = () => {

    let inputListRef = useRef(null);
    let inputRefTask = useRef(null)

    const [todoLists, getTodolists] = useState([])
    const [tasks, getTasks] = useState([])
    
    const [buttonText, getButtonText] = useState('')
    const [listId, getlistId] = useState(0)
    const [Delete, getDelete] = useState("")


    useEffect(() => {
        const fetch = async () => {
            let r = await axios.get(`http://localhost:5152/todolists`)
            getTodolists(r.data)
        }
        fetch()
    }, []) // Empty array indicates that this get called the first time this component is loaded into the DOM.

    const onHandleClick = async () => {
        let res = {
            name: inputListRef.current.value
        }
        await axios.post(`http://localhost:5152/todolists/`, res)
        return (res);
    }

    const onHandleSelectToDo = async (todoListId) => {
        getlistId(todoListId)
        console.log(listId)
        let result = await axios.get(`http://localhost:5152/todolists`)
        getTodolists(result.data)

        let result2 = await axios.get(`http://localhost:5152/todolists/${todoListId}/tasks`)
        getTasks(result2.data)
               
            if (tasks.status_id = 2) {
            getButtonText("Not Done")
        } else if (tasks.status_id = 1) {
            getButtonText("Done")
        }
        else {
            getButtonText("Status Unknown")
        }

    }

    const HandleDelete = async () => {
        getDelete(0);
    }

    const addTaskClickHandler = async (listId) => {
        let data = {
            "task_name": inputRefTask.current.value
        }
        let r = await axios.post(`http://localhost:5152/todolists/${listId}/tasks`, data)
        console.log(r)
    }

    const updateTaskStatus = async (taskId) => {
        let data = {
            "status_id": 1
        }
        await axios.put(`http://localhost:5152/tasks/${taskId}`, data)
        
        let response2 = await axios.get(`http://localhost:5152/todolists/${taskId}/tasks`)
        
        console.log(response2)

        if (response2.data.status_id = 1) {
            getButtonText("Not Done")
        } else if (response2.data.status_id = 2) {
            getButtonText("Done")
        } else {
            getButtonText("Status Unknown")
        }
    }

    return (
        <div className='main'>
            <div className='header'>
                TODO List Application
            </div>
            <div className='taskboxes'>
                <div className="new">
                    <input ref={inputListRef} placeholder="New TODO List"></input>
                    <button className="btn btn1" onClick={() => onHandleClick()}>Add List</button>
                </div>
                <div className='select'>
                    <select onChange={(e) => onHandleSelectToDo(e.target.value)}>
                        {todoLists.map((i) => (
                            <option key={i.todo_list_id} value={i.todo_list_id} placeholder="Select TODO List ">{i.name}</option>
                        ))}
                    </select>

                    <button className="btn btn3" onClick={() => HandleDelete()}>Delete</button>

                </div>
                <div className="add">
                    <input ref={inputRefTask} placeholder="Add Task" />
                    <button onClick={() => addTaskClickHandler()} className="btn btn3">Add Task</button>
                </div>
                <div>
                    <table>
                        <tbody>
                            { tasks.map(tasks => (
                                <tr key={tasks.task_id}>
                                    <td>{tasks.name} </td>
                                    <td><button value={tasks.task_id} onClick={(e) => updateTaskStatus(e.target.value)} className="btn btn3">{buttonText}</button> </td>
                                </tr>))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
