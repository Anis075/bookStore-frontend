import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
export default function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="flex justify-center items-center h-[100vh] ">
        <div
          id="signup_modal"
          className="w-[100%] flex items-center justify-center"
        >
          <div className="modal-box">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              <Link
                to={"/"}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

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
                      {errors.password && (
                        <span className="text-red-500">*</span>
                      )}
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
                  <div className="flex gap-1">
                    <p className="pointer-events-none">Already Registered?</p>
                    <span
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                      className="underline text-blue-500 cursor-pointer"
                    >
                      Login
                    </span>
                  </div>
                  <Login />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
