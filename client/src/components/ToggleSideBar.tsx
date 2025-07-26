import SideBar from "../components/SideBar";
import { Box, Drawer} from "@mui/material";
import useNote from "../store/notelyStore";


function ToggleSideBar() {
    const {sideBarOpen, setSideBarOpen} = useNote()
  return (
    <Box>
        <Drawer
          open={sideBarOpen}
          onClick={() => setSideBarOpen(false)}
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: "#011",
              color: "#fff",
              width: "12rem",
              borderRight: "2px solid #444",
            },
            "& .MuiBackdrop-root": {
              background: "rgba(0,0,0,.2)",
            },
          }}
        >
          <SideBar />
        </Drawer>
        <SideBar />
      </Box>
  )
}

export default ToggleSideBar