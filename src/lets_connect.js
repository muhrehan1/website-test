import React from 'react';
import Header from './Header';
import Footer from './Footer';


function Lets_Connect() {


    return (
        <div>
            <Header />
            <main>
                <div className="content" id="content">
                    <div className="all-content">
                        <section className="connect-sec">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7 col-sm-12 col-connect-1">
                                        <div className="text-connect-first d-flex align-items-start">
                                            <div className="head-connect">
                                                <h4>Let's<br/>C<span>o</span>nnect</h4>
                                            </div>
                                            <div className="para-connect">
                                                <p>Suspendisse sed fermentum tellus, sit amet
                                                    aliquam justo. Aliquam erat volutpat nulla at a
                                                    sem sit amet lectus dapibus, ac sagittis </p>
                                            </div>
                                        </div>
                                        <div className="socials-link-connent">
                                            <div className="links-connect">
                                                <ul>
                                                    <li><a href="#!">Facebook <i
                                                        className="far fa-long-arrow-right"></i></a></li>
                                                    <li><a href="#!">Instagram <i
                                                        className="far fa-long-arrow-right"></i></a></li>
                                                    <li><a href="#!">Linkdin <i className="far fa-long-arrow-right"></i></a>
                                                    </li>
                                                    <li><a href="#!">Twitter <i className="far fa-long-arrow-right"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-sm-12 col-connect-2">
                                        <div className="connet-form">
                                            <div className="form-main">
                                                <div className="form-fields">
                                                    <i className="fa-regular fa-user"></i> <input type="text"
                                                                                                  name="name" id="name"
                                                                                                  placeholder="Your Name Here*"
                                                                                                  required />
                                                </div>
                                                <div className="form-fields">
                                                    <i className="fa-solid fa-envelope"></i> <input type="email"
                                                                                                    name="email"
                                                                                                    id="email"
                                                                                                    placeholder="Your Email Here*"
                                                                                                    required />
                                                </div>
                                                <div className="form-fields">
                                                    <i className="fas fa-phone"></i> <input type="tel" name="phone"
                                                                                            id="phone"
                                                                                            placeholder="Your Contact Here*"
                                                                                            required />
                                                </div>
                                                <div className="form-fields">
                                                    <i className="fa-regular fa-fax"></i> <input type="text"
                                                                                                 name="subject"
                                                                                                 id="subject"
                                                                                                 placeholder="Your subject Here*"
                                                                                                 required />
                                                </div>
                                                <div className="form-fields">
                                                    <i className="fas fa-comment-alt"></i> <input type="text"
                                                                                                  name="query"
                                                                                                  id="query"
                                                                                                  placeholder="Your query Here*" />
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

export default Lets_Connect;