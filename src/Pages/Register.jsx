import React, { useContext, useState } from "react";
import { MoonLoader } from "react-spinners";
import { POST, UPLOAD } from "../Helpers/Api";
import LoadingOverlay from "react-loading-overlay";
import { Link, useNavigate, } from "react-router-dom";
import { AppContext } from "../Helpers/MyContext";

function Register() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState();
  const [form, setFormData] = useState({
    email: "",
    password: "",
    phone: "",
    confirmPassword: "",
    name: "",
    role: "buyer",
  });

  const handleChange = (e) => {
    setFormData({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      if (form.password === form.confirmPassword) {
        setLoading(true);
        try {
          const image = await UPLOAD(file);
          POST("user/register", { ...form, image })
            .then((data) => {
              localStorage.setItem("token", data.token);
              setUser(data.token);
              navigate("/home");
              alert("Register Successful");
            })
            .catch((error) => {
              console.log(error);
              alert(error.message);
            })
            .finally(() => {
              setLoading(false);
            });
        } catch (error) {
          setLoading(false);
          alert(error);
        }
      } else {
        alert("Both passwords should be same");
      }
    } else {
      alert("File is not selected");
    }
  };

  return (

      <div className="relative flex items-center justify-center h-screen">
        <div className="relative z-10 flex flex-col items-center justify-center w-[55vw] h-[80vh] bg-white shadow-lg rounded-lg">
          <div className="flex w-full h-full p-4">
            <div className="flex-1 flex flex-col items-center justify-center p-8 bg-white border border-gray-200 rounded-lg shadow-sm">
              <form className="w-full max-w-sm flex flex-col items-center space-y-2 text-[#4b0082]" onSubmit={handleSubmit}>
                <h5 className="text-xl font-medium text-gray-900 text-center">
                  Sign in to{" "}
                  <span className="text-[#4b0082] font-extrabold">
                    FRESH ROOTS
                  </span>
                </h5>

                <div className="w-full max-h-full">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium "
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 - text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-2 text-sm font-medium "
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>


                <div className="w-full">
                  <label
                    htmlFor="file"
                    className="block mb-2 text-sm font-medium "
                  >
                    Add photo
                  </label>
                  <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
                  />
                </div>

              <button type="submit" className="w-full flex justify-center items-center text-white bg-[#563571] hover:bg-[#4b0082] focus:ring-2 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  {loading ? (<MoonLoader color="black"  size={15} />) : ("REGISTER")}
                </button>
              </form>
            </div>

            <div className="grid grid-rows-3 flex-1 bg-[#9865f7] ml-2 rounded-lg shadow-md p-4">
              <div className="flex items-center justify-center flex-grow">
                <span className="font-serif italic text-center text-[#00008B]">
                  <h1 className="text-5xl">Namastey!</h1>
                  <p className="text-xl">Join our platform by registering today...</p>
                </span>
              </div>
              <div className="flex items-center justify-center flex-grow">
                <h2 className="text-center text-lg font-medium text-white">
                  " Revitalizing the agricultural economy by <br />cutting out the middlemen and bringing farmers and buyers closer. "
                </h2>
              </div>
              <div className="flex flex-col items-center justify-center flex-grow px-10 py-5 text-xl">
                <p className="mb-2 text-sm font-medium text-[#00008B]">Already have an account?</p>
                <Link to="/login" className="text-white bg-gradient-to-r from-[#6c42ba] via-[#6e42bf] to-[#7632f5] hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-white shadow-lg font-medium rounded-lg text-lg px-7 py-3.5 text-center">
                  LOGIN
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
  );
}

export default Register;
