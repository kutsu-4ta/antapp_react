import React from 'react';
import {VFC} from 'react';
import { CircularProgress } from '@mui/material';
import { Suspense } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import SkillSet from "./components/pages/Skillset";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Work from "./components/pages/Work";

const App: VFC = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Suspense fallback={<CircularProgress/>}><Home/></Suspense>}/>
                    <Route path="about" element={<Suspense fallback={<CircularProgress/>}><About/></Suspense>}/>
                    <Route path="skills" element={<SkillSet/>} />
                    <Route path="work" element={<Suspense fallback={<CircularProgress/>}><Work/></Suspense>}/>
                    <Route path="contact" element={<Suspense fallback={<CircularProgress/>}><Contact/></Suspense>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
