import { createContext, useContext, useReducer } from "react";
import { useState } from "react";
import Learn from "./components/Learn";
import SimpleBank from "./components/SimpleBank";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./PageNotFound";
import Nav from "./pages/Nav";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import Login from "./Login";

export const userContext = createContext()

function App(){
    const [user, setUser] = useState('guest')
    return(
        <div> 
            <userContext.Provider value={{user, setUser}}>
                <Login/>
                <Checkout/>
            </userContext.Provider>
            {/* <BrowserRouter>
                <Nav/>
                <Routes>
                    <Route path="/products/:id" element={<Products/>}/>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}>
                        <Route path="profile" element={<Profile/>}/>
                        <Route path="settings" element={<Settings/>}/>
                    </Route>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter> */}
            {/*<Learn/>*/}
            {/* <SimpleBank/> */}
        </div>
    )
}

export default App;
