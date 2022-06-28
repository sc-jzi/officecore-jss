import React from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

const  ThreeColumn = (props: ComponentProps): JSX.Element => {
    return (
      <div className="row content-page">
        <div className="col-3">
          <Placeholder name="jss-left" rendering={props.rendering} />
        </div>
  
        <div className="col-6">
          <Placeholder name="jss-middle" rendering={props.rendering} />
        </div>
  
        <div className="col-3">
          <Placeholder name="jss-right" rendering={props.rendering} />
        </div>
      </div>
    );
  };

export default ThreeColumn;