
import { createTheme } from "@mui/material/styles";

const them = createTheme({
    breakpoints: {
        xs: 500,
        sm: 600,
        md: 800,
        lg: 1000,
        xlg: 1200,
        sl: 1500,
    },
    palette: {
        primary: {
            main: "#181818",
        },
        secondary: {
            main: "#242424",
        },
        bg_color: {
            main: "#151515",
        },
        bg_form: {
            main: "#242424",
        },
        my_white: {
            main: "#ffffff",
        },
        red: {
            main: "red",
        },
        blue: {
            main: "#1877f2",
        }
    },
    typography: {
        h1: {
            fontSize: "36px",
            fontWeight: '700',
            colors: "#ffffff",
        },
        h2: {
            fontSize: "30px",
            fontWeight: '700'
        },
        h3: {
            fontSize: "20px",
            fontWeight: '700'
        },
        body1: {
            fontSize: "20px",
            fontWeight: '100'
        }
    },
})

export default them
