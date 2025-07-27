import { Dashboard, Delete, NoteAdd, Notes, Person } from "@mui/icons-material";
import { Card, CardMedia, Typography, Stack, Button} from "@mui/material";
import { useLocation } from "react-router-dom";
import { useGetUserDetails } from "../services/fetchRequests";

function SideBar(props?: {handlePinned?: () => void, handlePublic?: () => void }) {
  const {pathname: path} = useLocation();
  const {data: user} = useGetUserDetails();
    localStorage.setItem("userId", user?.id)

  function doNothing() {
    console.log("");
  }
  return (
    <Stack
      component={"aside"}
      className="max-w-42 fixed top-12 h-full w-64 overflow-hidden ml-[-1.2rem] sm:border-r sm:border-t border-gray-400 rounded"
      sx={{ zIndex: { xs: -1, sm: 1 } }}
    >
      <Card
        className="rounded-2xl bg-transparent p-6"
        elevation={0}
        sx={{ bgcolor: "transparent" }}
      >
        <CardMedia
          component={"img"}
          image="/me.png"
          alt="DP"
          className="h-20 max-w-20 rounded-2xl"
        />
        <Typography
          variant="subtitle1"
          fontWeight={"bold"}
          className="text-lime-400 my-0 py-0 text-nowrap"
        >
          Hello {user?.firstName}
        </Typography>
        <Typography
          variant="subtitle2"
          className="text-gray-50 py-0 font-bold"
          fontSize={".6rem"}
        >
          {user?.emailAddress}
        </Typography>
        {(path !== "/dashboard/create" && !path.includes("/dashboard/update") &&
         path !== "/dashboard/profile" && !(path.includes("/dashboard/note/")))?  (
        <>
        <Button sx={{my:".5rem"}} variant="outlined" onClick={props?.handlePinned || doNothing}>
          <Typography
            className="text-gray-50 text-nowrap"
            fontWeight={"bold"}
            textTransform={"none"}
            sx={{ml: "-.9rem"}}
          >
            Pinned Notes
          </Typography>
        </Button>
        <Button variant="outlined" onClick={props?.handlePublic || doNothing} >
          <Typography
            className="text-gray-50 text-nowrap"
            fontWeight={"bold"}
            textTransform={"none"}
            sx={{ml: "-.9rem"}}
          >
            Public Notes
          </Typography>
        </Button>
      </>) : "" }
      </Card>
      <Stack component={"div"} className="justify-center gap-4 p-6">
        <a href="/dashboard">
          <Typography fontWeight={"bold"} className="flex items-center gap-1 w-max p-1 rounded"
            sx={{color: path==="/dashboard"? "#f9fafb" : "#99a1af", '&:hover': {bgcolor: "#1e2939"},
               bgcolor: path==="/dashboard"? "#1e2939" : "none"}}
            >
            <Dashboard/> Dashboard
          </Typography>
        </a>
       < a href="/dashboard/create">
          <Typography fontWeight={"bold"} className="flex items-center gap-1 p-1 rounded"
            sx={{color: path==="/dashboard/create"? "#f9fafb" : "#99a1af", '&:hover': {bgcolor: "#1e2939"},
               bgcolor: path==="/dashboard/create"? "#1e2939" : "none"}}
          >
            <NoteAdd/> New Note
          </Typography>
        </a>
        <a href="/dashboard/note">
          <Typography fontWeight={"bold"} className="flex items-center gap-1 p-1 rounded"
            sx={{color: path==="/dashboard/note"? "#f9fafb" : "#99a1af", '&:hover': {bgcolor: "#1e2939"},
               bgcolor: path==="/dashboard/note"? "#1e2939" : "none"}}
          >
           <Notes/>  My notes
          </Typography>
        </a>
        <a href="/dashboard/trash">
          <Typography fontWeight={"bold"} className="flex items-center w-max gap-1 p-1 rounded"
            sx={{color: path==="/dashboard/trash"? "#f9fafb" : "#99a1af", '&:hover': {bgcolor: "#1e2939"},
               bgcolor: path==="/dashboard/trash"? "#1e2939" : "none"}}
          >
            <Delete/> Trash Notes
          </Typography>
        </a>
        <a href="/dashboard/profile">
          <Typography fontWeight={"bold"} className="flex items-center gap-1 p-1 rounded"
            sx={{color: path==="/dashboard/profile"? "#f9fafb" : "#99a1af", '&:hover': {bgcolor: "#1e2939"},
               bgcolor: path==="/dashboard/profile"? "#1e2939" : "none"}}
          >
            <Person/> Profile
          </Typography>
        </a>
      </Stack>
    </Stack>
  );
}

export default SideBar;
