import { Button, Drawer, IconButton, Stack} from "@mui/material";
import {AppRegistration, Dashboard, Login, Logout, NoteAdd, Person} from "@mui/icons-material"
import useNote from "../store/notelyStore"
import { useEffect, useState } from "react";

function Navbar() {
    const {loggedIn} = useNote();
    const [isOpen, setIsOpen] = useState(false)

    const [imageAvailable, setImageAvailable] = useState(false);
    const imageUrl = "Notely1.png";

    useEffect(() => {
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => setImageAvailable(true);
        img.onerror = () => setImageAvailable(false);
    }, []);
     
    function handleToggleProfile(){
        setIsOpen(true);
    }

    function handleLogOut () {
        setIsOpen(false)
    }

    return (
        <Stack component={"nav"} className="bg-gray-50 border-0 border-b-gray-400 p-2 h-14 sticky
         top-0 shadow min-w-[100%]"  direction={"row"} justifyContent={"space-between"} zIndex={2}>
           <Button href="/"  title="Go to Homepage">
                {imageAvailable ? (
                    <img src={imageUrl} width="100px" alt="Notely" />
                ) : (
                    <span>Notely</span>
                )}
           </Button>
        {!loggedIn?
            (<>
               <Stack direction={"row"} gap={2}>
                    <Button startIcon={<Dashboard/>} variant="outlined" title="Go to Dashboard" href="/dashboard"
                        sx={{color: "#364153", borderColor: "#364153", '&:hover':{background: "linear-gradient(45deg, #dce6f6, #a9b6ca)", border:"none" }}}
                    >
                        Home
                    </Button>
                    <Button startIcon={<NoteAdd/>} variant="outlined" title="Create a new note" href="dashboard/create"
                        sx={{color: "#364153", borderColor: "#364153", '&:hover':{background: "linear-gradient(45deg, #dce6f6, #a9b6ca)", border: "none" } }}
                    >
                        New Note
                    </Button>
                    <IconButton sx={{color: "#364153", border: "1px solid #364153", '&:hover':{background: "linear-gradient(45deg, #dce6f6, #a9b6ca)", border:"none" } }}
                        title="Profile settings" onClick={handleToggleProfile} 
                    >
                        <Person/>
                    </IconButton>
                    <Drawer open={isOpen} anchor="right" sx={{p:2, height: "10rem"}} onClick={()=>setIsOpen(false)}>
                        <Button startIcon={<Person/>} onClick={handleLogOut} title="Go to profile settings"
                            variant="outlined" color="primary" href="dashboard/profile"
                             sx={{mx:2, my: 1, '&:hover': { background: "linear-gradient(45deg, #dce6f6, #a9b6ca)", border: "none"}}}
                        >
                            My Profile
                        </Button>
                        <Button startIcon={<Logout/>} onClick={handleLogOut} title="Sign Out"
                            variant="outlined" sx={{m:2}} color="error"
                        >
                            Logout
                        </Button>
                    </Drawer>
               </Stack>
            </>)

        : 
        (<>
            <Stack direction={"row"} gap={2} >
                <Button startIcon={<Login/>} 
                 title="login"
                 sx={{ color: "#364153", boxShadow: "0 0 2rem rgba(0,0,0,.2)", '&:hover': {
                     background: "linear-gradient(45deg, #dce6f6, #a9b6ca)", color: "#222"}}}
                 className="hover:opacity-90" 
                >
                    Login
                </Button>
                <Button startIcon={<AppRegistration/>}  
                    title="Create new Notely account" variant="contained" 
                    sx={{bgcolor: "#364153", color: "#364153", background: "linear-gradient(45deg, #dce6f6, #a9b6ca)",
                        '&:hover': {opacity: ".95", }}}
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
