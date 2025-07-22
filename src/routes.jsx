import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Audios from './pages/Audios';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/audios" element={<Audios />} />
        </Routes>
    );
}

export default AppRoutes;