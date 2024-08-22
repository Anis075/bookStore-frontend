import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <button
              onClick={() => document.getElementById("my_modal_3").close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-20">
                <div className="flex flex-col items-center  gap-16">
                  <h3 className="font-bold text-lg text-pink-500 pointer-events-none">
                    Login
                  </h3>
                  <div className="flex flex-col justify-center items-center gap-4">
                    <div className="flex items-center gap-14">
                      <label htmlFor="email">
                        {errors.email && (
                          <span className="text-red-500">*</span>
                        )}
                        Email:
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your Email"
                        className="w-80 px-3 py-1 border rounded-md outline-none focus:border-pink-500"
                        {...register("email", { required: true })}
                      />
                    </div>
                    <div className="flex items-center gap-5">
                      <label htmlFor="password">
                        {errors.password && (
                          <span className="text-red-500">*</span>
                        )}
                        Password:
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
                </div>
                <div className="w-full flex justify-around">
                  <button
                    type="submit"
                    className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
                  >
                    Login
                  </button>
                  <div className="flex gap-1">
                    <p className="pointer-events-none">Not Registered? </p>
                    <Link
                      to={"/signup"}
                      className="underline text-blue-500 cursor-pointer"
                      onClick={() =>
                        document.getElementById("my_modal_3").close()
                      }
                    >
                      Signup
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}
