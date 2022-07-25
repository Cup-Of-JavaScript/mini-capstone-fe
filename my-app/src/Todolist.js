import { React, useState, useEffect, useRef } from 'react'
import axios from "axios"
import './Todolist.css'


export const Todolist = () => {
    let inputListRef = useRef(null);
    let [todoLists, setTodolists] = useState([]);


    useEffect(() => {
        const fetch = async () => {
            let r = await axios.get(`http://localhost:5152/todolists`)
            setTodolists(r.data)
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

    const onHandleSelectToDo = async () => {
        let result = await axios.get(`http://localhost:5152/todolists`)
        return (result.data)
    }

    const HandleDelete = async () => {
        const x = document.getElementById("select")
        x.remove(x.selectedIndex)
    }


    return (

        <div className='main'>
            <div className='header'>
                TODO List Application
            </div>
            <div className='taskboxes'>
                <div className='select'>
                    <select onChange={() => onHandleSelectToDo()}>

                        {todoLists.map((i) => (

                            <option key={i.todo_list_id} value={i.name} placeholder="Select TODO List ">{i.name}</option>

                        ))}
                    </select>
                    <input type="button" onClick={() => HandleDelete()}value="Delete"></input>
                    <div className='add'>
                        <input placeholder="Add TODO List Task"></input>
                        <button className="btn btn3">Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
