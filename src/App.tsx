import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HomePage from "./page/HomePage/home"
import NotFound from "./page/error"
import Header from './component/Header';
import Footer from './component/Footer';
import { setupListeners } from '@reduxjs/toolkit/query';

const store = configureStore({
    reducer: {

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(),
});

setupListeners(store.dispatch);
function App() {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </Provider>
    );
}

export default App;
