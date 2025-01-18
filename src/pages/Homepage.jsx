import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Homepage() {
  const [name, setName] = useState('')
  const navigate = useNavigate()
  function handleClick(){
    navigate('/dashboard/profile', {state:{name}})

  }
  return (
    <>
        <div>This is my Homepage</div>
        <input onChange={(e)=>setName(e.target.value)} type="text" value={name}/>
        <button onClick={handleClick}>Go to profile</button>
    </>
  )
}
