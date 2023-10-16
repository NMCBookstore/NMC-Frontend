import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from "./page/home"
import NotFound from "./page/error"
import Header from './component/header';
import Footer from './component/footer';
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
