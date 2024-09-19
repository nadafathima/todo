import React, { useEffect , useState} from 'react'
import { Link} from 'react-router-dom'
import axios from 'axios'
import { Router } from 'react-router-dom'

function Home() {
  const [todos, setTodos]=useState([])

    useEffect(()=>{
        getData()

    },[])

    const getData=async ()=>{
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
            console.log(res)
            console.log(res.data);
            setTodos(res.data)
    }

  return (
    <>
      <div className='p-5'>
    <Link to={'/add'} className='btn btn-success'>Add Todo</Link>
        {
        todos.length > 0 ?
        <table className='table table-bordered'>
          <thead>
            <th>ID</th>
            <th>User ID</th>
            <th>Title</th>
            <th>Status</th>
  
          </thead>
          <tbody>
            {todos?.map(item =>(
              <tr>
                <td>{item.id}</td>
                <td>{item.userId}</td>
                <td>{item.title}</td>
                <td>{item.complete? "completed":"not completed"}</td>
  
              </tr>
            ))}
          </tbody>
        </table>:
        <h1>Todos not Available</h1>
        }
      </div>
    </>

    )
  }
  
export default Home
