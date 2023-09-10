import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="main-footer style-one">
            <div className="bg-image" style={{ backgroundImage: "url(./images/background/5.jpg)" }}></div>
            {/* <!--Widgets Section--> */}
            <div className="widgets-section">
                <div className="auto-container">
                    <div className="row">
                        {/* <!--Footer Column--> */}
                        <div className="footer-column col-xl-3 col-sm-6">
                            <div className="footer-widget about-widget">
                                <div className="logo">
                                    <a href="https://kodesolution.com/html/2023/soluris-html/index.html"><img src="./Soluris - Ecology &amp; Solar HTML Template _ Home Page 01_files/logo-2.png" alt="" /></a>
                                </div>
                                <p className="text mb-2">012 Broklyn Street, 57 <br className="d-none d-xl-block" /> New York, USA</p>
                                <p className="mb-2"><a className="text" href="mailto:needhelp@domain.com">needhelp@domain.com</a></p>
                                <p><a className="text-white" href="tel:9993330000">999 333 0000</a></p>
                            </div>
                        </div>
                        {/* <!--Footer Column--> */}
                        <div className="footer-column col-xl-3 col-sm-6">
                            <div className="footer-widget">
                                <h3 className="widget-title">Service</h3>
                                <ul className="user-links">
                                    <li><a href="https://kodesolution.com/html/2023/soluris-html/index.html#">Reliability &amp; Punctuality</a></li>
                                    <li><a href="https://kodesolution.com/html/2023/soluris-html/index.html#">Trusted Franchise</a></li>
                                    <li><a href="https://kodesolution.com/html/2023/soluris-html/index.html#">Warehoues Storage</a></li>
                                    <li><a href="https://kodesolution.com/html/2023/soluris-html/index.html#">Real Time Tracking</a></li>
                                    <li><a href="https://kodesolution.com/html/2023/soluris-html/index.html#">Transparent Pricing</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!--Footer Column--> */}
                        <div className="footer-column col-xl-3 col-sm-6">
                            <div className="footer-widget gallery-widget">
                                <h3 className="widget-title">Projects</h3>
                                <ul className="user-links two-column">
                                    <li><a href="https://kodesolution.com/html/2023/soluris-html/index.html#">About</a></li>
                                    <li><a href="https://kodesolution.com/html/2023/soluris-html/index.html#">New Projects</a></li>
                                    <li><a href="https://kodesolution.com/html/2023/soluris-html/index.html#">Our History</a></li>
                                    <li><a href="https://kodesolution.com/html/2023/soluris-html/index.html#">Contact</a></li>
                                    <li><a href="https://kodesolution.com/html/2023/soluris-html/index.html#">Blog Post</a></li>
                                    <li><a href="https://kodesolution.com/html/2023/soluris-html/index.html#">Press Release</a></li>
                                    <li><a href="https://kodesolution.com/html/2023/soluris-html/index.html#">Help Topics</a></li>
                                    <li><a href="https://kodesolution.com/html/2023/soluris-html/index.html#">Privacy Policy</a></li>
                                    <li><a href="https://kodesolution.com/html/2023/soluris-html/index.html#">Terms Of Use</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!--Footer Column--> */}
                        <div className="footer-column col-xl-3 col-sm-6">
                            <div className="footer-widget">
                                <h3 className="widget-title">Newsletter</h3>
                                <div className="widget-content">
                                    <div className="subscribe-form">
                                        <div className="text">Subscribe our newsletter to get our latest update &amp; news</div>
                                        <form method="post" action="https://kodesolution.com/html/2023/soluris-html/index.html#">
                                            <div className="form-group">
                                                <input type="email" name="email" className="email" value="" placeholder="Email Address" required="" />
                                                <button type="button" className="theme-btn btn-style-one">
                                                    <span className="btn-title"><i className="fa fa-paper-plane"></i></span>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--Footer Bottom--> */}
            <div className="footer-bottom">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="copyright-text">
                            <p>© Copyright 2023 by <a href="https://kodesolution.com/html/2023/soluris-html/index.html">Company.com</a></p>
                        </div>
                        <ul className="social-icon-two">
                            <li>
                                <a href="https://kodesolution.com/html/2023/soluris-html/index.html#"><i className="fab fa-facebook"></i></a>
                            </li>
                            <li>
                                <a href="https://kodesolution.com/html/2023/soluris-html/index.html#"><i className="fab fa-twitter"></i></a>
                            </li>
                            <li>
                                <a href="https://kodesolution.com/html/2023/soluris-html/index.html#"><i className="fab fa-pinterest"></i></a>
                            </li>
                            <li>
                                <a href="https://kodesolution.com/html/2023/soluris-html/index.html#"><i className="fab fa-instagram"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
