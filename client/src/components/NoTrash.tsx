import { Stack, Button, Typography } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";

function NoTrash() {
  return (
    <Stack className="min-w-96 p-4 items-center gap-4 shadow-xl h-54 border-gray-300 border rounded-xl justify-center">
      <DeleteOutline className="text-red-700 text-3xl" />
      <Typography variant="h5" className="text-gray-700">
        Nothing to see here
      </Typography>
      <Typography variant="caption" color="error" gutterBottom>
        Note Trash is Empty
      </Typography>
      <Button
        variant="contained"
        color="primary"
        href="/dashboard"
        title="Go to Dashboard"
      >
        Dashboard
      </Button>
    </Stack>
  );
}

export default NoTrash;
