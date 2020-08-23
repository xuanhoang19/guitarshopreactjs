import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" />
                <div className="container">
                    <hr />
                    <div className="text-center center-block">
                        <p className="txt-railway">- Footer -</p>
                        <br />
                        <a href="https://www.facebook.com/bootsnipp"><i className="fa fa-facebook-square fa-3x social" /></a>
                        <a href="https://twitter.com/bootsnipp"><i className="fa fa-twitter-square fa-3x social" /></a>
                        <a href="https://plus.google.com/+Bootsnipp-page"><i className="fa fa-google-plus-square fa-3x social" /></a>
                        <a href="mailto:bootsnipp@gmail.com"><i className="fa fa-envelope-square fa-3x social" /></a>
                    </div>
                    <hr />
                </div>
            </div>

        );
    }
}

export default Footer;