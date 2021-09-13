import React from "react";
import '../styles/Footer.css';

const styles = {
    navbarStyle: {
        background: 'gray',
        justifyContent: 'flex-end'
    },
};

function Footer() {

    return (
        <footer style={styles.navbarStyle} className="footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <ul class="social-networks-ul list-inline">
                            <li><a href="/resume" title="Jorge's Resume"><i class="far fa-file-alt"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/jorge-bensus" title="Jorge's Linkedin" target="_blank"
                                class="linkedin-button"><i class="fab fa-linkedin-in" alt="Linkedin"></i></a></li>
                            <li><a href="https://github.com/gittohubbo" title="Jorges's Github" target="_blank"
                                class="github-button"><i class="fab fa-github"></i></a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 copyright">
                        <small>Developed by JB</small>
                        <p class="copyright">Using JavaScript and React</p>
                    </div>
                </div>
            </div>

        </footer>

    )

}

export default Footer;

