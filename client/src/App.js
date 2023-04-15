import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

// Importing Routes
import { Browse, Home, LandingPage, Login, SignUp, Subscribe, Upload } from "./components";
import { Dashboard } from "./components/Dashboard";

import { AnimatePresence } from 'framer-motion';

import {app} from './config/firebase.config';
import { getAuth } from "firebase/auth";
import { validateUser } from "./api";
import { useStateValue } from "./context/StateProvider";
import { actionType } from "./context/reducer";

const App = () => {
    const firebaseAuth = getAuth(app);
    const navigate = useNavigate();

    const [{user}, dispatch] = useStateValue();

    const [auth, setAuth] = useState(false || window.localStorage.getItem("auth") === "true");
    
    useEffect(() => {
        firebaseAuth.onAuthStateChanged((userCred) => {
            if(userCred){
                userCred.getIdToken().then((token) => {
                    // console.log(token);
                    validateUser(token).then((data) => {
                        dispatch({
                            type: actionType.SET_USER,
                            user: data,
                        })
                    })
                })
            }else{
                setAuth(false);
                dispatch({
                    type: actionType.SET_USER,
                    user: null,
                })
                window.localStorage.setItem("auth", "false");
                console.log(window.location);
                
                // Restricting the user from gaining access to the main page without logging in
                const names = ['/home', '/browse', '/subscribe', '/upload'];

                if(names.indexOf(window.location.pathname) !== -1){
                    navigate('/login');
                }
                
            }
        })
    }, []);

    return (
        <AnimatePresence mode="wait">
            <div className="flex items-center justify-center">
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/login" element={<Login setAuth={setAuth}/>}/>
                    <Route path='/signup' element={<SignUp setAuth={setAuth}/>} />

                    <Route path="/home" element={<Home />}/>
                    <Route path="/browse" element={<Browse />}/>
                    <Route path="/upload" element={<Upload />}/>
                    <Route path="/subscribe" element={<Subscribe />}/>
                    
                    <Route path="/dashboard/*" element={<Dashboard />} />
                </Routes>
            </div>
        </AnimatePresence>
    )
}

export default App;