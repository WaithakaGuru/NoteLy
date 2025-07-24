import {Box, Button, Stack, Typography } from "@mui/material"
import { Delete, Notes, Dashboard } from "@mui/icons-material";
import ToggleSideBar from "../components/ToggleSideBar"

function ProfilePage() {
  return (
     <Box
      component={"main"}
      className="w-full gap-2 flex h-[36rem] py-2"
      sx={{ background: "#011611", height: {xs: "max-content"} }}
    >
      <ToggleSideBar/>
      <Stack
        component={"section"}
        className="bg-gray-50 w-full overflow-auto rounded-xl p-4"
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
        </Box>
      </Stack>
    </Box>
  )
}

export default ProfilePage;
