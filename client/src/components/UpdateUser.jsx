import axios from "axios";
import { useState } from "react";
import { Toaster, toast } from "sonner";

const UpdateUser = ({ show, setShow, id, setUsers }) => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    age: 0,
    hobby: [""],
    files: [""],
    phoneNumber: "",
    address: "",
  });

  // console.log("ID: ",id)
  async function handleUpdate() {
    if (
      !userDetails.name ||
      !userDetails.age ||
      !userDetails.hobby ||
      !userDetails.phoneNumber ||
      !userDetails.address
    ) {
      toast.error("Fill the required felids");
      return;
    }
    const res = await axios.put(
      `http://localhost:4000/userUpdate/${id}`,
      userDetails
    );
    // console.log(res)
    if (res.data.success) {
      setShow(false);
      const res = await axios.get("http://localhost:4000/allUser");
      if (res.data.success) {
        setUsers(res.data.user);
      }
      toast.success("User Updated");
    }
  }

  function handleHobbies(e) {
    const hobbiesStr = e.target.value;
    const hobbies = hobbiesStr.split(",");
    setUserDetails({ ...userDetails, hobby: hobbies });
  }

  return (
    <div
      className={`${
        show ? "block" : "hidden"
      } inset-0 text-white fixed bg-opacity-30 backdrop-blur-sm bg-black`}
    >
      <Toaster />
      <div className="border border-gray-500 rounded-lg transition-shadow shadow-gray-200 w-[30%] p-2 px-6 m-auto my-40">
        <button className="float-right" onClick={() => setShow(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x-circle"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m15 9-6 6" />
            <path d="m9 9 6 6" />
          </svg>
        </button>
        <h1 className="text-xl text-center my-2">Update User</h1>
        <input
          type="text"
          onChange={(e) =>
            setUserDetails({ ...userDetails, name: e.target.value })
          }
          className="block w-full rounded-md outline-none py-1.5 px-3 shadow-sm ring-gray-300 mb-2 sm:text-sm sm:leading-6 text-teal-500 border bg-black border-teal-500"
          placeholder="Enter Name"
        />

        <input
          type="text"
          onChange={(e) =>
            setUserDetails({ ...userDetails, address: e.target.value })
          }
          className="block w-full rounded-md outline-none py-1.5 px-3 shadow-sm ring-gray-300 mb-2 sm:text-sm sm:leading-6 text-teal-500 border bg-black border-teal-500"
          placeholder="Enter Address"
        />

        <input
          type="text"
          onChange={handleHobbies}
          className="block w-full rounded-md outline-none py-1.5 px-3 shadow-sm ring-gray-300 mb-2 sm:text-sm sm:leading-6 text-teal-500 border bg-black border-teal-500"
          placeholder="Enter Hobbies"
        />
        {/* <input
          type="text"
          onChange={(e)=>setUserDetails({...userDetails,files:e.target.value})}
          className="block w-full rounded-md outline-none py-1.5 px-3 shadow-sm ring-gray-300 mb-2 sm:text-sm sm:leading-6 text-teal-500 border bg-black border-teal-500"
          placeholder="Select Files"
        />         */}
        <input
          type="number"
          onChange={(e) =>
            setUserDetails({ ...userDetails, age: e.target.value })
          }
          className="block w-full rounded-md outline-none py-1.5 px-3 shadow-sm ring-gray-300 mb-2 sm:text-sm sm:leading-6 text-teal-500 border bg-black border-teal-500"
          placeholder="Enter Age"
        />
        <input
          type="number"
          onChange={(e) =>
            setUserDetails({ ...userDetails, phoneNumber: e.target.value })
          }
          className="block w-full rounded-md outline-none py-1.5 px-3 shadow-sm ring-gray-300 mb-2 sm:text-sm sm:leading-6 text-teal-500 border bg-black border-teal-500"
          placeholder="Enter Phone Number"
        />

        <button
          type="button"
          className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm mb-2 mt-4  leading-6 shadow-sm bg-teal-500 text-white`}
          onClick={handleUpdate}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default UpdateUser;
