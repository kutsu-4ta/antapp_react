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
import { Helmet } from "react-helmet"

const App: VFC = () => {

    return (
        <>
            <Helmet>
                <title>Yamashita antapp</title>
                <head>
                    {/*Google Tag Manager*/}
                    <script>{`
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-KCTM5ZZ');
                    `}</script>
                    {/*End Google Tag Manager*/}
                </head>
            </Helmet>
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
