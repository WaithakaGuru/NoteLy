import {
  Box,
  Stack,
  Typography,
  Button,
  TextField,
  IconButton,
} from "@mui/material";
import { NoteAdd, Delete, Dashboard, West } from "@mui/icons-material";
import ToggleSideBar from "../components/ToggleSideBar";
import NoNote from "../components/NoNote";
import { useGetAllUserNotes } from "../services/fetchRequests";
import { useEffect, useState } from "react";
import liveSearch from "../utils/liveSearch.";
import type { NoteType } from "../utils/Note.type";
import NoteSummary from "../components/NoteSummary";
import NotesCreationSummary from "../components/NotesCreationSummary";
import getNotesPerDuration from "../utils/notesPerDuration";
import { filterPinned, filterPublic } from "../utils/filterNote";

function AllUserNotesPage() {
  const { data: info } = useGetAllUserNotes();
  const [data, setData] = useState<NoteType[] | undefined>(undefined);
  const [isFiltering, setIsFiltering] = useState(false);
  const [goBackHidden, setGoBackHidden] = useState(true);
  const [noteTitle, setNoteTitle] = useState("Your Recent Notes");

  useEffect(() => {
    if (info && !isFiltering) setData(info);
  }, [info, isFiltering]);

  function handleShowAllNotes() {
    setGoBackHidden(true);
    setNoteTitle("Your Recent Notes");
    setData(info);
    setIsFiltering(false);
  }

  function handleFilterPublicNotes() {
    setData(filterPublic(info));
    setNoteTitle("Your Public Notes");
    setGoBackHidden(false);
  }
  function handleFilterPinnedNotes() {
    setData(filterPinned(info));
    setNoteTitle("Your Pinned Notes");
    setGoBackHidden(false);
  }

  const infoSummary = info && getNotesPerDuration(info);

  function handleLiveSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    val.trim()
      ? setNoteTitle("Your Recent Notes")
      : setNoteTitle("Search Results");
    const searchResult = liveSearch(info!, val);
    setData(searchResult);
  }

  return (
    <Box
      component={"main"}
      className="w-full h-[36rem] py-2 gap-2 flex"
      sx={{ background: "#011611", height: { xs: "max-content", md: "92.4dvh"} }}
    >
      <ToggleSideBar
        handlePinned={handleFilterPinnedNotes}
        handlePublic={handleFilterPublicNotes}
      />
      <Stack
        component={"section"}
        className="bg-gray-50 w-full h-[35rem] overflow-auto rounded p-4"
        sx={{ ml: { sm: "9rem" }, height: "100%" }}
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
                Notes Collection
              </Typography>
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
                onChange={handleLiveSearch}
                sx={{ my: 2, borderRadius: "1rem" }}
              />
            </Box>
          </Stack>
          <NotesCreationSummary {...infoSummary} />
        </Box>
        <Box component={"section"} className="w-full p-2 mt-8">
          <Typography
            variant="h6"
            className="text-gray-700"
            sx={{ mb: 2 }}
            fontWeight={"bold"}
            fontSize={"2rem"}
          >
            <IconButton
              color="warning"
              title="See All Notes"
              hidden={goBackHidden}
              onClick={handleShowAllNotes}
            >
              {" "}
              <West />
            </IconButton>{" "}
            {noteTitle} ({data?.length})
          </Typography>
          <Stack direction={"row"} className="justify-left gap-2 flex-wrap">
            {data?.map((note: NoteType) => (
              <NoteSummary
                key={note.id}
                currentUserId={localStorage.getItem("userId")!}
                noteData={note}
              />
            ))}
            {data?.length === 0 && <NoNote />}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export default AllUserNotesPage;
