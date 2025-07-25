import { Stack, Button} from "@mui/material"
import { Delete, Edit } from "@mui/icons-material"

type FullNoteOwnerInfo = {
  creatorId: string,
  userId: string 
}

function FullNoteActionButtons({creatorId, userId}: FullNoteOwnerInfo) {
  return (
    <>
        <Stack component={"div"} direction={"row"}>
            <Button
              color="warning"
              startIcon={<Delete className="mr-[-.5rem]" />}
              variant="outlined"
              sx={{
                my: "1rem",
                textTransform: "none",
                fontWeight: "bold",
                fontSize: "1.1rem",
                display: creatorId === userId ? "flex" : "none"
              }}
              className="w-40 text-gray-50 text-nowrap"
              title="Delete this note"
            >
              Move to Trash
            </Button>
            <Button
              href="/dashboard/update/1"
              color="success"
              startIcon={<Edit className="mr-[-.5rem]" />}
              variant="outlined"
              title="Update this note"
              sx={{
                my: "1rem",
                textTransform: "none",
                fontWeight: "bold",
                fontSize: "1.1rem",
                display: creatorId === userId ? "flex" : "none"
              }}
              className="w-28 text-gray-50 text-nowrap"
            >
              Update
          </Button> 
        </Stack>
    </>
  )
}

export default FullNoteActionButtons