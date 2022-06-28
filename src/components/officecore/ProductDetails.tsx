import React from 'react';
import { Image, Text, RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import { ProductProps } from 'lib/officecore-props';

const ProductDetails = (props: ProductProps): JSX.Element => {
    return (
        <div className="services-details-area ptb-110">
            <div className="container">
                <div className="services-details-overview">
                    <div className="services-details-desc mb-30">
                        <h3><Text field={props.fields.Title} /></h3>
                        <RichText field={props.fields.ProductDescription} />
                    </div>
                    <div className="services-details-image">
                        <Image field={props.fields.ProductImage.value} imageParams={{ mw: 310, mh: 205 }} height="205" width="310" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;