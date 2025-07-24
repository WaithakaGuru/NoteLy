import { Restore, Person, Topic, } from "@mui/icons-material"
import {Button, Typography, Chip, Stack } from "@mui/material"
function TrashNote() {
  return (
     <Stack  sx={{width: {xs: "30rem", sm: "23.8rem"}}}
        className="bg-[#f9f9f9] w-[24rem] p-4 items-left gap-4 shadow-xl min-h-84 border-gray-300 border rounded-xl justify-center"
    >
        <Typography
            variant="h6"
            className="text-purple-400 flex justify-between h-16 overflow-y-hidden line-through"
            fontWeight={600}
            sx={{textDecoration: "strike"}}
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
            color="secondary"
            startIcon={<Restore />}
            sx={{ bgcolor: "#f0e5ff", textTransform: "none" }}
            title="Restore this note"
        >
            Restore
        </Button>
        
        </Stack>
    </Stack>
)
}

export default TrashNote