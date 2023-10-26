import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HomePage from "./page/HomePage/home"
import NotFound from "./page/Error"
import Header from './component/Header';
import Cart from './page/Cart';
import OrderInfo from "./page/Order/info"
import OrderPayment from './page/Order/payment';
import OrderReturn from './page/Order/return';
import Footer from './component/Footer';
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
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/order/info" element={<OrderInfo/>} />
                    <Route path="/order/payment" element={<OrderPayment />} />
                    <Route path="/order/return" element={<OrderReturn />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />

            </Router>
            </PersistGate>

        </Provider>
    );
}

export default App;
