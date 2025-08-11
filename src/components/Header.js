import { useNavigate } from "react-router-dom";
import {auth} from "../utils/Firebase";
import { signOut } from "firebase/auth";
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { useDispatch } from "react-redux"
import { addUser, removeUser } from "../utils/UserSlice"
import { LOGO } from "../utils/Constants";

const Header = () => {
    const navigate = useNavigate(); 
    const dispatch = useDispatch();

    const handleLogout = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
        // An error happened.
            console.log(error);
        });
    }

    useEffect(()=>{
        // this will be called whenever the user logins/signups/logouts, all in one place 
        // so we dispatch redux actions from here 
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const {uid,email,displayName,photoURL} = user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
            navigate('/browse');
        } else {
            // User is signed out
            dispatch(removeUser());
            navigate('/');
        }
        });
        return () => unsubscribe(); //unsubscribe when the component unmounts
    },[dispatch,navigate])

    return (
        <div className="absolute flex justify-between items-center w-screen px-5 py-2 bg-gradient-to-b from-black z-10">
            <img 
            className="w-40"
            src={LOGO}
            alt="Logo"/>
            <div className="cursor-pointer">
                <p onClick={handleLogout} className="font-bold underline text-white">Logout</p>
            </div>
        </div>
    )
}
export default Header