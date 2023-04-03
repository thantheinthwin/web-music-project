import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Browse, Home, LandingPage, Login, Subscribe, Upload } from "./components";
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
                navigate("/login");
            }
        })
    }, []);

    return (
        <AnimatePresence mode="wait">
            <div className="flex items-center justify-center bg-sky-blue-50">
                <Routes>
                    <Route path="/*" element={<LandingPage/>}/>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/browse" element={<Browse />}/>
                    <Route path="/upload" element={<Upload />}/>
                    <Route path="/subscribe" element={<Subscribe />}/>
                    <Route path="/login" element={<Login setAuth={setAuth}/>}/>
                </Routes>
            </div>
        </AnimatePresence>
    )
}

export default App;