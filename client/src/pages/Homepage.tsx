import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
// import MarkdownEditor from "../components/MrkDownPreviewEditor";

function Homepage() {
  return (
    <>
      <Stack
        className="min-h-[90%] text-gray-800 flex flex-col 
         items-center justify-center p-6 pb-16"
        bgcolor={"#e7edf6ff"}
      >
        <img src="Notely1.png" width={"300px"} />
        <p className="text-xl text-center max-w-md mb-6">
          Take notes. Stay sharp. A beautiful minimal app to capture, organize,
          and sync your thoughts.
        </p>
        <div className="flex gap-10 mb-10">
          <button
            className="bg-gray-700 text-white py-2 rounded-md text-lg
                shadow hover:bg-gray-100 hover:text-gray-800 cursor-pointer font-mono px-8 tracking-widest btn"
          >
            <a href="/register">Try It Free</a>
          </button>
          <button
            className="text-xl border-gray-400 border cursor-pointer
                p-2 rounded-sm hover:bg-gray-700 hover:text-gray-50 px-10 btn"
          >
            <a href="#about">Learn More</a>
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
      <Stack
        component="section"
        sx={{ px: { xs: 2, md: 6 }, py: 8, bgcolor: "transparent" }}
        id="about"
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            textAlign: "center",
            mb: 4,
            background: "#606e83",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "2.5rem",
          }}
        >
          About Us
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {[
            { value: "1000+", label: "Notes Created" },
            { value: "500+", label: "Happy Users" },
            { value: "10+", label: "Awards" },
            { value: "100+", label: "Daily Clients" },
          ].map((stat, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Box
                component={"div"}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  textAlign: "center",
                  background: "linear-gradient(45deg, #dce6f6, #a9b6ca)", // background:"#dce6f6",,
                  boxShadow: "0 5px 25px rgba(0,0,0,0.2)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    // background: ",
                  },
                }}
                className="text-gray-800"
              >
                <Typography variant="h4" fontWeight="bold">
                  {stat.value}
                </Typography>
                <Typography variant="subtitle1" sx={{ mt: 1 }}>
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Paper
          elevation={6}
          sx={{
            mt: 4,
            p: { xs: 4, md: 6 },
            borderRadius: 6,
            maxWidth: "100%",
            mx: "auto",
            background: "linear-gradient(145deg, #e7edf6ff, #c3cfe2)",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(8px)",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{
              mb: 2,
              color: "#4B5563",
            }}
          >
            Our Story
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "1rem",
              color: "#374151",
              lineHeight: 1.75,
            }}
          >
            <strong style={{ color: "#6D28D9" }}>Notely</strong> was born out of
            a simple need: a smarter, cleaner way to capture thoughts, ideas,
            and tasks—without the clutter. What started as a personal tool to
            stay organized soon grew into a passion project shared with friends,
            students, and busy professionals who wanted more than just another
            note-taking app.
            <br />
            <br />
            We believe in{" "}
            <span style={{ color: "#4338CA", fontWeight: 500 }}>
              simplicity, focus, and speed
            </span>
            . Whether you're jotting down a quick idea, organizing study notes,
            or planning your next big project, Notely is designed to help you
            think clearly and stay productive.
            <br />
            <br />
            Built with love by <strong>Waithaka</strong> who understands the
            chaos of digital overload, Notely is here to bring
            <span style={{ color: "#6D28D9", fontWeight: 500 }}>
              {" "}
              clarity to your creativity
            </span>
            .
          </Typography>
        </Paper>
        {/* <MarkdownEditor/> */}
      </Stack>
    </>
  );
}

export default Homepage;
