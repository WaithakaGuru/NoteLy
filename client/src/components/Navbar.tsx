import { Box, Button, Drawer, IconButton, Stack } from "@mui/material";
import {
  AppRegistration,
  Dashboard,
  Menu,
  Home,
  Login,
  Logout,
  NoteAdd,
  Notes,
  Person,
} from "@mui/icons-material";
import useNote from "../store/notelyStore";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavButton from "./NavButton";

function Navbar() {
  const path = useLocation().pathname;
  const { loggedIn, addToken, setPath, setIsLoggedIn, setSideBarOpen, sideBarOpen } = useNote();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [imageAvailable, setImageAvailable] = useState(false);
  const imageUrl = "/Notely1.png";

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setImageAvailable(true);
    img.onerror = () => setImageAvailable(false);
    setPath(path)
  }, []);

  function handleToggleProfile() {
    setIsOpen(true);
  }

  function handleLogOut() {
    setIsOpen(false);

    localStorage.removeItem("token");
    setIsLoggedIn(0)
    addToken("");
    navigate("/", { replace: true });
  }

  return (
    <Stack
      component={"nav"}
      className="bg-gray-50 border-0 border-b-gray-400 p-2 h-14 sticky
         top-0 shadow min-w-[100%]"
      direction={"row"}
      justifyContent={"space-between"}
      zIndex={2}
    >
      <Box component={"div"} className="max-h-11 flex items-center gap-1" >
        {loggedIn ?
          <IconButton
            sx={{
            bgcolor: "#364153",
            "&:hover": { bgcolor: "#4a5565" },
            display: { sm: "none" },
            }}
            onClick={() => setSideBarOpen(!sideBarOpen)}
            title="Open Side bar"
            className="w-11 h-11"
          >
            <Menu className="text-gray-50" />
          </IconButton> : ""
        }
        <Button href="/" title="Go to Homepage">
          {imageAvailable ? (
            <img src={imageUrl} width="100px" alt="Notely" />
          ) : (
            <span>
              <Home />
              Notely
            </span>
          )}
        </Button>
      </Box>

      {loggedIn ? (
          <Stack direction={"row"} gap={1}>
            <NavButton
              startIcon={<Dashboard />}
              label="Home"
              href="/dashboard"
              title="Go to Dashboard"
            />
            <NavButton
              startIcon={<Notes />}
              label="My Notes"
              href="/dashboard/note"
              title="See all your notes"
            />
            <NavButton
              startIcon={<NoteAdd />}
              label="New note"
              href="/dashboard/create"
              title="Create a new note"
            />
            <IconButton
              sx={{
                color: "#364153",
                border: "1px solid #364153",
                transition: "border-color .4s ease-in-out",
                background: path==="/dashboard/profile"? "linear-gradient(45deg, #dce6f6, #a9b6ca)" : "",
                "&:hover": {
                  background: "linear-gradient(45deg, #dce6f6, #a9b6ca)",
                  borderColor: "transparent",
                },
              }}
              title="Profile settings"
              onClick={handleToggleProfile}
            >
              <Person />
            </IconButton>
            <Drawer
              open={isOpen}
              anchor="right"
              sx={{ p: 2, height: "10rem" }}
              onClick={() => setIsOpen(false)}
            >
              <NavButton
                label="My profile"
                startIcon={<Person />}
                href="/dashboard/profile"
                m={2}
              />
              <Button
                startIcon={<Logout />}
                onClick={handleLogOut}
                title="Sign Out"
                variant="outlined"
                sx={{ m: 2 }}
                color="error"
              >
                Logout
              </Button>
            </Drawer>
          </Stack>
      ) : (
        <>
          <Stack direction={"row"} gap={2}>
            <Button
              startIcon={<Login />}
              title="login"
              href="/login"
              sx={{
                color: "#364153",
                boxShadow: "0 0 2rem rgba(0,0,0,.2)",
                background:
                  path === "/login"
                    ? "linear-gradient(45deg, #dce6f6, #a9b6ca)"
                    : "",
                "&:hover": {
                  background: "linear-gradient(45deg, #dce6f6, #a9b6ca)",
                  color: "#222",
                },
              }}
              className="hover:opacity-90"
            >
              Login
            </Button>
            <Button
              startIcon={<AppRegistration />}
              title="Create new Notely account"
              href="/register"
              sx={{
                color: "#364153",
                bgcolor: "#e7f0fc",
                background:
                  path === "/register"
                    ? "linear-gradient(45deg, #dce6f6, #a9b6ca)"
                    : "",
                "&:hover": { opacity: ".95" },
              }}
            >
              Register
            </Button>
          </Stack>
        </>
      )}
    </Stack>
  );
}

export default Navbar;
