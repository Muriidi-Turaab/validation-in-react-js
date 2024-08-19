import { useState } from "react";
import Validation from "./Validation";


const Login = () => {

    const [values, setValues] = useState({
        name : '',
        password : ''
    })

    

    const [errors, setErrors] = useState({})
    console.log(errors)

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        setErrors(Validation(values));
    }
   

    

    return(
        <div className="h-screen w-full flex justify-center items-center bg-gray-200">
            <form onSubmit={handelSubmit} className="bg-white p-8 sm:w-[400px] w-[350px] sm:h-[400px] h-[350px] rounded-md shadow-md">
                <div>
                    <label className="text-2xl font-bold" htmlFor="">Username:</label> <br />
                    <input className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4" type="text" placeholder="Enter your Username" name="name" value={values.name} onChange={handleChange}/>
                    {errors.name && <p style={{color : "red", fontSize: "13px"}}>{errors.name}</p>}
                </div>


                <div>
                    <label className="text-2xl font-bold" htmlFor="">Password:</label> <br />
                    <input className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4" type="text" placeholder="Enter your Password" name="password" value={values.password} onChange={handleChange}/>
                    {errors.password && <p style={{color : "red", fontSize: "13px"}}>{errors.password}</p>}
                </div>

                <div>
                    <button type="submit" className="bg-indigo-500 w-full px-2 py-2 mt-2 rounded-md text-white">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;