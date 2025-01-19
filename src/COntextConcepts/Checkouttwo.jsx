import { useContext } from "react"
import { memberContext } from "../Context/Usercontext"

export default function Checkouttwo() {
    const {user} =useContext(memberContext)
  return (
    <>
        <div>Logged in as: {user}</div>
    </>
  )
}
