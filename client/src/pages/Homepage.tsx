import {Box, Grid, Stack, Typography} from "@mui/material";

function Homepage() {
  return (  
    <>
        <Stack className="min-h-[90%] text-gray-800 flex flex-col 
         items-center justify-center p-6 pb-16 bg-gray-200"
        >
        <h1 className="text-4xl font-bold mb-4 text-gray-800">📝 Notely</h1>
        <p className="text-xl text-center max-w-md mb-6">
            Take notes. Stay sharp. A beautiful minimal app to capture, organize, and sync your thoughts.
        </p>
        <div className="flex gap-10 mb-10">
            <button className="bg-gray-700 text-white py-2 rounded-md text-lg
             shadow hover:bg-gray-100 hover:text-gray-800 cursor-pointer font-mono px-8">
            Try It Free
            </button>
            <button className=" text-xl border-gray-400 border cursor-pointer
             p-2 rounded-sm hover:bg-gray-700 hover:text-gray-50 px-10">
                Learn More
            </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center text-sm">
            <div className="bg-gray-100 p-4 hover:rotate-1 shadow-lg max-w-96">
                <div className="text-2xl mb-2">📒</div>
                <h3 className="font-semibold">Clean UI</h3>
                <p>Distraction-free and elegant note-taking.</p>
            </div>
            <div className="bg-gray-100 py-8 px-6 shadow-lg max-w-96 hover:rotate-1">
                <div className="text-2xl mb-2">🧠</div>
                <h3 className="font-semibold">Smart Tags</h3>
                <p>Quickly organize with smart tagging.</p>
            </div>
            <div className="bg-gray-100 py-8 px-6 shadow-lg max-w-96 hover:rotate-1">
                <div className="text-2xl mb-2">🔒</div>
                <h3 className="font-semibold">Top Notch Security</h3>
                <p>Safe and secure Login and acces authorization</p>
            </div>
        </div>
        </Stack>
        <Stack component={"section"} className="bg-gray-100" p={{md: 6, xs: 2}} >
            <Typography variant="h6" gutterBottom className="text-blue-950 px-" fontSize="2rem" fontWeight={"bold"} >
                About Us
            </Typography>
            <Grid container gap={4} justifyContent={"center"}>
                <Box component={Grid} size={{xs:12, sm:6, md:4 }} className="bg-gray-300 
                    p-2 hover:bg-gray-700 text-gray-800 rounded hover:text-gray-50 sm:max-w-72 md:max-w-96"
                >
                    <Typography variant="h5" gutterBottom className="" align="center" fontSize={"2rem"} fontWeight={"bold"}>
                        1000+
                    </Typography>
                    <Typography variant="subtitle1" align="center">Notes Created</Typography>
                </Box>
                <Box component={Grid} size={{xs:12, sm:6, md:4 }} className="bg-gray-300 
                    p-2 hover:bg-gray-700 text-gray-800 rounded hover:text-gray-50 sm:max-w-72 md:max-w-96"
                >
                    <Typography variant="h5" gutterBottom className="" align="center" fontSize={"2rem"} fontWeight={"bold"}>
                        500+
                    </Typography>
                    <Typography variant="subtitle1" align="center"> Happy users</Typography>
                </Box>
                <Box component={Grid} size={{xs:12, sm:6, md:4 }} className="bg-gray-300 
                    p-2 hover:bg-gray-700 text-gray-800 rounded hover:text-gray-50 sm:max-w-72 md:max-w-96"
                >
                    <Typography variant="h5" gutterBottom className="" align="center" fontSize={"2rem"} fontWeight={"bold"}>
                        10+
                    </Typography>
                    <Typography variant="subtitle1" align="center"> Awards</Typography>
                </Box>
                <Box component={Grid} size={{xs:12, sm:6, md:4 }} className="bg-gray-300 
                    p-2 hover:bg-gray-700 text-gray-800 rounded hover:text-gray-50 sm:max-w-72 md:max-w-96"
                >
                    <Typography variant="h5" gutterBottom className="" align="center" fontSize={"2rem"} fontWeight={"bold"}>
                        100+
                    </Typography>
                    <Typography variant="subtitle1" align="center">Daily Clients</Typography>
                </Box>
            </Grid>
            <Typography variant="body1" gutterBottom py={6} className="text-shadow-gray-50 text-shadow-2xs text-gray-700 bg-gray-300 px-4" 
                fontWeight={"bold"} my={2} width={"95%"} sx={{placeSelf: "center"}}
            >
                Notely was born out of a simple need: a smarter, cleaner way to capture thoughts, ideas, 
                and tasks—without the clutter. What started as a personal tool to stay organized soon grew
                into a passion project shared with friends, students, and busy professionals who wanted more than 
                just another note-taking app.
                We believe in simplicity, focus, and speed. Whether you're jotting down 
                a quick idea, organizing study notes, or planning your next big project, 
                Notely is designed to help you think clearly and stay productive.
                Built with love by creators who understand the chaos of digital overload, 
                Notely is here to bring clarity to your creativity.
            </Typography>
        </Stack>
    </>
  )
}

export default Homepage