import React, { Component } from 'react';
import Link from 'next/link';
import { Text, } from '@sitecore-jss/sitecore-jss-nextjs';
import { RecentNewsProps } from 'lib/officecore-props';

class RecentNewsSidebar extends Component<RecentNewsProps> {
    constructor(props: RecentNewsProps) {
        super(props);
    }
    render() {
        return (
            <div className="widget-area blog-area ptb-110" id="secondary">
                <div className="widget widget_posts_thumb">
                    <h3 className="widget-title">Recent news</h3>

                    {this.props.fields.data.item.children.results.map((child, index:number) => (
                        <article className="item" key={index}>
                            <Link href={child.url.path}>
                                <a className="thumb">
                                    <span className="fullimage cover bg1" role="img" style={{backgroundImage: `url(${child.image.jsonValue.value.src})` }}></span>
                                </a>
                            </Link>
                            <div className="info">
                                <time>March 15, 2020</time>
                                <h4 className="title usmall">
                                    <Link href={child.url.path}>
                                        <a><Text field={child.pageTitle} /></a>
                                    </Link>
                                </h4>
                            </div>

                            <div className="clear"></div>
                        </article>
                    ))}
                </div>
            </div>
        );
    }
}

export default RecentNewsSidebar;