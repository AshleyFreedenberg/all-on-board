import React, { Component } from "react";
import aob from '../../aob.png'
import "./footer.css";




class Footer extends Component {
    render() {

        return (

            <footer className="page-footer foot-padding sticky-bottom font-small text-dark">
                <div className="container">
                <hr/>
                    <div className="footer-copyright footerText text-center py-3"> © 2019 Copyright | <i class="fab fa-github"></i> <a href="https://github.com/AshleyFreedenberg/all-on-board">All on Board Github Repo</a>
                    </div>
                </div>
            </footer>
        )

    }
}
export default Footer;