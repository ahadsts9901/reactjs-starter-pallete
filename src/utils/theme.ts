import '@fontsource/jost/300.css';
import '@fontsource/jost/400.css';
import '@fontsource/jost/500.css';
import '@fontsource/jost/700.css';

import { createTheme } from '@mui/material/styles';

export const themeSchema: any = {
    palette: {
        primary: {
            light: '#80c8f9',
            main: '#1392E3',
            dark: '#075c9d',
            contrastText: '#fff',
        },
        secondary: {
            light: '#64f1ba',
            main: '#02B87D',
            dark: '#00815c',
            contrastText: '#e9edef',
        },
    },
    typography: {
        fontFamily: 'Josefin Sans, sans-serif',
        textTransform: 'none',
        color: "#454545"
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: '50px',
                    padding: "10px 20px",
                },
                primary: {
                    backgroundColor: '#1392E3',
                    color: "#fff"
                },
                secondary: {
                    backgroundColor: '#02B87D',
                    color: "#fff"
                },
                gradient: {
                    background: "linear-gradient(90deg, rgba(19,146,227,1) 0%, rgba(2,184,125,1) 100%)",
                    color: "#fff"
                }
            }
        },
    }
}

export const theme = createTheme(themeSchema);