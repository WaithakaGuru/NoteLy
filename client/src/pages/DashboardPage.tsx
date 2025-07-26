import {
  CalendarMonth,
  CalendarToday,
  Delete,
  NoteAdd,
  Notes,
  Today
} from "@mui/icons-material";
import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ToggleSideBar from "../components/ToggleSideBar";
import NoNote from "../components/NoNote";
import { useGetAllNotes } from "../services/fetchRequests";
import NoteSummary from "../components/NoteSummary";
import type { NoteType } from "../utils/Note.type";

function DashboardPage() {
  const {data} = useGetAllNotes();
  console.log(data);
  return (
    <Box
      component={"main"}
      className="w-full h-[36rem] py-2 gap-2 flex"
      sx={{ background: "#011611", height: {xs: "max-content"} }}
    >
      <ToggleSideBar/>
      <Stack
        component={"section"}
        className="bg-gray-50 w-full h-[35rem] overflow-auto p-4 rounded"
        sx={{ ml: { sm: "9rem" }, height: {xs: "100dvh", md: "35rem"} }}
      >
        <Box
          component={"section"}
          className="flex gap-4 border-b border-gray-300"
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          <Stack direction={"row"} className="justify-between min-w-1/2">
            <Box>
                <Typography
                  fontSize={"1.8rem"}
                  fontWeight={"bold"}
                  className="text-gray-700"
                >
                  Dashboard
                </Typography>
              <Typography
                variant="body2"
                gutterBottom
                className="text-gray-600"
              >
                Your workspace to create great ideas
              </Typography>
              <Stack direction={"row"} gap={1}>
                <Button
                  href="dashboard/create"
                  color="secondary"
                  variant="contained"
                  startIcon={<NoteAdd />}
                  sx={{
                    my: "1rem",
                    textTransform: "none",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                  }}
                  className="w-38 text-gray-50 text-nowrap"
                  title="Write a new note"
                >
                  Create Note
                </Button>
                <Button
                  href="dashboard/trash"
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
              <TextField
                className="min-w-fit w-80"
                label="Search for notes"
                sx={{ my: 2, borderRadius: "1rem" }}
              />
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
            className="text-gray-700"
            sx={{ mb: 2 }}
            fontWeight={"bold"}
            fontSize={"2rem"}
          >
            Recent Notes
          </Typography>
          <Stack direction={"row"} className="justify-left gap-2 flex-wrap">
            {!data &&
              <NoNote/>
            }         
            {(
              data?.map((note: NoteType) => 
                <NoteSummary key={data.id} currentUserId={localStorage.getItem("userId")!} noteData={note} />
              )
            )
            }
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export default DashboardPage;
