import toast from "react-hot-toast";
import { useAuth } from "../Context/AuthProvider";

export default function Logout({setAuthUser}) {
  const handleLogout = () => {
    try {
      setAuthUser(null);
      toast.success("Logout Successfully");
      window.location.reload();
    } catch (err) {
      toast.error("Error" + err.message);
    }
  };
  return (
    <>
      <div>
        <button
          className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </>
  );
}
