import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Inventors_Partners() {
    return (
        <div>
            <Header/>
            <main>
                <div className="content" id="content">
                    <div className="all-content">
                        <section className="banner-sec">
                            <div className="container">
                                <div className="row">
                                    <div className="inner-banner">
                                        <div className="banner-content">
                                            <h2>
                                                Investors & <br/>
                                                Partners
                                            </h2>
                                            <div className="text-banner">
                                                <p>
                                                    Nam tincidunt arcu tortor, eget dapibus massa sagittis sed duis in
                                                    efficitur justo proin vehicula massa ac laoreet auctor fusce
                                                    volutpat auctor lectus, finibus pellentesque turpis...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="investor-box">
                            <div className="container">
                                <div className="row">
                                    <div className="inner-invest-box">
                                        <div className="invest-box-main">
                                            <div className="row">
                                                <div className="col-lg-4 col-sm-12">
                                                    <div className="invst-back">
                                                        <div className="invest-img">
                                                            <img src={process.env.PUBLIC_URL + '/assets/images/bright.png'} alt="No Image Found"/>
                                                        </div>
                                                        <div className="invest-content">
                                                            <h4>Brightlands Chemelot Campus</h4>
                                                            <a href="#!">www.brightlands.com</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-sm-12">
                                                    <div className="invst-back">
                                                        <div className="invest-img low-wdth">
                                                            <img src={process.env.PUBLIC_URL + '/assets/images/sibo.png'} alt="No Image Found"/>
                                                        </div>
                                                        <div className="invest-content">
                                                            <h4>Sibo</h4>
                                                            <a href="#!">https://sibo.tech/</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-sm-12">
                                                    <div className="invst-back">
                                                        <div className="invest-img low-wdth2">
                                                            <img src={process.env.PUBLIC_URL + '/assets/images/world.png'} alt="No Image Found" />
                                                        </div>
                                                        <div className="invest-content">
                                                            <h4>World Startup</h4>
                                                            <a href="#!">www.worldstartup.co</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

            </main>
            <Footer/>
        </div>
    );
}

export default Inventors_Partners;