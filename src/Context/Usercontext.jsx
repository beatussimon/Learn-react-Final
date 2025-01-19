import { createContext, useState } from "react"
const memberContext = createContext()

function UsertProvider({children}) {
    const [user,setUser] = useState('guest')
  return (
    <memberContext.Provider value={{user, setUser}}>
        {children}
    </memberContext.Provider>
  )
}
export {UsertProvider, memberContext}
