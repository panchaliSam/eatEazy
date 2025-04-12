import React from 'react';
import  ResponsiveAppBar from '../common/Navbar'
import { CssBaseline } from '@mui/material';
import HeroSection from '../components/HeroSection'

export const Home: React.FC = () => {
    return (
        <div>
            <CssBaseline />
            <ResponsiveAppBar />
                <HeroSection />
        </div>
    )
};