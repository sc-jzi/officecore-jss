import React from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

const  TwoColumn = (props: ComponentProps): JSX.Element => {
    return (
      <div className="row content-page">
        <div className="col-8">
          <Placeholder key="jss-middle" name="jss-middle" rendering={props.rendering} />
        </div>
  
        <div className="col-4">
          <Placeholder key="jss-right" name="jss-right" rendering={props.rendering} />
        </div>
      </div>
    );
  };

  export default TwoColumn;