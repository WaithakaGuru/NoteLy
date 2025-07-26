import { Typography, Paper, Box, Stack } from "@mui/material"
import { CalendarMonth, Today, CalendarToday } from "@mui/icons-material"
import { type NoteCountType } from "../utils/notesPerDuration"

function NotesCreationSummary(summaryInfo: NoteCountType) {
  return (
    <Stack className="border-l border-gray-300 md:pl-20 pl-5">
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
            {summaryInfo.today? 
             (<span><strong style={{color: "#333"}}>{summaryInfo.today}</strong> Notes added today</span>)  : "No Notes added today"}
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
              {summaryInfo.week? 
             (<><strong style={{color: "#333"}}>{summaryInfo.week}</strong> Notes added this week</>)  : "No Notes added this week"}
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
            {summaryInfo.month?
             (<><strong style={{color: "#333"}}>{summaryInfo.month}</strong> Notes added this month</>)  : "No Notes added this month"}
          </Typography>
        </Box>
      </Paper>
    </Stack>
  )
}

export default NotesCreationSummary