import React, { Component } from "react";
import "./footer.css";




class Footer extends Component {
    render() {

        return (

            <footer className="page-footer foot-padding sticky-bottom font-small text-dark">
                <div className="container">
                <hr/>
                    <div className="footer-copyright footerText text-center py-3"> © 2019 Copyright | <i className="fab fa-github"></i> <a href="https://github.com/AshleyFreedenberg/all-on-board" rel="noopener noreferrer" target="_blank">All on Board Github Repo</a>
                    </div>
                </div>
            </footer>
        )

    }
}
export default Footer;