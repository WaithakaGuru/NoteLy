import { Box, Stack, Typography, Button, TextField, Paper,  IconButton, Chip } from "@mui/material";
import { CalendarMonth, CalendarToday, Edit, NoteAdd, Today, Topic, Delete, PushPin, Person, Visibility, DeleteOutline, Dashboard } from "@mui/icons-material";
import ToggleSideBar from "../components/ToggleSideBar";
import NoNote from "../components/NoNote";

function AllUserNotesPage() {
  return (<>
     <Box
      component={"main"}
      className="w-full h-[36rem] py-2 gap-2 flex"
      sx={{ background: "#011611", height: {xs: "max-content"}  }}
    >
      <ToggleSideBar/>
      <Stack
        component={"section"}
        className="bg-gray-50 w-full h-[35rem] overflow-auto rounded-xl p-4"
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
                className="flex items-center justify-around w-full"
              >
                <Typography
                  fontSize={"1.8rem"}
                  fontWeight={"bold"}
                  className="text-gray-700"
                  sx={{ml: {xs: "1rem", sm: "auto"}}}
                >
                 Notes Collection for: 
                </Typography>
                <Typography
                  fontWeight={600}
                  fontSize={"1.1rem"}
                  className="text-purple-700 inline"
                  sx={{ml: "1rem"}}
                >
                  Waithaka
                </Typography>
              </Box>
              <Typography
                variant="body2"
                gutterBottom
                className="text-gray-600"
              >
                See all your hardwork and ideas
              </Typography>
              <Stack direction={"row"} gap={1}>
                <Button
                  href="/dashboard/create"
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
                  className="w-36 text-gray-50 text-nowrap"
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
           Your Recent Notes
          </Typography>
          <Stack direction={"row"} className="justify-left gap-2 flex-wrap">
            <Stack sx={{width: {xs: "30rem", sm: "23.8rem"}}}
            className="bg-[#f9f9f9] w-[24rem] p-4 items-left gap-4 shadow-xl min-h-84 border-gray-300 border rounded-xl justify-center">
              <Typography
                variant="h6"
                className="text-gray-700 flex justify-between h-16 overflow-y-hidden"
                fontWeight={600}
              >
                Fisheries in Kenyan facilities{" "}
                <Chip
                  component={"div"}
                  label="Public"
                  sx={{ bgcolor: "limegreen", color: "#f9f9f9" }}
                />
              </Typography>
              <Typography
                variant="body2"
                className="text-gray-600"
                mb={"-1rem"}
                align="left"
              >
                <Topic /> Business{" "}
                <IconButton title="Pin this note" sx={{ ml: 20 }}>
                  <PushPin className="text-gray-500" />
                </IconButton>
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                <Person /> Waithaka
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  overflow: "hidden",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 3,
                }}
                gutterBottom
              >
                The farming of fish in Kenya is one of the most undervalued yet
                profitable business. Lake fishing and pond fish farming are two
                different approaches with different challenges. Rearing fish in
                pond is more time demading and has a contraint on resource but
                it is well paying
              </Typography>
              <Stack
                direction={"row"}
                className="gap-2 border-t border-gray-300 p-2 pt-8 items-center"
              >
                <Typography
                  variant="body2"
                  fontSize={".7rem"}
                  fontWeight={500}
                  className="text-gray-600"
                >
                  Posted July 23, 2025
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ textTransform: "none" }}
                  startIcon={<Visibility />}
                  title="See full blog"
                  href="/dashboard/note/1"
                >
                  View
                </Button>
                <Button
                  color="secondary"
                  startIcon={<Edit />}
                  sx={{ bgcolor: "#f0e5ff", textTransform: "none" }}
                  href="/dashboard/update/1"
                  title="Edit this note"
                >
                  Edit
                </Button>
                <button
                  className="text-red-700 bg-red-200 p-1 rounded text-nowrap cursor-pointer"
                  title="Delete this note"
                  disabled={false}
                >
                  <DeleteOutline /> Delete
                </button>
              </Stack>
            </Stack>
            <Stack sx={{width: {xs: "30rem", sm: "23.8rem"}}}
            className="bg-[#f9f9f9] w-[24rem] p-4 items-left gap-4 shadow-xl min-h-84 border-gray-300 border rounded-xl justify-center">
              <Typography
                variant="h6"
                className="text-gray-700 flex justify-between h-16 overflow-y-hidden"
                fontWeight={600}
              >
                Fisheries in Kenyan facilities {" "}
                <Chip
                  component={"div"}
                  label="Public"
                  sx={{ bgcolor: "limegreen", color: "#f9f9f9" }}
                />
              </Typography>
              <Typography
                variant="body2"
                className="text-gray-600"
                mb={"-1rem"}
                align="left"
              >
                <Topic /> Business{" "}
                <IconButton title="Pin this note" sx={{ ml: 20 }}>
                  <PushPin className="text-gray-500" />
                </IconButton>
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                <Person /> Waithaka
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  overflow: "hidden",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 3,
                }}
                gutterBottom
              >
                The farming of fish in Kenya is one of the most undervalued yet
                profitable business. Lake fishing and pond fish farming are two
                different approaches with different challenges. Rearing fish in
                pond is more time demading and has a contraint on resource but
                it is well paying
              </Typography>
              <Stack
                direction={"row"}
                className="gap-2 border-t border-gray-300 p-2 pt-8 items-center"
              >
                <Typography
                  variant="body2"
                  fontSize={".7rem"}
                  fontWeight={500}
                  className="text-gray-600"
                >
                  Posted July 23, 2025
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ textTransform: "none" }}
                  startIcon={<Visibility />}
                  title="See full blog"
                  href="/dashboard/note/1"
                >
                  View
                </Button>
                <Button
                  color="secondary"
                  startIcon={<Edit />}
                  sx={{ bgcolor: "#f0e5ff", textTransform: "none" }}
                  href="/dashboard/update/1"
                  title="Edit this note"
                >
                  Edit
                </Button>
                <button
                  className="text-red-700 bg-red-200 p-1 rounded text-nowrap cursor-pointer"
                  title="Delete this note"
                  disabled={false}
                >
                  <DeleteOutline /> Delete
                </button>
              </Stack>
            </Stack>
            <Stack sx={{width: {xs: "30rem", sm: "23.8rem"}}}
              className="bg-[#f9f9f9] w-[24rem] p-4 items-left gap-4 shadow-xl min-h-84 border-gray-300 border rounded-xl justify-center">
              <Typography
                variant="h6"
                className="text-gray-700 flex justify-between"
                fontWeight={600}
              >
                Fisheries in Kenyan facilities{" "}
                <Chip
                  component={"div"}
                  label="Personal"
                  sx={{ bgcolor: "slategrey", color: "#f9f9f9" }}
                />
              </Typography>
              <Typography
                variant="body2"
                className="text-gray-600"
                mb={"-1rem"}
                align="left"
              >
                <Topic /> Business{" "}
                <IconButton title="Pin this note" sx={{ ml: 20 }}>
                  <PushPin className="text-gray-500" />
                </IconButton>
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                <Person /> Waithaka
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  overflow: "hidden",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 3,
                }}
                gutterBottom
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                dolorum ipsu m voluptate et id quasi voluptatum iste fugiat esse
                blanditiis eligendi aperiam impedit, harum odio culpa vel
                architecto officiis commodi recusandae, nostrum dolor explicabo!
                Mollitia nostrum voluptate dolore corrupti, iste voluptatibus
                ullam iure porro exercitationem rerum consequuntur tempore.
                Quis, beatae!
              </Typography>
              <Stack
                direction={"row"}
                className="gap-2 border-t border-gray-300 p-2 pt-8 items-center"
              >
                <Typography
                  variant="body2"
                  fontSize={".7rem"}
                  fontWeight={500}
                  className="text-gray-600"
                >
                  Posted July 23, 2025
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ textTransform: "none" }}
                  startIcon={<Visibility />}
                  title="See full blog"
                  href="/dashboard/note/1"
                >
                  View
                </Button>
                <Button
                  color="secondary"
                  startIcon={<Edit />}
                  sx={{ bgcolor: "#f0e5ff", textTransform: "none" }}
                  href="/dashboard/update/1"
                  title="Edit this note"
                >
                  Edit
                </Button>
                <button
                  className="text-red-700 bg-red-200 p-1 rounded text-nowrap cursor-pointer"
                  title="Delete this note"
                  disabled={false}
                >
                  <DeleteOutline /> Delete
                </button>
              </Stack>
            </Stack>
            <NoNote/>
          </Stack>
        </Box>
      </Stack>
    </Box>
  </>)
}

export default AllUserNotesPage;
