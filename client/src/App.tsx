import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Home } from './pages/Home';

const theme = createTheme({
    palette: {
        background: {
            default: '#ffffff',
        },
    },
});

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Home />
        </ThemeProvider>
    );
};

export default App;
