// import React from 'react'

import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <nav className=" bg-red-600 h-12 ">
        <div className=" text-3xl text-center font-semibold absolute pl-2">
           <Link to={"/"} className=" text-center text-white">
             Todo App
            </Link>
        </div>
         <div className=" flex justify-end items-end">
                <div className=" flex gap-4 p-1">
                    <Link className=" text-xl font-semibold cursor-pointer bg-white text-black rounded-md p-1"  to={"/login"}>Login</Link>
                    <Link className=" text-xl font-semibold cursor-pointer bg-white text-black rounded-md p-1"  to={"/register"}>Add Todo</Link>
                </div>    
        </div>   
    
    </nav> 
    </>
  )
}

export default Navbar
