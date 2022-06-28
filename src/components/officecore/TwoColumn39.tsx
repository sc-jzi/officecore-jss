import React from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

const  TwoColumn39 = (props: ComponentProps): JSX.Element => {
    return (
      <div className="row content-page">
        <div className="col-3">
          <Placeholder key="jss-left" name="jss-left" rendering={props.rendering} />
        </div>
  
        <div className="col-9">
          <Placeholder key="jss-middle" name="jss-middle" rendering={props.rendering} />
        </div>
      </div>
    );
  };

  export default TwoColumn39;