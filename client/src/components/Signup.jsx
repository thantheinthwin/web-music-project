import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


import {app} from '../config/firebase.config'
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword} from 'firebase/auth'

import { signup, validateUser } from '../api'

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
                navigate("/user/home", {replace: true})
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
      navigate("/user/home", {replace: true})
      }
  }, [])

  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword: ''
  })

  //validate password
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  
  const [validPassword, setValidPassword] = useState(false);
  const [matchPassword, setMatchPassword] = useState(false);

  useEffect(() => {
    const result = PWD_REGEX.text()
    if(userData.password === userData.confirmpassword){
      setMatchPassword(true);
    }else(
      setMatchPassword(false)
    )

  }, [userData])

  const handleSubmit = async (e) => {
    createUserWithEmailAndPassword(firebaseAuth, userData.email, userData.password).then((userCred) => {
      if(userCred){
        setAuth(true);
        window.localStorage.setItem("auth", "true");

        firebaseAuth.onAuthStateChanged((userCred) => {
          if(userCred){
            // console.log(userCred.reloadUserInfo.passwordHash);
            userCred.getIdToken().then((token) => {
              signup(userData, token).then((data) => {
                dispatch({
                  type: actionType.SET_USER,
                  user: data,
                })
              })
            })
            navigate("/user/home", {replace: true})
          } else {
            setAuth(false);
            dispatch({
              type: actionType.SET_USER,
              data: null,
            })
            navigate("/login")
          }
        })
      }
    }).catch((err) => {
      console.log(err);
      window.alert(err);
    })
    e.preventDefault();
  }

  const handle = (e) => {
    const newdata = { ...userData }
    newdata[e.target.id] = e.target.value
    setUserData(newdata)
  }

  return (
    <div className="relative w-screen h-screen">
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="grid grid-flow-col grid-rows-3 gap-4 p-12 rounded-md shadow-xl bg-neutral-900 backdrop-blur-md lg:max-w-4xl lg:p-4 xl:max-w-6xl">
          <div className="hidden col-span-1 row-span-3 bg-white rounded-l-md lg:flex">
            <img
              src={loginPic}
              alt="loginPic"
              className="object-scale-down w-96"
            />
          </div>
          <div className="grid col-span-2 row-span-3 pb-5 space-y-10 justify-items-stretch lg:w-96">
            <div className="grid gap-2 mx-auto text-center lg:pt-12 ">
              <div className="flex justify-center w-full">
                <img
                  src={Logo}
                  alt="https://storyset.com/user"
                  className="w-1/4 lg:w-1/6"
                />
              </div>
              <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
                Sign Up
              </h2>
              <p className="mt-2 text-sm font-light leading-4">
                Welcome to MeloStream,
                <br /> where music comes alive!
              </p>
            </div>
            <div className="w-full">
              <form
                method="POST"
                className="grid w-4/5 gap-5 mx-auto"
                onSubmit={handleSubmit}
              >
                <div className="w-full">
                  <div className="relative">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      placeholder="Username"
                      value={userData.username}
                      onChange={(e) => handle(e)}
                      className="w-full h-10 text-sm placeholder-transparent border border-gray-300 rounded-md peer bg-neutral-900 caret-blue-300 focus:rounded-md focus:border-0 focus:ring-2 focus:ring-inset focus:ring-blue-300"
                      required
                    ></input>
                    <label
                      htmlFor="username"
                      className="absolute p-1 text-sm transition-all -top-4 left-2 bg-neutral-900 peer-placeholder-shown:left-2 peer-placeholder-shown:top-1 peer-focus:-top-4 peer-focus:left-2 peer-focus:bg-neutral-900 peer-focus:p-1 peer-focus:text-sm peer-focus:text-blue-300"
                    >
                      Username
                    </label>
                  </div>
                </div>
                <div className="w-full">
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={userData.email}
                      onChange={(e) => handle(e)}
                      className="w-full h-10 text-sm placeholder-transparent border border-gray-300 rounded-md peer bg-neutral-900 caret-blue-300 focus:rounded-md focus:border-0 focus:ring-2 focus:ring-inset focus:ring-blue-300"
                      required
                    ></input>
                    <label
                      htmlFor="email"
                      className="absolute p-1 text-sm transition-all -top-4 left-2 bg-neutral-900 peer-placeholder-shown:left-2 peer-placeholder-shown:top-1 peer-focus:-top-4 peer-focus:left-2 peer-focus:bg-neutral-900 peer-focus:p-1 peer-focus:text-sm peer-focus:text-blue-300"
                    >
                      Email
                    </label>
                  </div>
                </div>
                <div className="w-full">
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Password"
                      value={userData.password}
                      aria-invalid={validPassword ? "false" : "true"}
                      onChange={(e) => handle(e)}
                      className="w-full h-10 text-sm placeholder-transparent border border-gray-300 rounded-md peer bg-neutral-900 caret-blue-300 focus:rounded-md focus:border-0 focus:ring-2 focus:ring-inset focus:ring-blue-300"
                      required
                    ></input>
                    <label
                      htmlFor="password"
                      className="absolute p-1 text-sm transition-all -top-4 left-2 bg-neutral-900 peer-placeholder-shown:left-2 peer-placeholder-shown:top-1 peer-focus:-top-4 peer-focus:left-2 peer-focus:bg-neutral-900 peer-focus:p-1 peer-focus:text-sm peer-focus:text-blue-300"
                    >
                      Password
                    </label>
                  </div>
                </div>
                <div className="w-full">
                  <div className="relative">
                    <input
                      id="confirmpassword"
                      name="confirmpassword"
                      type="password"
                      placeholder="Confirm Password"
                      value={userData.confirmpassword}
                      onChange={(e) => handle(e)}
                      className="w-full h-10 text-sm placeholder-transparent border border-gray-300 rounded-md peer bg-neutral-900 caret-blue-300 focus:rounded-md focus:border-0 focus:ring-2 focus:ring-inset focus:ring-blue-300"
                      required
                    ></input>
                    <label
                      htmlFor="confirmpassword"
                      className="absolute p-1 text-sm transition-all -top-4 left-2 bg-neutral-900 peer-placeholder-shown:left-2 peer-placeholder-shown:top-1 peer-focus:-top-4 peer-focus:left-2 peer-focus:bg-neutral-900 peer-focus:p-1 peer-focus:text-sm peer-focus:text-blue-300"
                    >
                      Confirm Password
                    </label>
                  </div>
                </div>
                <div className="flex justify-center pt-1">
                  <input
                    id="agreedTerm"
                    name="agreedTerm"
                    type="checkbox"
                    className="rounded-md focus:ring-transparent"
                  ></input>
                  <label
                    htmlFor="agreedTerm"
                    className="ml-2 text-sm font-medium "
                  >
                    I agree with the{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      terms and conditions
                    </a>
                    .
                  </label>
                </div>
                <button disabled={!matchPassword} className="py-2 text-black transition-all duration-200 ease-in-out rounded-md hover:bg-indigo-500 hover:text-white bg-primary disabled:bg-neutral-600 disabled:text-white" type='submit'>
                  {matchPassword ? "Sign Up" : "Passwords don't match"}
                </button>
                <div className="flex justify-center w-full justify-self-center">
                  <div
                    className="flex items-center justify-center w-full gap-2 px-4 py-4 text-white transition-all duration-200 ease-in-out border border-white rounded-md cursor-pointer hover:text-black hover:bg-white lg:py-2"
                    onClick={loginWithGoogle}
                  >
                    <FcGoogle className="text-2xl" />
                    Sign in with Google
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup