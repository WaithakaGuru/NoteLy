import { CalendarMonth, CalendarToday, Delete,  DeleteOutline, Edit, NoteAdd, Notes, Person, PushPin, Today, Topic, Visibility } from "@mui/icons-material"
import { Box, Button, Card, CardMedia, Chip, Drawer, IconButton, Paper, Stack, TextField, Typography } from "@mui/material"
import { Link } from "react-router-dom"

function DashboardPage() {
  return (
    <Box component={"main"} className="w-full h-[36rem] p-4 gap-2 flex"
      sx={{background: "#011611"}}
    >
      <Stack component={"aside"}  className="max-w-44 fixed top-20 left-2 h-full w-64 z-50">
          <Card className="rounded-2xl bg-transparent mb-20 p-6" elevation={0} sx={{bgcolor: "transparent"}}>
            <CardMedia component={"img"} image="./me.png" 
            alt="DP" className="h-20 max-w-20 rounded-2xl" 
            />
            <Typography variant="subtitle1" fontWeight={"bold"}
              className="text-gray-50 my-0 py-0"
            >
              Waithaka
            </Typography>
            <Typography variant="subtitle2" className="text-gray-50 py-0 font-bold" fontSize={".6rem"}>
              waithakaoffices@gmail.com
            </Typography>
          </Card>
          <Stack component={"div"} className="justify-center gap-4 p-6">
            <Button href={"/dashboard"} className="p-0" variant="outlined" >
              <Typography className="text-gray-50 text-nowrap" fontWeight={"bold"} textTransform={"none"}>
                Pinned Notes
              </Typography>
            </Button>
            <Button href={"/dashboard"} variant="outlined">
              <Typography className="text-gray-50 text-nowrap" fontWeight={"bold"}
               textTransform={"none"} >
                Public Notes
              </Typography>
            </Button>
            <Link to={"/dashboard"} >
              <Typography className="text-gray-50" fontWeight={"bold"}>
                Dashboard
              </Typography>
            </Link>
            <Link to={"/dashboard"} >
              <Typography className="text-gray-50" fontWeight={"bold"}>
                My notes
              </Typography>
            </Link>
            <Link to={"/trash"} >
              <Typography className="text-gray-50" fontWeight={"bold"}>
                Trash Notes
              </Typography>
            </Link>
            <Link to={"/profile"} >
              <Typography className="text-gray-50" fontWeight={"bold"}>
                Profile
              </Typography>
            </Link>
          </Stack>
      </Stack>
      <Stack component={"section"} className="bg-gray-50 w-full h-[35rem] overflow-auto rounded-xl ml-44 p-6" >
        <Box component={"section"} className="flex gap-16 border-b border-gray-300">
          <Box>
            <Typography fontSize={"1.8rem"} fontWeight={"bold"} className="text-gray-700">
                Dashboard
            </Typography>    
            <Typography variant="body2"  gutterBottom className="text-gray-600">
                Your workspace to create great ideas  
            </Typography>  
            <Stack direction={"row"} gap={1}>
              <Button href="dashboard/create" color="secondary" variant="contained" startIcon={<NoteAdd/>} sx={{ my:"1rem", textTransform: "none", 
                fontWeight: "bold", fontSize: "1.1rem"}} className="w-38 text-gray-50 text-nowrap" title="Write a new note">
                Create Note
              </Button>
              <Button href="dashboard/trash" color="warning" startIcon={<Delete className="mr-[-.5rem]" />} variant="outlined"  sx={{ my:"1rem", textTransform: "none", 
                fontWeight: "bold", fontSize: "1.1rem"}} className="w-20 text-gray-50" title="See deleted notes">
                Trash
              </Button>
            </Stack>
            <TextField className="min-w-fit w-80" label="Search for notes" sx={{my:2, borderRadius: "1rem"}}/> 
          </Box>
          <Box component={"div"} className="mt-8">
            <Typography variant="h6" fontWeight={600} fontSize={"1.1rem"}  className="text-gray-700">
              Hello Waithaka
            </Typography>
            <Button href="/dashboard/notes" color="success" startIcon={<Notes className="mr-[-.5rem]" />} variant="outlined"  title="All my notes"
            sx={{ my:"1rem", textTransform: "none", 
              fontWeight: "bold", fontSize: "1.1rem"}} className="w-30 text-gray-50 text-nowrap"
            >
              My Notes
            </Button>
          </Box>
          <Stack className="border-l border-gray-300 pl-20">
            <Typography variant="subtitle1" fontWeight={700} fontSize={"1.5rem"} className="text-gray-600" gutterBottom>Summary</Typography>
            <Paper className="w-96 p-1 flex gap-2 m-1 border-1 border-gray-200"  elevation={0}>
              <Box className="bg-blue-500 rounded-full w-10 h-10 inline-flex justify-center" sx={{bgcolor: "#od99ff"}}><CalendarToday className="text-gray-50 my-auto "/></Box> 
             <Box>
                <Typography className="text-gray-600 inline align-top"  fontSize={"1rem"} fontWeight={600}>Today</Typography>
                <Typography className="text-gray-500  align-top"  fontSize={".8rem"} fontWeight={700}>No Notes added for today</Typography>
             </Box>
            </Paper>
            <Paper className="w-96 p-1 flex gap-2 m-1 border-1 border-gray-200" elevation={0}>
              <Box className="bg-orange-500 rounded-full w-10 h-10 inline-flex justify-center" sx={{bgcolor: "#od99ff"}}><CalendarMonth className="text-gray-50 my-auto "/></Box> 
             <Box>
                <Typography className="text-gray-600 inline align-top"  fontSize={"1rem"} fontWeight={600}>This week</Typography>
                <Typography className="text-gray-500  align-top"  fontSize={".8rem"} fontWeight={700}>No Notes added this week</Typography>
             </Box>
            </Paper>
            <Paper className="w-96 p-1 flex gap-2 m-1 border-1 border-gray-200" elevation={0}>
              <Box className="bg-lime-500 rounded-full w-10 h-10 inline-flex justify-center" sx={{bgcolor: "#od99ff"}}><Today className="text-gray-50 my-auto "/></Box> 
             <Box>
                <Typography className="text-gray-600 inline align-top"  fontSize={"1rem"} fontWeight={600}>This Month</Typography>
                <Typography className="text-gray-500  align-top"  fontSize={".8rem"} fontWeight={700}>No Notes added this month</Typography>
             </Box>
            </Paper>
          </Stack>
        </Box>
      <Box component={"section"} className="w-full p-2 mt-8">
        <Typography variant="h6" className="text-gray-700" sx={{mb:6}} fontWeight={"bold"} fontSize={"2rem"}>
          Recent Notes
        </Typography>
       <Stack direction={"row"} className="justify-center gap-4 flex-wrap" >
          <Stack className="w-[30rem] p-4 items-left gap-4 shadow-xl min-h-84 border-gray-300 border rounded-xl justify-center">
            <Typography variant="h5" className="text-gray-700 flex justify-between" fontWeight={600}>
              Fisheries in Kenyan facilities <Chip component={"div"} label="Public" sx={{bgcolor: "limegreen", color:"#f9f9f9"}}/>
            </Typography>
            <Typography variant="body2" className="text-gray-600" mb={"-1rem"} align="left">
              <Topic/> Business <IconButton  title="Pin this note" sx={{ml: 20}}><PushPin className="text-gray-500"/></IconButton>
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              <Person/> Waithaka
            </Typography>
            <Typography variant="body2" sx={{textOverflow: "ellipsis", display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 3,
            }} gutterBottom>
              The farming of fish in Kenya is one of the most undervalued yet profitable business.
              Lake fishing and pond fish farming are two different approaches with different challenges.
              Rearing fish in pond is more time demading and has a contraint on resource but it is well paying 
            </Typography>
           <Stack direction={"row"} className="gap-4 border-t border-gray-300 p-2 pt-8 items-center">
              <Typography variant="body2" fontSize={".7rem"} fontWeight={500} className="text-gray-600" >
                Posted July 23, 2025
              </Typography>
              <Button variant="contained" color="primary"sx={{textTransform: "none"}} startIcon={<Visibility/>}>View</Button> 
              <Button  color="secondary" startIcon={<Edit/>} sx={{bgcolor: "#f0e5ff", textTransform: "none"}}>Edit</Button> 
              <button className="text-red-700 bg-red-200 p-1 rounded"><DeleteOutline/> Delete</button>
           </Stack>
          </Stack>
          <Stack className="w-[30rem] p-4 items-left gap-4 shadow-xl min-h-84 border-gray-300 border rounded-xl justify-center">
            <Typography variant="h5" className="text-gray-700 flex justify-between" fontWeight={600}>
              Fisheries in Kenyan facilities <Chip component={"div"} label="Personal" sx={{bgcolor: "slategrey", color:"#f9f9f9"}}/>
            </Typography>
            <Typography variant="body2" className="text-gray-600" mb={"-1rem"} align="left">
              <Topic/> Business <IconButton  title="Pin this note" sx={{ml: 20}}><PushPin className="text-gray-500"/></IconButton>
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              <Person/> Waithaka
            </Typography>
            <Typography variant="body2" sx={{textOverflow: "ellipsis", display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 3,
            }} gutterBottom>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolorum ipsu
              m voluptate et id quasi voluptatum iste fugiat esse blanditiis eligendi 
              aperiam impedit, harum odio culpa vel architecto officiis commodi recusandae,
               nostrum dolor explicabo! Mollitia nostrum voluptate dolore corrupti, iste voluptatibus
                ullam iure porro exercitationem rerum consequuntur tempore. Quis, beatae!
            </Typography>
           <Stack direction={"row"} className="gap-4 border-t border-gray-300 p-2 pt-8 items-center">
              <Typography variant="body2" fontSize={".7rem"} fontWeight={500} className="text-gray-600" >
                Posted July 23, 2025
              </Typography>
              <Button variant="contained" color="primary"sx={{textTransform: "none"}} startIcon={<Visibility/>}>View</Button> 
              <Button  color="secondary" startIcon={<Edit/>} sx={{bgcolor: "#f0e5ff", textTransform: "none"}}>Edit</Button> 
              <button className="text-red-700 bg-red-200 p-1 rounded"><DeleteOutline/> Delete</button>
           </Stack>
          </Stack>
          <Stack className="min-w-96  p-4 items-center gap-4 shadow-xl h-54 border-gray-300 border
            rounded-xl justify-center bg-white">
            <NoteAdd className="text-purple-900 text-3xl"/>
            <Typography variant="h5" gutterBottom className="text-gray-700">No notes added yet</Typography>
            <Button variant="contained" color="secondary">Create a new note</Button>
          </Stack>
          <Stack className="min-w-96 p-4 items-center gap-4 shadow-xl h-54 border-gray-300 border rounded-xl justify-center">
            <DeleteOutline className="text-red-700 text-3xl"/>
            <Typography variant="h5" className="text-gray-700">Nothing to see here</Typography>
            <Typography variant="caption" color="error" gutterBottom>Note Trash is Empty</Typography>
            <Button variant="contained" color="primary" href="/dashboard">Dashboard</Button>
          </Stack>
       </Stack>
      </Box>
      </Stack>
    </Box>
  )
}

export default DashboardPage