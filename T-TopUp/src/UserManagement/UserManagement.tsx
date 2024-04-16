import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Axios from "axios";
import { useEffect, useState } from "react";

function UserManagement() {

    const [adminList, setAdminList] = useState([]);

    const getAdmin = () => {
        Axios.get('http://localhost:8000/admindatabase')
        .then((response) => {
            setAdminList(response.data);
            console.log(response.data);
        })
        .catch((error) => {
            console.error('Error fetching games:', error);
        });
    };

    useEffect(() => {
        getAdmin();
    }, []); // Call getGames() once when component mounts

    return (
        <>
            <body>

                <header><NavBar/></header>

                <div className="flex justify-end mr-48">
                    <a href="add-admin">
                        <button
                            type="button"
                            className="w-24 h-8 bg-green-500 text-white text-center font-semibold rounded-md mt-8"
                        >
                            Add User
                        </button>
                    </a>
                </div>

                <div className="text-center mt-8 text-2xl font-bold">
                    {" "}
                    {/* Apply Tailwind CSS classes for center alignment */}
                    Admin Management
                </div>

                <table className="mx-auto mt-8 border-collapse border border-gray-400 mb-20">
                    {" "}
                    {/* Apply Tailwind CSS classes to center the table */}
                    <thead>
                        <tr>
                            <th className="border px-40 py-2 bg-slate-100 py-5">Username</th>
                            <th className="border px-40 py-2 bg-slate-100">Email</th>
                            <th className="border px-40 py-2 bg-slate-100">Name</th>
                            <th className="border px-10 py-2 bg-slate-100">Button</th>
                        </tr>
                    </thead>

                    {adminList.map((val,key)=>{
                        return(
                            <tbody>
                                {" "}
                                <th className="border font-normal px-30 py-1">{val.username}</th>
                                <th className="border font-normal px-10 py-1">{val.email}</th>
                                <th className="border font-normal px-5 py-1">{val.fname} {val.lname}</th>
                                <th className="border font-normal px-20 py-1">
                                    <button
                                        type="button"
                                        className="w-16 h-6 bg-red-500 text-white text-center text-xs font-semibold rounded-md my-2"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        type="button"
                                        className="w-16 h-6 bg-slate-500 text-white text-center text-xs font-semibold rounded-md my-2 ml-5"
                                    >
                                        Edit
                                    </button>
                                </th>
                            </tbody>
                        )
                    })}
                    
                </table>

                <footer><Footer/></footer>
                
            </body>
        </>
    );
}

export default UserManagement;