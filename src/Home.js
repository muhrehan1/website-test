import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Home() {
    return (
        <div>
            <main>

                <div className="content" id="content">
                    <div className="all-content">
                        <section className="home_banner">
                            <div className="container">
                                <div className="row align-items-end">
                                    <div className="col-lg-12 col-sm-12 bnr_hme1">
                                        <div className="content-hme">
                                            <h4>Developing<br/>
                                                materials that<br/>
                                                are truly sustainable
                                            </h4>
                                            <p>Nam tincidunt arcu tortor, eget dapibus massa sagittis sed duis in
                                                efficitur justo proin vehicula<br/>
                                                massa ac laoreet auctor fusce volutpat auctor lectus, finibus
                                                pellentesque turpis...
                                            </p>
                                            <div className="scroll_btn">
                                                <a href="#!">Scroll Down</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="hme2_sec">
                            <div className="sec2_hm_1 same-1">
                                <div className="container">
                                    <div className="second_hm2_sec1">
                                        <div className="row">
                                            <div className="col-lg-7 col-sm-12">
                                                <div className="contnt-scnd_sec">
                                                    <h4>
                                                        Chemistry, materials,<br/>
                                                        sustainability
                                                    </h4>
                                                    <p>
                                                        Nam tincidunt arcu tortor, eget dapibus massa sagittis sed duis
                                                        in efficitur justo proin vehicula <br />
                                                        massa ac laoreet auctor fusce volutpat auctor lectus, finibus
                                                        pellentesque turpis dapibus massa <br />
                                                        sagittis sed duis in efficitur justo proin vehicula massa ac
                                                        laoreet auctor fusce volutpat auctor <br />
                                                        lectus, finibus... </p>
                                                    <p>
                                                        Nam tincidunt arcu tortor, eget dapibus massa sagittis sed duis
                                                        in efficitur justo proin vehicula <br />
                                                        massa ac laoreet auctor fusce volutpat auctor lectus, finibus
                                                        pellentesque turpis dapibus massa <br />
                                                        sagittis sed duis in efficitur justo proin vehicula massa ac
                                                        laoreet auctor fusce volutpat auctor <br />
                                                        lectus, finibus...</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-sm-12">
                                                <div className="vd_img">
                                                    <img src={process.env.PUBLIC_URL + '/assets/images/vd_main.png'}  alt="No Image found" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="hme3_sec">
                            <div className="container">
                                <div className="third_sec_hme">
                                    <div className="col-1-third">
                                        <div className="row align-items-center">
                                            <div className="col-lg-5 col-sm-12">
                                                <div className="cnt-head-thrd">
                                                    <h4>Facing <br/>
                                                        Problems</h4>
                                                </div>
                                            </div>
                                            <div className="col-lg-7 col-sm-12 d-flex justify-content-end">
                                                <div className="cnt-para-thrd">
                                                    <p>Nam tincidunt arcu tortor, eget dapibus massa sagittis sed duis
                                                        in efficitur justo proin vehicula <br/>
                                                        massa ac laoreet auctor fusce volutpat auctor lectus, finibus
                                                        pellentesque turpis dapibus massa <br/>
                                                        sagittis sed duis in efficitur justo proin vehicula massa ac
                                                        laoreet auctor fusce volutpat auctor <br/>
                                                        lectus, finibus...</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2-thrd">
                                        <div className="row">
                                            <div className="col-lg-12 col-sm-12">
                                                <div className="cnt_col_scnd">
                                                    <h6>01</h6>
                                                    <h5>
                                                        Average human consumes 260 grams of <br/>
                                                        micro plastic annually through packaging <br/>
                                                        and personal care products
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="hme4_sec">
                            <div className="sec3_hm_1 same-2">
                                <div className="container">
                                    <div className="thrd1-sec3">
                                        <div className="row">
                                            <div className="col-lg-6 col-sm-12">
                                                <div className="cnt-trd-sec">
                                                    <h4>Our Mission</h4>
                                                    <p>We aim to remove world’s overreliance on <br />
                                                        fossil-based materials in our daily lives by <br />
                                                        replacing it with sustainable plant-based materials <br />
                                                        to secure human, animal and environmental health.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-sm-12">
                                                <div className="thrd-img">
                                                    <img src={process.env.PUBLIC_URL + '/assets/images/flask.png'} alt="No Image Found" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="thrd2-sec3">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="cnt-thrd2">
                                                    <h4>Are you an investor?</h4>
                                                    <div className="lst_para">
                                                        <p>
                                                            Nam tincidunt arcu tortor, eget dapibus massa sagittis sed
                                                            duis in efficitur <br />
                                                            massa ac laoreet auctor fusce volutpat auctor lectus,
                                                            finibus pellentesque <br />
                                                            sagittis sed duis in efficitur justo proin vehicula massa ac
                                                            laoreet auctor <br />
                                                            lectus, finibus...
                                                        </p>
                                                        <p>
                                                            Nam tincidunt arcu tortor, eget dapibus massa sagittis sed
                                                            duis in efficitur <br />
                                                            massa ac laoreet auctor fusce volutpat auctor lectus,
                                                            finibus pellentesque <br />
                                                            sagittis sed duis in efficitur justo proin vehicula massa ac
                                                            laoreet auctor <br />
                                                            lectus, finibus...
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="btn_thrd2">
                                                    <a href="#!">Click Here</a>
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
        </div>
    );
}

export default Home;