import { Stack, Box, Button, TextField, Typography } from '@mui/material'
import ToggleSideBar from '../components/ToggleSideBar'
import TrashNote from '../components/TrashNote'
import { Dashboard, Notes } from '@mui/icons-material'

function TrashNotesPage() {
  return (
    <Box
      component={"main"}
      className="w-full h-[36rem] py-2 gap-2 flex"
      sx={{ background: "#011611", height: {xs: "max-content"} }}
    >
        <ToggleSideBar/>
        <Stack
            component={"section"}
            className="bg-gray-50 w-full h-[35rem] overflow-auto rounded-xl p-4"
            sx={{ ml: { sm: "9rem" }, height: {xs: "100dvh"} }}
        >
            <Stack direction={"row"} className="justify-between min-w-1/2">
            <Box>
              <Box
                component={"div"}
                className="flex  w-full"
              >
                <Typography
                  fontSize={"1.8rem"}
                  fontWeight={"bold"}
                  className="text-gray-700"
                >
                  Trash Notes
                </Typography>
               
              </Box>
              <Typography
                variant="body2"
                gutterBottom
                className="text-gray-600"
              >
                Review and restore previously deleted notes
              </Typography>
              <Stack direction={"row"} gap={1}>
                <Button
                  href="dashboard/create"
                  color="secondary"
                  variant="contained"
                  startIcon={<Notes />}
                  sx={{
                    my: "1rem",
                    textTransform: "none",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                  }}
                  className="w-38 text-gray-50 text-nowrap"
                  title="Write a new note"
                >
                  My notes
                </Button>
              
                <Button
                  href="/dashboard"
                  color="success"
                  startIcon={<Dashboard className="mr-[-.5rem]" />}
                  variant="outlined"
                  title="Go to Dashboard"
                  sx={{
                    my: "1rem",
                    textTransform: "none",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                  }}
                  className="w-32 text-gray-50 text-nowrap"
                >
                  Dashboard
                </Button>
              </Stack>
              <TextField
                className="min-w-fit w-80"
                label="Search for notes"
                sx={{ my: 2, borderRadius: "1rem" }}
              />
            </Box>
            </Stack>
                <Box component={"section"} className="w-full p-2 mt-8">
                <Typography
                    variant="h6"
                    className="text-gray-700"
                    sx={{ mb: 2 }}
                    fontWeight={"bold"}
                    fontSize={"2rem"}
                >
                    Recently deleted Notes
                </Typography>
                <Stack direction={"row"} className="justify-left gap-2 flex-wrap">
                    <TrashNote/>
                    <TrashNote/>
                    <TrashNote/>
                    <TrashNote/>
                </Stack>
                </Box>
        </Stack>
    </Box>
  )
}

export default TrashNotesPage