import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function UserManagement() {
    return (
        <>
            <NavBar />  
                      
            <div className="flex justify-end mr-48">
                <a href="add-admin">
                    <button type="button" className="w-24 h-8 bg-green-500 text-white text-center font-semibold rounded-md mt-8">
                        Add User
                    </button>
                </a>
            </div>

            <div className="text-center mt-8 text-2xl font-bold"> {/* Apply Tailwind CSS classes for center alignment */}
                Admin Management
            </div>
                    
            
            <table className="mx-auto mt-8 border-collapse border border-gray-400 mb-20"> {/* Apply Tailwind CSS classes to center the table */}
                <thead>
                    <tr>
                        <th className="border px-40 py-2 bg-slate-100 py-5">Username</th>
                        <th className="border px-40 py-2 bg-slate-100">Email</th>
                        <th className="border px-40 py-2 bg-slate-100">Name</th>
                        <th className="border px-10 py-2 bg-slate-100">
                            Button
                        </th>
                    </tr>
                </thead>
                <tbody> {/* Add table body content here */}
                        <th className="border font-normal px-40 py-1">Username1</th>
                        <th className="border font-normal px-40 py-1">Email1</th>
                        <th className="border font-normal px-40 py-1">Name1</th>
                        <th className="border font-normal px-20 py-1">
                            <button type="button" className="w-16 h-6 bg-red-500 text-white text-center text-xs font-semibold rounded-md my-2">
                                Delete
                            </button>
                            <button type="button" className="w-16 h-6 bg-slate-500 text-white text-center text-xs font-semibold rounded-md my-2 ml-5">
                                Edit
                            </button>
                        </th>
                </tbody>
                <tbody> {/* Add table body content here */}
                        <th className="border font-normal px-40 py-1">Username1</th>
                        <th className="border font-normal px-40 py-1">Email1</th>
                        <th className="border font-normal px-40 py-1">Name1</th>
                        <th className="border font-normal px-20 py-1">
                            <button type="button" className="w-16 h-6 bg-red-500 text-white text-center text-xs font-semibold rounded-md my-2">
                                Delete
                            </button>
                            <button type="button" className="w-16 h-6 bg-slate-500 text-white text-center text-xs font-semibold rounded-md my-2 ml-5">
                                Edit
                            </button>
                        </th>
                </tbody>
                
            </table>
            <Footer />
        </>
    );
}

export default UserManagement;
