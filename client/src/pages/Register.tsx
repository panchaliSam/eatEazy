import React from 'react';
import  ResponsiveAppBar from '../common/Navbar'
import { CssBaseline } from '@mui/material';
import RegisterSection from '../components/RegisterSection'

const Login: React.FC = () => {
    return (
        <div>
            <CssBaseline />
            <ResponsiveAppBar />
            <RegisterSection />
        </div>
    )
};

export default Login;