import '@fontsource/league-spartan/300.css';
import '@fontsource/league-spartan/400.css';
import '@fontsource/league-spartan/500.css';
import '@fontsource/league-spartan/700.css';

import { createTheme } from '@mui/material/styles';

export const themeData: any = {
    palette: {
        primary: {
            light: '#67b2e3',
            main: '#2691d7',
            dark: '#1b6697',
            contrastText: '#EEF4F6',
        },
        secondary: {
            light: '#175781',
            main: '#0f3a56',
            dark: '#081d2b',
            contrastText: '#364B63',
        },
        success: {
            light: '#19B373',
            main: '#138656',
            dark: '#0D5939',
            contrastText: '#E9FCF4',
        },
        error: {
            light: '#F07575',
            main: '#EE5D5D',
            dark: '#EC4646',
            contrastText: '#FCE8E8',
        },
        warning: {
            light: '#F4E98B',
            main: '#F1E574',
            dark: '#F0E15C',
            contrastText: '#453F07',
        },
        info: {
            light: '#0081CC',
            main: '#0071B3',
            dark: '#006199',
            contrastText: '#E6F6FF',
        },
        grey: {
            light: '#5F7686',
            main: '#556977',
            dark: '#4A5C68',
            contrastText: '#F0F3F4',
        },
        text: {
            primary: '#555',
            secondary: '#777',
        },
        background: {
            default: '#fff',
        },
    },
    typography: {
        fontFamily: 'League Spartan, sans-serif',
        textTransform: 'none',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: 0,
                    padding: "10px 20px"
                },
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                },
            },
        },
    }
}

export const theme = createTheme(themeData)