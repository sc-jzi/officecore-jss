import React, { Component } from 'react';
import { RichText, Text } from '@sitecore-jss/sitecore-jss-react';
import { PromoProps } from 'lib/officecore-props';

class ContactInfo extends Component<PromoProps> {
    constructor(props: PromoProps) {
        super(props);
    }
    render() {
        return (
            <div className="contact-info">
                <div className="contact-info-content">
                    <h3><Text field={this.props.fields.Title} /></h3>
                    <h2>
                        {/* TODO: Styling for this needs to change. CSS expects this to be inside a <section> and <div> - see ContactFormContent.js in _bariton/bariton*/}
                        <RichText field={this.props.fields.Address} />
                    </h2>

                    <ul className="social">
                        <li>
                            <a href="https://twitter.com/" target="_blank">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/" target="_blank">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/" target="_blank">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/" target="_blank">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/" target="_blank">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            // TODO: Should add some padding on the bottom
        );
    }
}

export default ContactInfo;