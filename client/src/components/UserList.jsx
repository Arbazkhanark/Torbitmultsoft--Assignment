import axios from "axios";
import { useEffect, useState } from "react"
import { Toaster, toast } from "sonner";
import UpdateUser from "./UpdateUser";

const UserList = ({users,setUsers}) => {
    const [visible,setVisible]=useState(false);
    const [showModal,setShowModal]=useState(false);
    const [updateId,setUpdateId]=useState();

    useEffect(()=>{
        async function users(){
            const res=await axios.get("http://localhost:4000/allUser");
            console.log(res)
            if(res.data.success){
                setUsers(res.data.user)
            }else{
                setUsers([])
            }
        }users()
    },[])

    async function handleDelete(id){
        const res=await axios.delete(`http://localhost:4000/userDelete/${id}`);
        console.log("DEL",res)
        if(res.data.success){
            const res=await axios.get("http://localhost:4000/allUser");
            if(res.data.success){
                setUsers(res.data.user)
            }
            toast.success("Task Deleted")
        }
    }

    function handleUpdate(id){
        console.log(id);
        setShowModal(true)
        setUpdateId(id)
    }
  return (
    <div className="">
    <Toaster/>
        {users?.length<1 && <h1 className="text-white text-5xl my-40 font-bold">No User Added Right Now</h1> }
        {users?.map((val)=>{
            return <div className="border text-white border-gray-500 rounded-lg transition-shadow shadow-gray-200 w-[60%] p-2 px-6 m-auto my-2 py-3 " key={val._id}>
                <div className="flex justify-between items-center">
                    <h1 className="text-white text-xl font-bold">{val.name}</h1>
                    <button className=" cursor-pointer" onClick={()=>setVisible(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-big-down-dash"><path d="M15 5H9"/><path d="M15 9v3h4l-7 7-7-7h4V9z"/></svg>
                    </button>

                </div>
                {visible && <div className="flex justify-between items-center my-6">
                    <div className="float-left text-left">
                        <p>Age: {val.age}</p>
                        <p>Address: {val.address}</p>
                        <p>Contact Number: {val.phoneNumber}</p>
                        <div className="flex items-center gap-2 mt-10">
                            <p>Hobbies:</p>
                            {val.hobby?.length>1 && val.hobby.map((hobb,i)=><p className="rounded-md outline-none py-1.5 px-3 shadow-sm ring-gray-300 mb-2 sm:text-sm sm:leading-6 text-teal-500 border bg-black border-teal-500" key={i}>{hobb}</p>)}
                        </div>
                        
                    </div>

                    <div>
                        <div>
                        <button onClick={()=>handleUpdate(val._id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide mb-3 text-[blue] lucide-pencil-line"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/><path d="m15 5 3 3"/></svg>
                        </button>
                        <UpdateUser setUsers={setUsers} show={showModal} setShow={setShowModal} id={updateId} />
                        </div>
                        <div>

                        <button onClick={()=>handleDelete(val._id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide text-[tomato] mt-2 lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                        </button>
                        </div>
                    </div>
                </div> }
            </div>
        })}
    </div>
  )
}

export default UserList