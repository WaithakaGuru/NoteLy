import { Stack, Button, Typography } from "@mui/material";
import { NoteAdd } from "@mui/icons-material";

function NoNote() {
  return (
    <Stack
      sx={{ width: { xs: "30rem" } }}
      className="min-w-96  p-4 items-center gap-4 shadow-xl h-54 border-gray-300 border
        rounded-xl justify-center bg-white sm:w-[30rem]"
    >
      <NoteAdd className="text-purple-900 text-3xl" />
      <Typography variant="h5" gutterBottom className="text-gray-700">
        No notes added yet
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        title="Add a new note"
        href="/dashboard/create"
      >
        Create a new note
      </Button>
    </Stack>
  );
}

export default NoNote;
