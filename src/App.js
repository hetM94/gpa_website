// src/App.js
import React from 'react';
import './assets/styles/styles.scss'; // Import your SCSS styles here
import Header from './assets/components/Header';
import MainSection from "./assets/components/MainSection";
import DeptCarousal from "./assets/components/DeptCarousal"; // Correct the import path
import Footer from './assets/components/Footer';

const App = () => {
    return (
        <div className='app'>
            <Header />
            <MainSection />
            <DeptCarousal />
            <Footer />
        </div>
    );
};

export default App;
