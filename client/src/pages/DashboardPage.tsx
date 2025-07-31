import { Delete, NoteAdd, Notes, West } from "@mui/icons-material";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import ToggleSideBar from "../components/ToggleSideBar";
import NoNote from "../components/NoNote";
import { useGetAllNotes } from "../services/fetchRequests";
import NoteSummary from "../components/NoteSummary";
import type { NoteType } from "../utils/Note.type";
import NotesCreationSummary from "../components/NotesCreationSummary";
import getNotesPerDuration from "../utils/notesPerDuration";
import React, { useEffect, useState } from "react";
import liveSearch from "../utils/liveSearch.";
import { filterPinned, filterPublic } from "../utils/filterNote";
import { client } from "../main";

function DashboardPage() {
  const { data: info } = useGetAllNotes();
  const [data, setData] = useState<NoteType[] | undefined>(undefined);
  const [isFiltering, setIsFiltering] = useState(false);
  const id = localStorage.getItem("userId")
  const [currentUserId, setCurrentUserId] = useState(id);
  const [goBackHidden, setGoBackHidden] = useState(true);
  const [noteTitle, setNoteTitle] = useState("Recent Notes");
  
  useEffect(() => {
    if (info && !isFiltering) setData(info);
    else if(noteTitle === ("Pinned Notes")) setData(filterPinned(info))
      else if(noteTitle === ("Public Notes")) setData(filterPublic(info))    
  }, [info, isFiltering]);

  useEffect(()=>{
    setCurrentUserId(id);
    client.invalidateQueries({queryKey: ["GetAllNotes"]})
  }, [id])

const summaryInfo = info && getNotesPerDuration(info);

  function handleShowAllNotes() {
    setIsFiltering(false);
    setGoBackHidden(true);
    setData(info);
    setNoteTitle("Recent Notes");
  }

  function handleFilterPublicNotes() {
    setIsFiltering(true);
    setData(filterPublic(info));
    setNoteTitle("Public Notes");
    setGoBackHidden(false);
  }
  function handleFilterPinnedNotes() {
    setIsFiltering(true);
    setData(filterPinned(info));
    setNoteTitle("Pinned Notes");
    setGoBackHidden(false);
  }

  function handleLiveNoteSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    val.trim() ? setNoteTitle("Search Results") : setNoteTitle("Recent Notes");
    const liveData = liveSearch(info, val);
    setData(liveData);
  }

  return (
    <Box
      component={"main"}
      className="w-full h-[105dvh] py-2 gap-2 flex"
      sx={{ background: "#011611", height:{xs:"max-content", md: "92.4dvh"} }}
    >
      <ToggleSideBar
        handlePinned={handleFilterPinnedNotes}
        handlePublic={handleFilterPublicNotes}
      />
      <Stack
        component={"section"}
        className="bg-gray-100 w-full overflow-auto p-4 rounded"
        sx={{ ml: { sm: "9rem" }, height:"100%" }}
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
                onChange={handleLiveNoteSearch}
                sx={{ my: 2, borderRadius: "1rem" }}
              />
            </Box>
          </Stack>
          <NotesCreationSummary {...summaryInfo!} />
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
            {data?.length === 0 && <NoNote />}
            {data?.map((note: NoteType) => (
              <NoteSummary
                key={note.id}
                currentUserId={currentUserId!}
                noteData={note}
              />
            ))}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export default DashboardPage;
