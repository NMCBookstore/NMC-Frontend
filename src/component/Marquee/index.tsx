import React from "react";
const NoteNotify: React.FunctionComponent = () => {
    return (
        <div className="marquee-container">
            <div className="flex">
                <div className="marquee px-3 mx-auto">
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
    );
};

export default NoteNotify;