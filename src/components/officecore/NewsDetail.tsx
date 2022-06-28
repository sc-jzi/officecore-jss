import React, { Component } from 'react';
import Link from 'next/link';
import { Image, Text, RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import { NewsProps } from 'lib/officecore-props';

class NewsDetail extends Component<NewsProps> {
    constructor(props: NewsProps) {
        super(props);
    }
    render() {
        return (
            <section className="blog-details-area ptb-110">
                {/* TODO: The styling of the article does not seem to work as it is in bariton...  */}
                <div className="container">
                    <div className="row">
                            <div className="blog-details">
                                <div className="article-image">
                                    <Image field={this.props.fields.Image}  />
                                </div>

                                <div className="article-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                {/* TODO: Fix date */}
                                                <span>Posted On:</span> 
                                                September 14, 2020
                                            </li>
                                            <li>
                                                {/* TODO: Fix author */}
                                                <span>Posted By:</span> 
                                                <Link href="/blog-details/#">
                                                    <a>John Anderson</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <h2><Text field={this.props.fields.Title} /></h2>

                                    <RichText field={this.props.fields.Intro} />
                                    
                                    {/* TODO: Deal with blockquote: Add placeholder.
                                    <blockquote className="wp-block-quote">
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                                        <cite>Tom Cruise</cite>
                                    </blockquote> */}

                                    <p>Equidem impedit officiis quo te. Illud partem sententiae mel eu, euripidis urbanitas et sit. Mediocrem reprimique an vim, veniam tibique omittantur duo ut, agam graeci in vim. Quot appetere patrioque te mea, animal aliquip te pri. Ad vis animal ceteros percipitur, eos tollit civibus percipitur no.</p>

                                    {/* TODO: Deal with image gallery. Add placeholder.
                                    <ul className="wp-block-gallery columns-3">
                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src="/images/blog/blog1.jpg" alt="image" />
                                            </figure>
                                        </li>

                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src="/images/blog/blog2.jpg" alt="image" />
                                            </figure>
                                        </li>

                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src="/images/blog/blog3.jpg" alt="image" />
                                            </figure>
                                        </li>
                                    </ul> */}

                                    <RichText field={this.props.fields.Text} />
                                </div>

                                <div className="article-footer">
                                    <div className="article-tags">
                                        <span><i className="fas fa-bookmark"></i></span>

                                        {/* TODO: Deal with tagging of articles -> add topics? */}
                                        <Link href="/blog-details/#">
                                            <a>Fashion</a>
                                        </Link>
                                        <Link href="/blog-details/#">
                                            <a>Games</a>
                                        </Link>
                                        <Link href="/blog-details/#">
                                            <a>Travel</a>
                                        </Link>
                                    </div>

                                    <div className="article-share">
                                        <ul className="social">
                                            <li>
                                                <Link href="/blog-details/#">
                                                    <a target="_blank"><i className="fab fa-facebook-f"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/blog-details/#">
                                                    <a target="_blank"><i className="fab fa-twitter"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/blog-details/#">
                                                    <a target="_blank"><i className="fab fa-linkedin-in"></i></a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/blog-details/#">
                                                    <a target="_blank"><i className="fab fa-instagram"></i></a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Blog Comments Area */}
                            {/* <BlogCommentsArea />  */}

                        {/* <div className="col-lg-4 col-md-12"> */}
                            {/* <BlogSidebar /> */}
                        {/* </div> */}
                    </div>
                </div>
            </section>
        );
    }
}

export default NewsDetail;