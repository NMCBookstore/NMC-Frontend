import React from "react";
import { Link } from 'react-router-dom';

const BreadcrumbConponent: React.FunctionComponent = () => {
    return (
        <nav className="breadcrumb">
            <div className="px-3">
                <ol>
                    <li>
                        <Link to="/">Home</Link>
                        <i className="bdx-caret"></i>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                        <i className="bdx-caret"></i>
                    </li>
                    <li className="active" aria-current="page">Lorem ipsum dolor sit amet</li>
                </ol>
            </div>
        </nav>
    );
};

export default BreadcrumbConponent;