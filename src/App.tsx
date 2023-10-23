import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HomePage from "./page/HomePage/home"
import NotFound from "./page/error"
import Header from './component/header';
import Footer from './component/footer';
import { store, persistor } from './app/store';

import { PersistGate } from 'redux-persist/lib/integration/react';


function App() {
    return (
        <Provider store={store}>
            <PersistGate loading = {null} persistor={persistor}>

            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />

            </Router>
            </PersistGate>

        </Provider>
    );
}

export default App;
