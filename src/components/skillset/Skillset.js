import React from 'react';

import { skillSetImages } from '../../images/index';
import './Skillset.css';

function Skillset() {
    const imageDiv = Object.values(skillSetImages).map((image, index) => {
        return (
            <img src={image} key={index} alt="" width="60" height="60" hspace="10" vspace="10" />
        );
    });

    return (
        <div>
            <h4 className="skillset-header">MY SKILLSET:</h4>
            <div className="images">
                {imageDiv}
            </div>
        </div>
    );
}

export default Skillset;