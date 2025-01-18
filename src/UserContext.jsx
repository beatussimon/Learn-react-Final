import { Children, useState } from "react";
import { createContext } from "react";

export const userContext = createContext()

    export default function UserProvider({children}) {
    const [user, setUser] = useState('guest')
  return (
    <div>
        <userContext.Provider value={{user, setUser}}>
            {children}
        </userContext.Provider>
    </div>
  )
}

