import sky from "../../assets/sky.jpg";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="w-full h-screen flex">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900]">
        <div className="w-full h-[550px] hidden md:block">
          <img className="w-full h-full" src={sky} alt="/" />
        </div>
        <div className="p-4 flex flex-col justify-around">
          <form>
            <h2 className="text-4xl font-bold text-center mb-8 p-4">
              Create Your Account
            </h2>
            <div className="flex flex-col mb-4">
              <input
                className="border relative bg-gray-100 p-2 rounded"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="flex flex-col mb-4">
              <input
                className="border relative bg-gray-100 p-2 rounded"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div className="flex flex-col mb-4">
              <input
                className="border relative bg-gray-100 p-2 rounded"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="flex flex-col mb-4">
              <input
                className="border relative bg-gray-100 p-2 rounded"
                type="text"
                placeholder="Password"
              />
            </div>
            <div className="flex flex-col mb-4">
              <input
                className="border relative bg-gray-100 p-2 rounded"
                type="text"
                placeholder="Deparment"
              />
            </div>

            <button className="w-full py-2 my-4 rounded bg-blue-600 hover:bg-blue-500 text-white font-bold">
              <Link to="/login">Create Your Account Now!</Link>
            </button>
            <div className="flex items-center justify-center text-indigo-400 ">
              <ion-icon name="arrow-back-outline"></ion-icon>
              <p className="text-center">
                {" "}
                <Link to="/login"> Back to login page</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
