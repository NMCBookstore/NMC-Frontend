import React from "react";
import { useRoutes } from "react-router-dom";

import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RouterConfig from "./RouterConfig";

const App = () => {
  const routing = useRoutes(RouterConfig);
  return (
    // <Provider store={store}>
    //     <PersistGate loading = {null} persistor={persistor}>

    //     <Router>
    //         <Header />
    //         <Routes>
    //             <Route path="/" element={<HomePage/>} />
    //             <Route path="/cart" element={<Cart />} />
    //             <Route path="/order/info" element={<OrderInfo/>} />
    //             <Route path="/order/payment" element={<OrderPayment />} />
    //             <Route path="/order/return" element={<OrderReturn />} />
    //             <Route path="*" element={<NotFound />} />
    //         </Routes>
    //         <Footer />

    //     </Router>
    //     </PersistGate>

    // </Provider>
    <> {routing}</>
  );
};

export default App;
