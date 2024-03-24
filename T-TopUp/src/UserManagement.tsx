import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

function UserManagement() {
    return (
        <>
            <NavBar />
            <div className="text-center mt-8 text-2xl font-bold"> {/* Apply Tailwind CSS classes for center alignment */}
                User Management
            </div>

            <table className="mx-auto mt-8 border-collapse border border-gray-400"> {/* Apply Tailwind CSS classes to center the table */}
                <thead>
                    <tr>
                        <th className="border border-gray-400 px-4 py-2">Username</th>
                        <th className="border border-gray-400 px-4 py-2">Email</th>
                        <th className="border border-gray-400 px-4 py-2">Name</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Add table body content here */}
                </tbody>
            </table>
            <Footer />
        </>
    );
}

export default UserManagement;
