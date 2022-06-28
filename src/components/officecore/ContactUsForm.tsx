import React, { Component } from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { FormProps } from 'lib/officecore-props';

class ContactFormContent extends Component<FormProps> {
    constructor(props: FormProps) {
        super(props);
    }
    render() {
        return (
            <section className="contact-area ptb-110">
                <div className="container">
                    <div className="section-title">
                        <span>Message Us</span>
                        <h2><Text field={this.props.fields.Title} /></h2>
                        <p><Text field={this.props.fields.Subtitle} /></p>
                    </div>

                    <div className="contact-form">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-12">
                                <div className="contact-image">
                                    <div id="map" className="gmaps margin-bottom-40" style={{height: "500px", position: "relative", overflow: "hidden", transform: "translateZ(0px)", backgroundColor: "rgb(229, 227, 223)" }}>
                                        <iframe width="100%" style={{height: "500px"}} frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=Sitecore%20UK%20Ltd.%2C%20London%20E1W%201UN%2C%20United%20Kingdom&amp;key=AIzaSyABDFeZiHB1dYtYG_GYL_1XjFtrsGxNmQA"></iframe>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                {/* TODO: Create form. Not certain whether to use Sitecore Forms or Moosend. Thinking Sitecore Forms? */}
                                {/* <ContactForm /> Moosend form*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactFormContent;