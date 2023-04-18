import React from 'react';
import Header from './Header';
import Footer from './Footer';

function BioPackaging() {
    return (
        <div>
            <Header/>
            <main>
                <div className="top-packing">
                    <div className="container">
                        <div className="main-packing">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="content-developing">
                                        <h4>Developing Materials</h4>
                                        <h3>
                                            That Make<br/>
                                            Bio-Packaging<br/>
                                            Truly Sustainable
                                        </h3>
                                        <p>Nam tincidunt arcu tortor, eget dapibus massa sagittis sed duis in efficitur
                                            justo proin vehicula
                                            massa ac laoreet auctor fusce volutpat auctor lectus, finibus pellentesque
                                            turpis...</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="image-devlopd">
                                        <img src={process.env.PUBLIC_URL + '/assets/images/tree.png'} alt="No Image Found" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hover-boxesgreen">
                    <div className="container-fluid">
                        <div className="mian-hover">
                            <div className="row iner-row-hovr-bx">
                                <div className="col-lg-4 first-hver-bx">
                                    <img src={process.env.PUBLIC_URL + '/assets/images/production.png'} alt="No Image Found" />
                                        <h4>01</h4>
                                        <p>Responsible Consumption<br/>
                                            & Production</p>
                                </div>
                                <div className="col-lg-4 first-hver-bx">
                                    <img src={process.env.PUBLIC_URL + '/assets/images/eye.png'} alt="No Image Found" />
                                        <h4>02</h4>
                                        <p>Climate Action</p>
                                </div>
                                <div className="col-lg-4 first-hver-bx">
                                    <img src={process.env.PUBLIC_URL + '/assets/images/hand.png'} alt="No Image Found" />
                                        <h4>03</h4>
                                        <p>Partnership For The Goals</p>
                                </div>
                                <div className="col-lg-4 first-hver-bx">
                                    <img src={process.env.PUBLIC_URL + '/assets/images/rise.png'} alt="No Image Found" />
                                        <h4>04</h4>
                                        <p>Decent Work & Econonomic<br/>
                                            Growth</p>
                                </div>
                                <div className="col-lg-4 first-hver-bx">
                                    <img src={process.env.PUBLIC_URL + '/assets/images/blocks.png'} alt="No Image Found" />
                                        <h4>05</h4>
                                        <p>Industry, Innovation &<br/>
                                            Infrastructure</p>
                                </div>
                                <div className="col-lg-4 first-hver-bx">
                                    <img src={process.env.PUBLIC_URL + '/assets/images/production.png'} alt="No Image Found" />
                                        <h4>06</h4>
                                        <p>Sustainable Cities & Countries</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <Footer/>
        </div>
    );
}

export default BioPackaging;