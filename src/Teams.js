import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Teams() {
    return (
        <div>
            <Header />
            <main>
                <div className="content" id="content">
                    <div className="all-content">
                        <section className="banner-sec">
                            <div className="container">
                                <div className="row">
                                    <div className="inner-banner">
                                        <div className="banner-content">
                                            <h2>
                                                Our<br/>
                                                Team
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
                        <section className="our-teams">
                            <div className="container">
                                <div className="row">
                                    <div className="team-members">
                                        <div className="allmembers">
                                            <div className="row">
                                                <div className="col-lg-3 col-sm-12">
                                                    <div className="members">
                                                        <div className="member-img">
                                                            <img src={process.env.PUBLIC_URL + '/assets/images/img_1.png'} alt="No Image Found" />
                                                        </div>
                                                        <div className="member-content">
                                                            <h4>John Marshall</h4>
                                                            <h5>ceo</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-12">
                                                    <div className="members">
                                                        <div className="member-img">
                                                            <img src={process.env.PUBLIC_URL + '/assets/images/img_2.png'} alt="No Image Found" />
                                                        </div>
                                                        <div className="member-content">
                                                            <h4>John Marshall</h4>
                                                            <h5>ceo</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-12">
                                                    <div className="members">
                                                        <div className="member-img">
                                                            <img src={process.env.PUBLIC_URL + '/assets/images/img_3.png'} alt="No Image Found" />
                                                        </div>
                                                        <div className="member-content">
                                                            <h4>John Marshall</h4>
                                                            <h5>ceo</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-sm-12">
                                                    <div className="members">
                                                        <div className="member-img">
                                                            <img src={process.env.PUBLIC_URL + '/assets/images/img_4.png'} alt="No Image Found" />
                                                        </div>
                                                        <div className="member-content">
                                                            <h4>Sara Lauren</h4>
                                                            <h5>Manager</h5>
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
            <Footer />
        </div>
    );
}

export default Teams;