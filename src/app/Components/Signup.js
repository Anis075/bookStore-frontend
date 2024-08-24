import { NavLink} from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";


export default function Signup() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post(
        "http://localhost:3001/user/signup",
        userInfo
      );
      console.log(res.data);
      if (res.data) {
        // alert("Signup Successfully");
        toast.success("Signup Successfully");
        
      } else {
        // alert("Signup failed. Please try again.");
        toast.error("Signup failed. Please try again.");
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        console.log(err.response.data.message);
        // alert("Error: " + err.response.data.message);
        toast.error("Error: " + err.response.data.message);
      } else {
        console.log(err.message);
        // alert("An unexpected error occurred: " + err.message);
        toast.error("An unexpected error occurred: " + err.message);
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div
        id="signup_modal"
        className="w-[100%] flex items-center justify-center"
      >
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <NavLink
              to={"/"}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </NavLink>
            <div className="flex flex-col items-center justify-center gap-6">
              <h3 className="font-bold text-lg text-pink-500 pointer-events-none">
                Signup
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email">
                    Email:
                    {errors.email && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your Email"
                    className="w-80 px-3 py-1 border rounded-md outline-none focus:border-pink-500"
                    {...register("email", { required: true })}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="name">
                    Name:
                    {errors.name && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your Name"
                    className="w-80 px-3 py-1 border rounded-md outline-none focus:border-pink-500"
                    {...register("name", { required: true })}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="password">
                    Password:
                    {errors.password && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    className="w-80 px-3 py-1 border rounded-md outline-none focus:border-pink-500"
                    {...register("password", { required: true })}
                  />
                </div>
              </div>
              <div className="w-full flex justify-around">
                <button
                  type="submit"
                  className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
                >
                  Signup
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
