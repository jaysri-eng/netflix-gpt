import { checkValidData } from "../utils/Validate";
import Header from "./Header"
import { useRef, useState } from "react"

const Login = () => {
    const [signup, SetSignup] = useState(false);
    const [error,setError] = useState("");
    const email = useRef(null);
    const password = useRef(null);
    const fullName = useRef(null);

    const toggleForm = () => {
        SetSignup(!signup);
    }
    const handleButtonClick = () => {
        //validate the form data 
        const message = checkValidData(email.current.value, password.current.value);
        console.log(message);
        setError(message);
    }
    return (
        <div>
            <Header/>
            <div className="absolute">
                <img 
            className=""
            src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_medium.jpg" 
            alt="Logo"/>
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className="absolute p-12 bg-black w-3/12 my-40 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <input type="text" placeholder="Email" ref={email} className="p-2 my-2 w-full rounded-lg bg-white bg-opacity-30"/>
                <input type="password" placeholder="Password" ref={password} className="p-2 my-2 w-full rounded-lg bg-white bg-opacity-30"/>
                {signup ? 
                    <div>
                        <input type="text" placeholder="Full-name" ref={fullName} className="p-2 my-2 w-full rounded-lg"/>
                    </div> : null
                }
                <button onClick={handleButtonClick} className="p-4 my-4 bg-red-700 w-full rounded-lg">{signup ? "Signup" : "Login"}</button>
                <p className="text-red-500 font-bold">{error}</p>
                <div className="my-10">
                    <p>{signup ? "Login instead?" :"New to Netflix?"}</p>
                    <p onClick={toggleForm} className="underline cursor-pointer">{signup ? "Login" : "Signup"}</p>
                </div>
            </form>
        </div>
    )
}
export default Login

