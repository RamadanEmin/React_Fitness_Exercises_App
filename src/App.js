import React from 'react';
import { Box } from '@mui/material';

import './App.css';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto" >
            <Navbar />
        </Box>
    );
};

export default App;