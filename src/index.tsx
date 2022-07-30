import ReactDOM from 'react-dom';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from 'react-redux';

import {loadingSlice} from "./features/Loading";
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import EnhancedLoading from "./containers/Loading";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@mui/material/styles";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";
import ResponsiveDrawer from "./components/molecules/drawer/ResponsiveDrawer";

ReactDOM.render(
    <App/>
    , document.getElementById('root'),
);