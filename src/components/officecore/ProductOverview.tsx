
import React, { Component } from 'react'
import { Text, Image, RichText } from '@sitecore-jss/sitecore-jss-react';
import Link from 'next/link'

export default class Services extends Component {

    // Tab
    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs-item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("animate__fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " animate__fadeInUp animate__animated";
        evt.currentTarget.className += "current";
    }

    getId = (index:number) => {
        let val = "tab" + index;
        return val;
    }
 
    render() {
        return (
            <div className="services-section bg-f2f6f9 ptb-110">
                <div className="container">
                    <div className="section-title">
                        <h2>We Offer Professional Solutions</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="tab services-tab-list">
                        <div className="row">
                            <div className="col-lg-4 col-md-4">
                                <ul className="tabs">
                                {this.props.fields.items.map((child, index:number) => (
                                    <li key={index}
                                        onClick={(e) => this.openTabSection(e, `tab${index}`)}
                                    >
                                        <i className="flaticon-income"></i>
                                        <span><Text field={child.fields.Title} /></span>
                                    </li>
                                ))}
                                </ul>
                            </div>

                            <div className="col-lg-8 col-md-8">
                                <div className="tab-content">
                                    {this.props.fields.items.map((child, index:number) => (
                                        <div id={this.getId(index)} className="tabs-item" key={index}>
                                            <div className="image">
                                                <Image field={child.fields.ProductImage.value} />
                                            </div>

                                            <div className="content">
                                                <RichText field={child.fields.ProductDescription} />

                                                <Link href={child.url}>
                                                    <a className="btn btn-primary">Read More</a>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images  */}
                <div className="shape-img1"><img src="/images/shape/shape1.png" alt="image" /></div>
                <div className="shape-img3"><img src="/images/shape/shape3.png" alt="image" /></div>
                <div className="shape-img2"><img src="/images/shape/shape2.svg" alt="image" /></div>
                <div className="shape-img5"><img src="/images/shape/shape5.svg" alt="image" /></div>
                <div className="shape-img4"><img src="/images/shape/shape4.svg" alt="image" /></div>
                <div className="dot-shape1"><img src="/images/shape/dot1.png" alt="image" /></div>
                <div className="dot-shape2"><img src="/images/shape/dot3.png" alt="image" /></div>
            </div>
        )
    }
}

