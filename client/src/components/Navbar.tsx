import { Button, Stack} from "@mui/material";
import {AppRegistration, Login, Logout} from "@mui/icons-material"
import useNote from "../store/notelyStore"
import { Link } from "react-router-dom";

function Navbar() {
    const {loggedIn} = useNote();
    return (
        <Stack component={"nav"} className="bg-gray-50 border-0 border-b-gray-400 p-2 h-14 sticky
         top-0 shadow min-w-[100%]"  direction={"row"} justifyContent={"space-between"} zIndex={2}>
        {loggedIn?
            (<>
                
            </>)

        : 
        (<>
           <Button href="/"  title="Go to Homepage">
                <img src="Notely1.png" width={"100px"}/>
           </Button>
            <Stack direction={"row"} gap={2} >
                <Button startIcon={<Login/>} 
                 title="login"
                 sx={{ color: "#364153", boxShadow: "0 0 2rem rgba(0,0,0,.2)"}}
                 className="hover:opacity-90"
                >
                    Login
                </Button>
                <Button startIcon={<AppRegistration/>}  
                    title="Create new Notely account"
                    variant="contained"
                    sx={{bgcolor: "#364153", '&:hover': {opacity: ".95"}}}
                >
                    Register
                </Button>
            </Stack>
        </> )
        }
        </Stack>
    )
}

export default Navbar
