// import React, { useState, useContext } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import { UserContext } from "../../App";

// export default function SignUp() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();
//   const { updateUserData } = useContext(UserContext);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post(
//         "https://traveller.talrop.works/api/v1/auth/register/",
//         {
//           email,
//           password,
//           name,
//         }
//       );
//       const data = response.data;
//       console.log(data);
//       if (data.StatusCode === 6000) {
//         localStorage.setItem("user_login_data", JSON.stringify(data));
//         updateUserData({ type: "LOGIN", payload: data });
//         navigate("/main");
//       } else {
//         setMessage(data.message);
//       }
//     } catch (error) {
//       console.error(error);
//       setMessage("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <section className="h-screen px-4 items-center bg-gradient-to-br from-blue-500 to-green-500 flex flex-wrap justify-around">
//       <div className="w-full sm:max-w-lg p-5">
//         <h2 className="text-2xl text-white font-bold mb-6">Sign Up</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <input
//               value={name}
//               placeholder="Name"
//               type="text"
//               id="name"
//               name="name"
//               className="w-full px-3 py-2 border-b bg-transparent focus:outline-none"
//               required
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               value={email}
//               placeholder="Email"
//               type="email"
//               id="email"
//               name="email"
//               className="w-full px-3 py-2 border-b bg-transparent focus:outline-none"
//               required
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               value={password}
//               placeholder="Password"
//               type="password"
//               id="password"
//               name="password"
//               className="w-full px-3 py-2 border-b bg-transparent focus:outline-none"
//               required
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-transparent border py-2 px-4 rounded-md hover:bg-green-400"
//           >
//             Sign Up
//           </button>
//         </form>
//         <p className="text-white mt-4">
//           Already have an account? <Link to="/auth/login/">Log in</Link>
//           {message && (
//             <small className="text-sm text-red-600 mb-[25px] items-center">
//               {message}
//             </small>
//           )}
//         </p>
//       </div>
//     </section>
//   );
// }
