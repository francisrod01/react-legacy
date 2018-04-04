import React from 'react';

const Navigation = (props) => {
    return (
        <div className="header">
            <ul className="nav nav-pills justify-content-end">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                </li>
            </ul>
            <h3 className="text-muted">legacy</h3>
        </div>
    );
}

export default Navigation;
