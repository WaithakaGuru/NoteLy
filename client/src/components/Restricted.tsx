import type { ReactNode } from "react"
import useNote from "../store/notelyStore"
import {Navigate } from "react-router-dom";

function Restricted({children}: {children: ReactNode}) {
    const {token} = useNote();
    if(!token) {
        return <Navigate to={"/"} replace/>
    }
    return <>{children}</>
}

export default Restricted