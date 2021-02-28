import React from 'react';

import { pjLogo } from '../../images/index';
import './Header.css';

function Header() {
    return (
        <div>
            <div className="mini-container">
                <div className="mini-item">
                    <img src={pjLogo} alt="" width="60" height="60" />
                </div>
                <div className="mini-item">
                    <h1>Hi, I'm Prateek Tatikonda :)</h1>
                </div>
            </div >
            <div className="anim">
                <p>WELCOME TO MY PORTFOLIO.</p>
            </div>
            <div className="main">
                <p>Computer Science Engineering Undergraduate At <b>SRMIST</b>.I am a curious programmer and Front-end
                    developer</p>
                <p><b><cite>DEVELOPING IS MY PASSION</cite></b></p>
            </div>
        </div>
    );
}

export default Header;