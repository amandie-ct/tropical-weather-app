import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubAlt } from "@fortawesome/free-brands-svg-icons";


const Footer: React.FC = () => {
    return <footer className="footer">
        <div className="footer-author">
            <p>Por Amanda Carvalho</p>
            <div className="footer-links">
                <a href="https://www.linkedin.com/in/carvalhot-amanda/">
                    <FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://github.com/amandie-ct">
                    <FontAwesomeIcon icon={faGithubAlt} /></a>
            </div>
        </div>

        <p>Background vector by&nbsp;
            <a href='https://www.freepik.com/vectors/background'>Freepik</a>
        </p>
    </footer>
}

export default Footer;