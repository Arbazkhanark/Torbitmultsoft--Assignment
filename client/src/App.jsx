import "./App.css"
import { useState } from "react"
import Footer from "./components/Footer"
import AddUser from "./components/AddUser"
import UserList from "./components/UserList"

const App = () => {
  const [show,setShow]=useState(false);
  const [users,setUsers]=useState([])
  return (
    <div className="text-center">
      <h1 className="text-white text-2xl font-bold my-10">User Management</h1>
      <div className="flex m-auto w-[12%] items-center justify-between rounded-md px-3 py-1.5 text-sm mb-2 mt-4  leading-6 shadow-sm bg-teal-500 text-white cursor-pointer" onClick={()=>setShow(true)}>
        <button>Add New User
        </button>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-plus"><path d="M8 2v4"/><path d="M16 2v4"/><path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"/><path d="M3 10h18"/><path d="M16 19h6"/><path d="M19 16v6"/></svg>
      </div>

      <AddUser users={users} setUsers={setUsers} show={show} setShow={setShow} />

      <UserList users={users} setUsers={setUsers} />
      <Footer/>
    </div>
  )
}

export default App