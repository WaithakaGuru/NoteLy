import { useState } from "react";
import SideBar from "../components/SideBar";
import { Box, Drawer, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";


function ToggleSideBar() {
    const [isOpen, setIsOpen] = useState(false);
    
  return (
    <Box>
        <Drawer
          open={isOpen}
          onClick={() => setIsOpen(false)}
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
        <IconButton
          sx={{
            bgcolor: "#dce6f6",
            "&:hover": { bgcolor: "#a9b6ca" },
            top: "4.4rem",
            left: ".8rem",
            position: "absolute",
            display: { sm: "none" },
          }}
          onClick={() => setIsOpen(true)}
          title="Open Side bar"
          className="w-11 h-11 z-10"
        >
          <Menu className="text-purple-800" />
        </IconButton>
      </Box>
  )
}

export default ToggleSideBar