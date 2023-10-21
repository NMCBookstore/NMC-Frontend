import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from "./page/home"
import NotFound from "./page/error"
import Header from './component/header';
import Footer from './component/footer';
import store from './app/store';

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
