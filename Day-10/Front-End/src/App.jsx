import { useState } from 'react'
import './App.css'

function App() {
  const [state,setState] = useState({
    bookName : "",
    des : "",
    author : "",
    image : "",
    price : ""
 })
 const handleChange = (e)=>{
    let {name,value} = e.target
    setState({...state, [name] : value})
 }
 const handleSubmit = (e)=>{
   e.preventDefault()
    fetch(`http://localhost:8080/addBook`,{
     method : "POST",
     headers : {
        "Content-Type" : "application/json"
     },
     body : JSON.stringify(state)
    })
    .then((Res)=>Res.json())
    .then((Res)=>console.log(Res))
 }
  return (
    <>
      
    </>
  )
}

export default App
