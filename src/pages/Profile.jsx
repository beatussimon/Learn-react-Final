import { useLocation } from "react-router-dom"

export default function Profile() {
  const location =useLocation()
  const {name} = location.state || {}
  return (
    <div>Profile for: {name}</div>
  )
}
