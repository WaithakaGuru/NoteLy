import { createTheme } from "@mui/material";

const theme = createTheme({
    palette:{
        primary:{
            main: "#364153",
        },
        secondary: {
            main: "#6D28D9"
        },
        text:{

        }
    },
    typography: {
        fontFamily: "Montserrat",
    },
    breakpoints: {
        values: {
        xs: 0,
        sm: 680,
        md: 990,
        lg: 1200,
        xl: 1400,
        },
    },
})
export default theme;