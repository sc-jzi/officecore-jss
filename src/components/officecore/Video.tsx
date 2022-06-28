import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Image, Text } from '@sitecore-jss/sitecore-jss-react';
import { VideoProps } from 'lib/officecore-props';

const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

class Webinar extends Component<VideoProps> {
    constructor(props: VideoProps) {
        super(props);
    }
    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <>
                <section className="webinar-area">
                    <div className="row m-0">
                        <div className="col-lg-6 p-0">
                            <div className="webinar-content">
                                <h2><Text field={this.props.fields.Title} /></h2>
                                <p><Text field={this.props.fields.Subtitle} /></p>

                                <Link href="#">
                                    <a className="btn btn-primary">Watch More</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 p-0">
                            <div className="webinar-video-image">
                                {/* TODO: This image is hidden by CSS and an image is statically added as background image using the 'webinar-video-image' class */}
                                <Image field={this.props.fields.VideoImage} />
{/* 
                                TODO: Modal doesn't open on top of the pile but rather creates a new section below the image */}
                                <div
                                    onClick={e => {e.preventDefault(); this.openModal()}}
                                    className="video-btn popup-youtube"
                                > 
                                    <i className="flaticon-play-button"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* If you want to change the video need to update below videoID */}
                    <ModalVideo 
                        channel='youtube' 
                        isOpen={this.state.isOpen} 
                        videoId='mS8tOq95i5g'  // TODO: How to read this from Sitecore? (this.props.fields.VideoId)
                        onClose={() => this.setState({isOpen: false})} 
                    />
                </section>
            </>
        );
    }
}

export default Webinar;