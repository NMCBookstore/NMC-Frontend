import React, { useEffect } from 'react';

const HomePage: React.FunctionComponent = () => {
    return (
        <div>
            <div className="marquee-container">
                <div className="lg:container mx-auto">
                    <div className="marquee px-3">
                        <p>Shop all <span>◆</span> </p>
                        <p>New arrivals <span>◆</span> </p>
                        <p>Bestsellers <i className="bdx-like ml-2 text-accent inline-flex items-center"></i><span>◆</span> </p>
                        <p>Fiction <span>◆</span> </p>
                        <p>Non-Fiction<span>◆</span> </p>
                        <p>Children’s <span>◆</span> </p>
                        <p>Stationery and gifts <span>◆</span> </p>
                        <p>Gift cards and vouchers</p>
                    </div>
                </div>
            </div>
            <h1>here</h1>
        </div>
    );
};

export default HomePage;
