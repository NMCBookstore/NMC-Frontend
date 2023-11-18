import React from "react";
import { Link } from 'react-router-dom';

const BreadcrumbConponent: React.FunctionComponent = () => {
    return (
        <nav className="breadcrumb">
            <ol>
                <li>
                    <Link to="/"><i className="bdx-home"></i> Home</Link>
                    <i className="bdx-caret"></i>
                </li>
                <li>
                    <Link to="/cart">Cart</Link>
                    <i className="bdx-caret"></i>
                </li>
                <li className="active" aria-current="page">Lorem ipsum dolor sit amet</li>
            </ol>
        </nav>
    );
};

export default BreadcrumbConponent;