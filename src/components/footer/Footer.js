import React from 'react';
import './Footer.css';
import { footerImage } from '../../images/index';

const githubLink = "https://github.com/PrateekTatikonda/";
const linkedInLink = "https://www.linkedin.com/in/prateek-tatikonda-877a2a1b5/";

function Footer() {
    return (
        <footer className="footerclass" style={{ backgroundImage: `url("${footerImage}")` }}>
            <div>
                <ul>
                    <p><cite>LIKE MY WORK?? <b>STAY IN TOUCH!!</b></cite></p>
                    <li>1.Mail id: prateektkonda@gmail.com</li>
                    <li>2.Phone number: 8328295776</li>
                    <li>3.Github: <a href={githubLink}>Click Here</a></li>
                    <li>4.Linkedin: <a href={linkedInLink}>Click Here</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;