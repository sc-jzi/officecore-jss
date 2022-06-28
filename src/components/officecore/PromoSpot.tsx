import { RichText, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { ContactDetailsProps } from 'lib/officecore-props';

const PromoSpot = (props: ContactDetailsProps): JSX.Element => (
    <div className="blog-sidebar">
        <h2><Text field={props.fields.Title} /></h2>
        <address>
            <RichText field={props.fields.Address} />
        </address>
    </div>
);

export default PromoSpot;