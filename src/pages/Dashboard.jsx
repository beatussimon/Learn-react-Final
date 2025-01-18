import { Link, Outlet, useParams } from "react-router-dom"
import Profile from "./Profile"
import Settings from "./Settings"

export default function Dashboard() {

  return (
      <div>This is my Dashboard
        <ul>
          <li><Link to='profile'>Profile</Link></li>
          <li><Link to='settings'>Settings</Link></li>
          <li><Link to='/products'>Products</Link></li>
        </ul>
        <Outlet/>
      </div>
  )
}
