import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends React.Component
{
    render()
    {
        return (
            <div className="footer" id="footer">
                <div className="footer-inner">
                    <div className="container">
                        <div className="top-footer">
                            <div className="row">
                                <div className="col-lg-4 col-sm-12 ft1">
                                    <div className="img-footer-logo">
                                        <img src={process.env.PUBLIC_URL + '/assets/images/footer-logo.png'} alt="No Image Found" />
                                    </div>
                                    <div className="text-footer">
                                        <p>
                                            Nam tincidunt arcu tortor, eget dapibus massa sagittis
                                            sed duis in efficitur justo proin vehicula massa ac laoreet
                                            auctor fusce volutpat auctor lectus, finibus...
                                        </p>
                                        <p>
                                            Nam tincidunt arcu tortor, eget dapibus massa sagittis
                                            sed duis in efficitur justo proin vehicula massa ac laoreet
                                            auctor fusce volutpat auctor lectus, finibus...
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-12 ft2">
                                    <div className="heading-footer">
                                        <h4>Quick Links</h4>
                                    </div>
                                    <div className="menu-footer">
                                        <div className="menu-ftr-inner">
                                            <ul>
                                                <li><a href="#!">Home & personal care technology</a></li>
                                                <li><a href="#!">Bio packaging technology</a></li>
                                                <li><a href="#!">Investors & Partners</a></li>
                                                <li><a href="#!">News & Announcement</a></li>
                                                <li><a href="#!">Team</a></li>
                                                <li><a href="#!">Connect</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-sm-12 ft3">
                                    <div className="heading-footer">
                                        <h4>Contact Info</h4>
                                    </div>
                                    <div className="location-main">
                                        <div className="location-inner">
                                            <ul>
                                                <li><a href="#!">+123 46 7748</a></li>
                                                <li><a href="#!">admin123gmail.com</a></li>
                                                <li>Ny 1011 Street 13 Newyork</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-12 ft4">
                                    <div className="heading-footer">
                                        <h4>Follow Us</h4>
                                    </div>
                                    <div className="quick-links">
                                        <div className="quik-inner">
                                            <ul>
                                                <li><a href="#!">Facebook</a></li>
                                                <li><a href="#!">Instagram</a></li>
                                                <li><a href="#!">Twitter</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="scnd-footer">
                            <div className="row">
                                <div className="col-lg-6 col-sm-12 ft5">
                                    <div className="newsletter-main">
                                        <h4>Subscribe<br/>to our newsletter</h4>
                                    </div>
                                    <div className="text-footer">
                                        <p>Nam tincidunt arcu tortor, eget dapibus massa sagittis
                                            sed duis in efficitur justo proin vehicula massa ac laoreet
                                            auctor fusce volutpat auctor lectus, finibus...
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12 ft6">
                                    <div className="newsletter-form">
                                        <div className="main-form">
                                            <div className="email-inpt">
                                                <input type="email" name="email-newsletter" id="email-news"
                                                       placeholder="Enter Your Email" required />
                                            </div>
                                            <div className="btn_newsletter">
                                                <input type="button" value="Subscribe Now" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="third-footer">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-sm-12 ft7">
                                    <div className="copyright">
                                        <p className="text-start"> Copyrights 2023. Sustanix Build Not To Last. All
                                            Rights Reserved.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12 ft7">
                                    <div className="developed">
                                        <p className="text-end">Designed & Developed By Tekthrone</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;