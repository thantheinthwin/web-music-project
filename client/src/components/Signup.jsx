import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import {app} from '../config/firebase.config'
import { getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { validateUser } from '../api'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'

import {FcGoogle} from 'react-icons/fc'

// Importing picture
import { loginPic, Logo } from '../assets/img'

const Signup = ({setAuth}) => {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();
    
    const navigate = useNavigate();

    const [{user}, dispatch] = useStateValue();

    // Logging in with Google Auth using firebase
  const loginWithGoogle = async () => {
    await signInWithPopup(firebaseAuth, provider).then((userCred) => {
      if(userCred){
        setAuth(true);
        window.localStorage.setItem("auth", "true");

        firebaseAuth.onAuthStateChanged((userCred) => {
            if(userCred){
                userCred.getIdToken().then((token) => {
                validateUser(token).then((data) => {
                dispatch({
                    type: actionType.SET_USER,
                    user: data,
                })
                })
            })
                navigate("/home", {replace: true})
            }else{
                setAuth(false);
                dispatch({
                type: actionType.SET_USER,
                user: null,
                })
                navigate("/login");
            }
            })
        }
        }).catch((err) => {
        console.log(err);
        })
    }

     // Routing the user back to home screen if the user has already logged in
    useEffect(() => {
        if(window.localStorage.getItem("auth") === "true"){
        navigate("/home", {replace: true})
        }
    }, [])

  return (
    <div className='relative w-screen h-screen'>
         <div className='absolute inset-0 flex items-center justify-center p-4 bg-blue-50'>
            <div className="grid grid-flow-col grid-rows-3 gap-4 p-12 bg-white rounded-md shadow-xl lg:p-4 lg:max-w-4xl xl:max-w-6xl backdrop-blur-md">
                <div className="hidden col-span-1 row-span-3 rounded-l-md lg:flex bg-blue-50">
                    <img src={loginPic} alt="loginPic" className='object-scale-down w-96'/>
                </div>
                <div className="grid col-span-2 row-span-3 pb-5 space-y-10 lg:w-96 justify-items-stretch">
                    <div className="grid gap-2 mx-auto text-center lg:pt-12 ">
                        <div className='flex justify-center w-full'>
                        <img src={Logo} alt="https://storyset.com/user" className='w-1/4 lg:w-1/6'/>
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">Sign Up</h2>
                        <p className="mt-2 text-sm leading-4 text-gray-600 lg:text-base">Music for everyone.<br/> Have some fun.</p>
                    </div>
                    <div className='w-full lg:w-2/3 justify-self-center'>
                        <form method='POST' className='grid justify-center grid-flow-row gap-3 space-y-3'>
                        <div className='w-full'>
                            <div className='relative'>
                            <input id="username" name='username' type='text' placeholder='Username' className='w-full h-10 text-gray-900 placeholder-transparent border-0 border-b-2 border-gray-300 focus:rounded-md focus:ring-2 focus:border-0 focus:ring-blue-300 peer focus:ring-inset' required></input>
                            <label for='username' className='absolute text-sm text-gray-600 transition-all -top-3 left-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-focus:-top-4 peer-focus:left-2 peer-focus:text-sm peer-focus:text-blue-300 peer-focus:bg-white peer-focus:p-1'>Username</label>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='relative'>
                            <input id="email" name='email' type='email' placeholder='Email' className='w-full h-10 text-gray-900 placeholder-transparent border-0 border-b-2 border-gray-300 focus:rounded-md focus:ring-2 focus:border-0 focus:ring-blue-300 peer focus:ring-inset' required></input>
                            <label for='email' className='absolute text-sm text-gray-600 transition-all -top-3 left-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-focus:-top-4 peer-focus:left-2 peer-focus:text-sm peer-focus:text-blue-300 peer-focus:bg-white peer-focus:p-1'>Email</label>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='relative'>
                            <input id="password" name='password' type='password' placeholder='Password' className='w-full h-10 text-gray-900 placeholder-transparent border-0 border-b-2 border-gray-300 focus:rounded-md focus:ring-2 focus:border-0 focus:ring-blue-300 peer focus:ring-inset' required></input>
                            <label for='password' className='absolute text-sm text-gray-600 transition-all -top-3 left-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-focus:-top-4 peer-focus:left-2 peer-focus:text-sm peer-focus:text-blue-300 peer-focus:bg-white peer-focus:p-1'>Password</label>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='relative'>
                            <input id="confirmpassword" name='confirmpassword' type='password' placeholder='Confirm Password' className='w-full h-10 text-gray-900 placeholder-transparent border-0 border-b-2 border-gray-300 focus:rounded-md focus:ring-2 focus:border-0 focus:ring-blue-300 peer focus:ring-inset' required></input>
                            <label for='confirmpassword' className='absolute text-sm text-gray-600 transition-all -top-3 left-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-focus:-top-4 peer-focus:left-2 peer-focus:text-sm peer-focus:text-blue-300 peer-focus:bg-white peer-focus:p-1'>Confirm Password</label>
                            </div>
                        </div>
                        <div className='flex justify-center pt-1'>
                            <input id="agreedTerm" name="agreedTerm" type="checkbox" className='rounded-md focus:ring-transparent'></input>
                            <label for='agreedTerm' className='ml-2 text-sm font-medium text-gray-600'>I agree with the <a href="#" className="text-blue-600 hover:underline">terms and conditions</a>.</label>
                        </div>
                        <button className='py-2 transition-all duration-100 ease-in-out bg-blue-300 rounded-md shadow-md hover:shadow-lg'>Sign Up</button>
                        </form>
                    </div>
                    <div className='flex justify-center w-full px-4 justify-self-center lg:px-0'>
                        <div className='flex items-center justify-center w-full px-4 py-4 transition-all duration-100 ease-in-out bg-white rounded-md shadow-md cursor-pointer lg:py-2 lg:w-2/3 hover:shadow-lg'
                            onClick={loginWithGoogle}>
                            <FcGoogle className='text-2xl'/>
                            Sign in with Google
                        </div>
                    </div>
                    
                </div>
            </div>
         </div>
    </div>
  )
}

export default Signup