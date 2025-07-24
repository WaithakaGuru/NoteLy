import { Notes, Delete, CalendarMonth, CalendarToday, Today, PushPin} from "@mui/icons-material";
import {Button, Box, Stack, Typography, Paper, IconButton} from "@mui/material"
import ToggleSideBar from "../components/ToggleSideBar";
import MarkdownPreview from "../components/MarkdownPreview";

const MockNote = {
  title: "This ia a mock Note",
  synopsis: "This is a mock Note Synopsis",
  content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, quos amet minima fuga ducimus quae reiciendis laboriosam velit veritatis ut."
}

function SingleNotePage() {
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
        <Box
          component={"section"}
          className="flex gap-4 border-b border-gray-300"
          sx={{ flexDirection: { xs: "column", md: "row" } }}
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
                  align="left"
                >
                  Study Bay
                </Typography>
              </Box>
              <Typography
                variant="body2"
                gutterBottom
                className="text-gray-600"
              >
                Take time to read and review this note
              </Typography>
              <Stack direction={"row"} gap={1}>
                <Button
                  href="dashboard/note"
                  color="secondary"
                  variant="contained"
                  startIcon={<Notes/>}
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
                  color="warning"
                  startIcon={<Delete className="mr-[-.5rem]" />}
                  variant="outlined"
                  sx={{
                    my: "1rem",
                    textTransform: "none",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                  }}
                  className="w-40 text-gray-50 text-nowrap"
                  title="Delete this note"
                >
                  Move to Trash
                </Button>
                <Button
                  href="/dashboard/update/1"
                  color="success"
                  startIcon={<Notes className="mr-[-.5rem]" />}
                  variant="outlined"
                  title="Update this note"
                  sx={{
                    my: "1rem",
                    textTransform: "none",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                  }}
                  className="w-28 text-gray-50 text-nowrap"
                >
                 Update
                </Button>
              </Stack>
            </Box>
          </Stack>
          <Stack className="border-l border-gray-300 md:pl-20 pl-6">
            <Typography
              variant="subtitle1"
              fontWeight={700}
              fontSize={"1.5rem"}
              className="text-gray-600"
              gutterBottom
            >
              Summary
            </Typography>
            <Paper
              className="w-96 p-1 flex gap-2 m-1 border-1 border-gray-200"
              elevation={0}
            >
              <Box
                className="bg-blue-500 rounded-full w-10 h-10 inline-flex justify-center"
                sx={{ bgcolor: "#od99ff" }}
              >
                <CalendarToday className="text-gray-50 my-auto " />
              </Box>
              <Box>
                <Typography
                  className="text-gray-600 inline align-top"
                  fontSize={"1rem"}
                  fontWeight={600}
                >
                  Today
                </Typography>
                <Typography
                  className="text-gray-500  align-top"
                  fontSize={".8rem"}
                  fontWeight={700}
                >
                  No Notes added today
                </Typography>
              </Box>
            </Paper>
            <Paper
              className="w-96 p-1 flex gap-2 m-1 border-1 border-gray-200"
              elevation={0}
            >
              <Box
                className="bg-orange-500 rounded-full w-10 h-10 inline-flex justify-center"
                sx={{ bgcolor: "#od99ff" }}
              >
                <CalendarMonth className="text-gray-50 my-auto " />
              </Box>
              <Box>
                <Typography
                  className="text-gray-600 inline align-top"
                  fontSize={"1rem"}
                  fontWeight={600}
                >
                  This week
                </Typography>
                <Typography
                  className="text-gray-500  align-top"
                  fontSize={".8rem"}
                  fontWeight={700}
                >
                  No Notes added this week
                </Typography>
              </Box>
            </Paper>
            <Paper
              className="w-96 p-1 flex gap-2 m-1 border-1 border-gray-200"
              elevation={0}
            >
              <Box
                className="bg-lime-500 rounded-full w-10 h-10 inline-flex justify-center"
                sx={{ bgcolor: "#od99ff" }}
              >
                <Today className="text-gray-50 my-auto " />
              </Box>
              <Box>
                <Typography
                  className="text-gray-600 inline align-top"
                  fontSize={"1rem"}
                  fontWeight={600}
                >
                  This Month
                </Typography>
                <Typography
                  className="text-gray-500  align-top"
                  fontSize={".8rem"}
                  fontWeight={700}
                >
                  No Notes added this month
                </Typography>
              </Box>
            </Paper>
          </Stack>
        </Box>
        <Box component={"section"} className="w-full p-2 mt-8">
          <Typography
            variant="h6"
            className="text-gray-700 flex justify-between"
            sx={{ mb: 2 }}
            fontWeight={"bold"}
            fontSize={"2rem"}
          >
            Detailed note <Box fontSize={"1rem"}> Pin this note <IconButton><PushPin/></IconButton></Box>
          </Typography>
          <MarkdownPreview state={MockNote} visibility="public"/>
        </Box>
      </Stack>
    </Box>
  )
}

export default SingleNotePage;
