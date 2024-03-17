import React, { useState, useEffect, useRef } from "react"
import { UserAuth } from "../context/AuthContext"
import {
  Googleicon,
  Facebookicon,
  Appleicon,
  Mailicon,
} from "../lib/socialicons"
import { Tooltip as ReactTooltip } from "react-tooltip"
import { Closebutton } from "../lib/closebutton"
import { ModalHook } from "../hooks/modalhook"

export default function Signupmodal({ closeModal }: ModalHook) {
  const {
    authUser,
    // signInWithEmail,
    signInWithGoogle,
    signInWithFacebook,
    signInWithApple,
  } = UserAuth()
  const [isActive, setActive] = useState(false)
  const [loginInput, setLoginInput] = useState("")
  const activeDivRef = useRef(null)

  useEffect(() => {
    // Function to handle clicks outside the active div
    const handleClickOutside = (event: any) => {
      if (
        activeDivRef.current &&
        !activeDivRef.current.contains(event.target)
      ) {
        setActive(false) // Deactivate when clicking outside
      }
    }

    // Add event listener to detect clicks outside the active div
    document.addEventListener("click", handleClickOutside)

    // Clean up the event listener
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, []) // Only run this effect once when component mounts

  const handleEmailLogin = () => {}

  return (
    <>
      <div className="fixed inset-0 bg-opacity-75 bg-gray-500 cursor-default"></div>
      <div className="fixed overflow-y-auto	w-screen z-10 inset-0 ">
        <div className="fixed overflow-y-auto w-screen z-10 inset-0 flex items-center justify-center">
          <div className="contact-modal relative bg-white text-left pt-5 pb-4 px-4 rounded-lg overflow-hidden pointer-events-auto sm:w-96">
            <div className="flex justify-end">
              <button
                onClick={(event) => {
                  event.preventDefault()
                  closeModal()
                }}
                className="cursor-pointer hover:bg-opacity-35 hover:bg-slate-300 transition-all w-auto mb-10"
              >
                <Closebutton />
              </button>
            </div>
            <div className="flex justify-center text-center mb-6">
              <h2 className="font-semibold">
                Hello visitor, I would love to get your feedback, there is a
                comment section down below.
              </h2>
            </div>
            <form className="email-login flex justify-center items-center flex-col mb-9">
              <input
                type="submit"
                style={{ visibility: "hidden", width: "0", height: "0" }}
              />
              <div className="visible flex justify-center">
                <div
                  ref={activeDivRef}
                  onClick={() => setActive(true)}
                  className={
                    isActive
                      ? "active flex items-center rounded-sm border border-gray-400 border-solid h-10 w-72"
                      : "flex items-center rounded-sm border border-gray-400 border-solid h-10 w-72"
                  }
                >
                  <div className="flex ps-4 pe-3">
                    <Mailicon />
                  </div>
                  <div className="flex relative">
                    <label className="">
                      {!isActive && !loginInput && (
                        <h2 className="hover:cursor-text flex text-xs justify-center absolute mt-1">
                          Your Email Address
                        </h2>
                      )}
                      <input
                        id="username"
                        type="email"
                        className="text-sm hover:cursor-text"
                        onChange={(event) => setLoginInput(event.target.value)}
                      ></input>
                    </label>
                  </div>
                </div>
              </div>
              <button className="bg-blue-600 rounded-3xl w-72 h-10 mt-5 hover:bg-blue-500 transition-all">
                <h2 className="!text-white font-semibold">Next</h2>
              </button>
            </form>
            <div className="social-login flex flex-col gap-4 items-center">
              <button
                className="flex justify-center items-center w-72 h-10 border border-gray-400 rounded-3xl hover:bg-slate-100 dark:hover:bg-slate-500 transition-all"
                onClick={signInWithGoogle}
              >
                <div className="flex items-center mr-1">
                  <Googleicon />
                </div>
                <span className="center text-sm">Continue with Google </span>
              </button>
              <button
                className="flex justify-center items-center w-72 h-10 border border-gray-400 rounded-3xl hover:bg-slate-100 transition-all"
                onClick={signInWithFacebook}
              >
                <div className="flex items-center mr-1">
                  <Facebookicon />
                </div>
                <span className="center text-sm">Continue with Facebook</span>
              </button>
              <button
                className="flex justify-center items-center w-72 h-10 border border-gray-400 rounded-3xl hover:bg-slate-100 transition-all"
                onClick={signInWithApple}
              >
                <div className="flex items-center mr-1">
                  <Appleicon />
                </div>
                <span className="center text-sm">Continue with Apple</span>
              </button>
              {/* <div className="flex justify-center mt-4">
                <button onClick={signUserOut}>Sign out</button>
              </div> */}
            </div>
            <div className="flex justify-center mt-4">
              {/* <p>{user?.displayName}</p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
