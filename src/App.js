import React, {  useEffect, useState } from 'react'

import './App.css'

const App = () => {
  const [userData,setUsersData] = useState([])
  const [name,setName] = useState('')
  const [date,setDate] = useState('')
  const [milesrun,setMilesRun] = useState('')

  const getData = async (req,res) => {
    const url = "https://daynt-backend-assignment.onrender.com//runnerboard/allrunners" ;
    const options = {
      method : "GET"
    }

    try {
      const response = await fetch(url,options)
      const data = await response.json()
      setUsersData(data)
    } catch (error) {
      console.log(error)
    }
  }

  const onHandleForm = async(e) => {
    e.preventDefault()
    let url = "https://daynt-backend-assignment.onrender.com//add-runnerboard"
    let options = {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        name,
        date,
        milesrun
      })
    }
    
    try {
      const response = await fetch(url,options)
      const data = await response.json()
      console.log(data)
      alert("Runner added successfully")
      getData()
      setName('')
      setDate('')
      setMilesRun('')
    } catch (error) {
      console.log(error)
      alert("there is error",error)
    }
  
  }


  const onDelete = async(id) => {
    const url = `https://daynt-backend-assignment.onrender.com//runnerboard/deleterunner/${id}`
    const options = {
      method : "DELETE",
      headers : {
        "Content-Type" : "application/json"
      }
    }
    
    try {
      const response = await fetch(url,options)
      const data = await response.json()
      console.log(data)
      getData()
      alert("Runner deleted successfully")  
      } catch (error) {
        console.log("there is an error",error)
      }
    
  }

  useEffect(()=> {
    getData()
  },[])



  return (
    <div>
      <h1> Runner Dashboard </h1>
      <form onSubmit={onHandleForm}>
        <div className='inputs-container'>
          <input type='text' placeholder='Enter Your Name' onChange={(e) =>setName(e.target.value)} value={name} required/><br/>
          <input type='date' onChange={(e) =>setDate(e.target.value)} value={date} required/><br/>
          <input type='text' onChange={(e) =>setMilesRun(e.target.value)} placeholder='Enter Miles run' value={milesrun} required/><br/>
        </div> 
        <div className='button-container'>
          <button type='submit' className='submit-btn btn'> Submit </button>
        </div>
      </form>
      <ul className='users-container'>
        {userData.length === 0 ? <h2 className='no-runner-text'> No Runners Data Available </h2> : userData.map((user) => (
          <li key={user._id} className='user-container'>
            <h2> {user.name} </h2>
            <h3> Date : <span className='paragraph'>{new Date(user.date).toLocaleDateString('en-GB')}</span> </h3>
            <h3> Miles Run : <span className='paragraph'> {user.milesrun} </span> </h3>
            <button onClick={() =>onDelete(user._id)} className='delete-btn btn'> Delete </button>
          </li>
        ))}
        </ul>
    </div>
  )
}

export default App
