import React, { Component } from 'react';
import { Image, RichText, Text } from '@sitecore-jss/sitecore-jss-react';
import { FormProps } from 'lib/officecore-props';

class NewsletterSignup extends Component<FormProps> {
    constructor(props: FormProps) {
        super(props);
    }
    render() {
        return (
            <section className="free-trial-area">
                <div className="row m-0">
                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="free-trial-image">
                            {/* TODO: This image is hidden by CSS and an image is statically added as background image using the 'free-trial-image' class */}
                            <Image field={this.props.fields.Image} />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="free-trial-content">
                            <h2><Text field={this.props.fields.Title} /></h2>

                            <RichText field={this.props.fields.FormLink} editable={false}/> 

                            <p><Text field={this.props.fields.Subtitle} /></p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default NewsletterSignup;