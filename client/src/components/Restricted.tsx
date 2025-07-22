import type { ReactNode } from "react"
import useNote from "../store/notelyStore"
import { useNavigate } from "react-router-dom";

function Restricted(child: ReactNode) {
    const {token} = useNote();
    const navigate = useNavigate(); 
    if(!token) {
       return  navigate("/", {replace: true})
    }
    return {child}
}

export default Restricted