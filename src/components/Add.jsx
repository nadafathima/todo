import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';


function Add() {
  const [todo,setTodo]=useState({
    title:"",status:""
  }) 
  const navigate=useNavigate()
  console.log(todo);
  const clicked=()=>{
    alert(`Title is ${todo.title} and status is ${todo.status}`)
    navigate('/')
  }
  return (
    <>
      <div className='w-100 d-flex justify-content-center align-items-center' style={{height:'80vh'}}>
        <div className="w-50 border shadow bg-light p-5">
            <h4>Add Todo</h4>
            <div>
                <input type="text" className='form-control mb-3' onChange={(e)=>{setTodo({...todo,title:e.target.value})}} placeholder='Enter Title' />
                <label htmlFor="op" className='mb-3'>
                    Status:
                    <select name="" onChange={(e)=>{setTodo({...todo,status:e.target.value})}} id="op" className='form-control'>
                        <option value="" selected hidden></option>
                        <option value="true">Completed</option>
                        <option value="false">Not Completed</option>
                    </select>
                </label>
                <button className='btn btn-info'onClick={clicked}>Submit</button>
            </div>

        </div>
      </div>
    </>

  )
}

export default Add
