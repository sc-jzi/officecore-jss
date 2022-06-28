import React, { Component } from 'react';
import Link from 'next/link';
import { Image, Text, RichText, DateField } from '@sitecore-jss/sitecore-jss-nextjs';
import { RecentNewsProps } from 'lib/officecore-props';

class BlogPost extends Component<RecentNewsProps> {
    constructor(props: RecentNewsProps) {
        super(props);
    }
    render() {
        return (
            <section className="blog-area ptb-110">
                <div className="container">
                    <div className="section-title">
                        <h2><Text field={this.props.fields.data.item.pageTitle} /></h2>
                        <RichText field={this.props.fields.data.item.Text} />
                    </div>

                    <div className="row">
                    {this.props.fields.data.item.children.results.map((child, index) => ( 
                        <div className="col-lg-4 col-md-6" key={index}>
                            <div className="single-blog-post">
                                <div className="entry-thumbnail">
                                    <Link href={child.url.path}>
                                        <a>
                                            <Image field={child.Image.jsonValue}  />
                                        </a>
                                    </Link>
                                </div>

                                <div className="entry-post-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <Link href="/blog">
                                                    <a>Minnie</a>
                                                </Link>
                                            </li>
                                            <li><DateField field={child.Date.jsonValue} render={(date) => date && date.toLocaleDateString()} /></li>
                                        </ul>
                                    </div>

                                    <h3>
                                        {console.log(this.props)}
                                        <Link href={child.url.path}>
                                            <a><Text field={child.pageTitle.jsonValue} /></a>
                                        </Link>
                                    </h3>

                                    <RichText field={child.Intro.jsonValue} editable={true} />
                                    
                                    <Link href={child.url.path}>
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
 
                {/* Shape Images */}
                <div className="shape-img2">
                    <img src="/images/shape/shape2.svg" alt="image" />
                </div>
                <div className="shape-img3">
                    <img src="/images/shape/shape3.png" alt="image" />
                </div>
                <div className="shape-img4">
                    <img src="/images/shape/shape4.svg" alt="image" />
                </div>
                <div className="shape-img5">
                    <img src="/images/shape/shape5.svg" alt="image" />
                </div>
                <div className="shape-img7">
                    <img src="/images/shape/shape3.png" alt="image" />
                </div>
                <div className="dot-shape1">
                    <img src="/images/shape/dot1.png" alt="image" />
                </div>
                <div className="dot-shape2">
                    <img src="/images/shape/dot2.png" alt="image" />
                </div>
                <div className="dot-shape2">
                    <img src="/images/shape/dot3.png" alt="image" />
                </div>
                <div className="dot-shape2">
                    <img src="/images/shape/dot4.png" alt="image" />
                </div>
                <div className="dot-shape2">
                    <img src="/images/shape/dot5.png" alt="image" />
                </div>
                <div className="dot-shape2">
                    <img src="/images/shape/dot6.png" alt="image" />
                </div>
            </section>
        );
    }
}

export default BlogPost;