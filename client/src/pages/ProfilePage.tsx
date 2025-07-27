import {Box, Button, CardMedia, IconButton, Stack, Typography } from "@mui/material"
import { Delete, Notes, Dashboard, Edit } from "@mui/icons-material";
import ToggleSideBar from "../components/ToggleSideBar"
import { useRef, useState } from "react";

function ProfilePage() {
  const [image, setImage] = useState<File|undefined>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleCallHiddenInput() {
    fileInputRef.current?.click();
    console.log(fileInputRef.current);
  }

  function handleFileUpload (e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    // if(file?.type)
    if(file) setImage(file);
     console.log(image);
  }
  
  return (
     <Box
      component={"main"}
      className="w-full gap-2 flex h-[36rem] py-2"
      sx={{ background: "#011611", height: {xs: "max-content"} }}
    >
      <ToggleSideBar />
      <Stack
        component={"section"}
        className="bg-gray-50 w-full overflow-auto rounded p-4"
        sx={{ ml: { sm: "9rem" }, height: {xs: "100dvh",  md:"35rem"}}}
      >
        <Box
          component={"section"}
          className="flex gap-4 border-b border-gray-300"
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          <Stack direction={"row"} className="justify-between min-w-1/2">
            <Box>
              <Box
                component={"div"}
                className="flex items-center w-full ml-[1rem]"
              >
                <Typography
                  fontSize={"1.8rem"}
                  fontWeight={"bold"}
                  className="text-gray-700 "
                >
                  Profile
                </Typography>
              </Box>
              <Typography
                variant="body2"
                gutterBottom
                className="text-gray-600"
              >
                Design how you want to be addressed
              </Typography>
              <Stack direction={"row"} gap={1}>
                <Button
                  href="/dashboard"
                  color="secondary"
                  variant="contained"
                  startIcon={<Dashboard />}
                  sx={{
                    my: "1rem",
                    textTransform: "none",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                  }}
                  className="w-38 text-gray-50 text-nowrap"
                  title="Write a new note"
                >
                  Dashboard
                </Button>
                <Button
                  href="/dashboard/trash"
                  color="warning"
                  startIcon={<Delete className="mr-[-.5rem]" />}
                  variant="outlined"
                  sx={{
                    my: "1rem",
                    textTransform: "none",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                  }}
                  className="w-20 text-gray-50"
                  title="See deleted notes"
                >
                  Trash
                </Button>
                <Button
                  href="/dashboard/note"
                  color="success"
                  startIcon={<Notes className="mr-[-.5rem]" />}
                  variant="outlined"
                  title="All my notes"
                  sx={{
                    my: "1rem",
                    textTransform: "none",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                  }}
                  className="w-28 text-gray-50 text-nowrap"
                >
                  My Notes
                </Button>
              </Stack>
            </Box>
          </Stack>
          <Stack component={"section"} className="border border-gray-300 w-full p-2 m-2 rounded-xl shadow-2xs gap-12 items-center" direction={"row"}>
            <Box className="w-30 h-30 rounded-full bg-transparent shadow relative z-0"  sx={{borderRadius: "50%"}}>
              <CardMedia component={"img"} image="../../me.png" className="h-30 max-w-30 rounded-full" /> 
              <IconButton onClick={handleCallHiddenInput} title="Update Profile Photo" className="w-10 h-10 z-50 bottom-[.4rem]" sx={{bgcolor: "#6d28d9", color: "#f9fafb", right: "-.5rem", position:"absolute", '&:hover': {
                bgcolor: "oklch(52.7% 0.265 303.9)"}, border: ".3rem solid #e5e7eb" 
              }}>
                <Edit/>
                <input type="file" className="hidden" onChange={handleFileUpload} ref={fileInputRef}/>
              </IconButton>
            </Box>
            <Box>
              <Typography variant="body1" gutterBottom> <strong><i>Name:</i></strong> Waithaka Amos</Typography>
              <Typography variant="body1" gutterBottom> <strong><i>Username:</i></strong> EdenAdmin</Typography>
              <Typography variant="body1" gutterBottom> <strong><i>Emali:</i></strong> waithakaoffices@gmail.com</Typography>
            </Box> 
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

export default ProfilePage;
