import React, { Component } from 'react';
import Link from 'next/link';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { PageBannerProps } from 'lib/officecore-props';

class PageBanner extends Component<PageBannerProps> {
    constructor(props: PageBannerProps) {
        super(props);
      }
    render() {

        return (
            <div className={`page-title-area item-bg3`} style={{backgroundImage: `url(${this.props.fields.BannerImage.value.src})` }}>
                <div className="container">
                    <div className="page-title-content">
                        <h2><Text field={this.props.fields.Title} /></h2>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li><Text field={this.props.fields.Title} /></li>
                        </ul>
                    </div>
                </div>

                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        );
    }
}

export default PageBanner;