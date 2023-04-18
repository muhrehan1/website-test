import React from 'react';
import { jQuery, bootstrap ,bootstrap_bundle ,fontawesome ,fullpage } from './cdn';
import Home  from './Home';
import Lets_connect from "./lets_connect";
import BioPackaging from "./BioPackaging";
import Teams from "./Teams";
import Inventors_Partners from "./inventors_partners";
import { Link } from "react-router-dom";
function Header() {


    return (


        <header>

            <link rel="stylesheet" href={bootstrap} />
            <link rel="stylesheet" href={fontawesome} />
            <script src={jQuery}></script>
            <script src={bootstrap_bundle}></script>
            <script src={fullpage}></script>
            <div className="header" id="masthead">
                <div className="top-bar">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-sm-9 hd_col1">
                                <div className="logo-header">
                                    <div className="img-nav">
                                        <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="No Image found" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-10 col-sm-3 hd_col2">
                                <div className="menu-header">
                                    <div className="inner-menu collapse" id="menu_header">
                                        <ul>
                                        <li><Link to="/">Home & Personal Care Technology</Link></li>
                                        <li> <Link to="/bio">Bio Packaging Technology</Link></li>
                                        <li> <Link to="/investors-and-partners">Investors & Partners</Link></li>
                                        <li> <Link to="/teams">Team</Link></li>
                                         <Link to="/lets-connect"><li>Connect</li></Link>
                                        </ul>
                                    </div>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                                            data-target="#menu_header" aria-controls="menu_header" aria-expanded="false"
                                            aria-label="Toggle navigation" id="btn_menu">
                                        <span className="navbar-toggler-icon"><span className="_btn_aftr"></span></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
