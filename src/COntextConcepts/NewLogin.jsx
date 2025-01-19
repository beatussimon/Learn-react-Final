import { useContext, useState } from "react"
import { memberContext } from "../Context/Usercontext";

export default function NewLogin() {
    const [value,setValue] = useState('');
    const {setUser} = useContext(memberContext)

    function handleSubmit(e){
        e.preventDefault()
        setUser(value)
    }
  return (
    <div>
        <form onSubmit={handleSubmit} action="">
            <input value={value} onChange={e=>setValue(e.target.value)} type="text" />
            <button type="submit">Login</button>
        </form>
    </div>
  )
}
    