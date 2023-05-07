import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0b2942', // dark blue
    },
    secondary: {
      main: '#ffffff', // white
    },
    info: {
      main: '#2196f3', // shade of blue
    },
    success: {
      main: '#4caf50', // green color for success messages
    },
    warning: {
      main: '#ff9800', // orange color for warning messages
    },
    error: {
      main: '#f44336', // red color for error messages
    },
  },
});

export default theme;
