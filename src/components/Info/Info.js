import React from 'react';
import './Info.css';

function Info() {
    return (
        <div>
            <div className="list">
                <ul className="ul-me">
                    <p><b>MY PROJECTS:</b></p>
                    <li><b>1.</b> Developed a simple responsive website based on a TV-SHOW and static hosted it
                    at <a href="https://prateektatikonda.github.io/"><b>Here</b></a></li>
                    <li><b>2.</b> Developed a validation login portal using HTML, CSS and JavaScript.</li>
                    <li><b>3.</b> Developed a dashboard unit as an industrial project for a company called <a
                        href="https://www.ixar.in/"><b>IXAR</b></a>.</li>
                </ul>
            </div>

            <div className="list">
                <ul className="ul-me">
                    <p><b>MY ACHEIVEMENTS:</b></p>
                    <li><b>1.</b> Selected as a Club member at <b>SRM AUV</b> in software domain.</li>
                    <li><b>2.</b> Selected as a Club member at <b>IEEE SRM</b> in Web and app development domain.
                    </li>
                    <li><b>3.</b>Selected as a member in <b>IXAR ROV</b> as a frontend developer</li>
                </ul>
            </div>
        </div>
    );
}
export default Info;