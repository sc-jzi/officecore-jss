import React, { Component } from 'react';
import Link from 'next/link';
import { Image, Text, RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import { NewsOverviewProps } from 'lib/officecore-props';

class NewsOverview extends Component<NewsOverviewProps> {
    constructor(props: NewsOverviewProps) {
        super(props);
    }
    render() {
        return (
            <section className="blog-area ptb-110">
                <div className="container">
                    <div className="row">
                        <div className="row">
                            {this.props.fields.items.map((child, index) => (
                                <div className="col-lg-6 col-md-6" key={index}>
                                    <div className="single-blog-post">
                                        <div className="entry-thumbnail">
                                            <Link href={child.url}>
                                                <a>
                                                    <Image field={child.fields.Image} />
                                                </a>
                                            </Link>
                                        </div>

                                        {/* TODO: Make sure all entries are equal height */}
                                        <div className="entry-post-content">
                                            <div className="entry-meta">
                                                <ul>
                                                    <li>
                                                        <Link href="/blog2/#">
                                                            {/*TODO: Add _createdby to payload*/}
                                                            <a>Admin</a>
                                                        </Link>
                                                    </li>
                                                    {/*TODO: Fix date field {child.fields.Date}*/}
                                                    <li>March 10, 2020</li>
                                                </ul>
                                            </div>

                                            <h3>
                                                <Link href={child.url}>
                                                    <a><Text field={child.fields.pageTitle} /></a>
                                                </Link>
                                            </h3>

                                            <RichText field={child.fields.Intro} />

                                            <Link href={child.url}>
                                                <a className="learn-more-btn">
                                                    Read More <i className="flaticon-add"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default NewsOverview;