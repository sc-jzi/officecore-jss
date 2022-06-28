import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import deepEqual from 'deep-equal';
import {
  Placeholder,
  withSitecoreContext,
  getPublicUrl,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideSitecoreContextValue } from 'lib/component-props';

// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.
const publicUrl = getPublicUrl();

interface LayoutProps {
  sitecoreContext: StyleguideSitecoreContextValue;
}

const Layout = ({ sitecoreContext: { route } }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>{route?.fields?.pageTitle?.value || 'Page'}</title>
        <link rel="icon" href={`${publicUrl}/favicon.ico`} />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
         {/* TODO: Should probably update the settings in a config */}
         <script
        dangerouslySetInnerHTML={{ __html:
          `// Define the Boxever queue
          var _boxeverq = _boxeverq || [];
          // Define the Boxever settings
          _boxever_settings = {
            client_key: 'sise2euno5hfjrh1xmt2pgt6utd2oafs', 
            target: 'https://api.boxever.com/v1.2',
            pointOfSale: 'arm-pos',
            cookie_domain: '.officecore.demo',
            web_flow_target: 'https://d35vb5cccm4xzp.cloudfront.net',
          };

          // Import the Boxever library asynchronously 
          (function() {
              var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true;  
              s.src = 'https://d1mj578wat5n4o.cloudfront.net/boxever-1.4.8.min.js';
              //var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
              document.head.appendChild(s);
          })();`
        }}
      />
        <script
        dangerouslySetInnerHTML={{ __html:
          `!function(t,n,e,o,a){function d(t){var n=~~(Date.now()/3e5),o=document.createElement(e);o.async=!0,o.src=t+"?ts="+n;var a=document.getElementsByTagName(e)[0];a.parentNode.insertBefore(o,a)}t.MooTrackerObject=a,t[a]=t[a]||function(){return t[a].q?void t[a].q.push(arguments):void(t[a].q=[arguments])},window.attachEvent?window.attachEvent("onload",d.bind(this,o)):window.addEventListener("load",d.bind(this,o),!1)}(window,document,"script","//cdn.stat-track.com/statics/moosend-tracking.min.js","mootrack");
          //tracker has to be initialized otherwise it will generate warnings and wont sendtracking events
          mootrack('init', '92be1c7c-f668-4fa6-868e-ad1a2215b392');`
        }}
      />
      </Head>
      <div className="container-fluid">
        <Placeholder key="jss-header" name="jss-header" rendering={route} />
      </div>

      <div className="container-fluid">
        <Placeholder key="jss-main" name="jss-main" rendering={route} />
      </div>

      <div className="container-fluid">
        <Placeholder key="jss-footer" name="jss-footer" rendering={route} />
      </div>
    </>
  );
};

const propsAreEqual = (prevProps: LayoutProps, nextProps: LayoutProps) => {
  if (deepEqual(prevProps.sitecoreContext.route, nextProps.sitecoreContext.route)) return true;

  return false;
};

export default withSitecoreContext()(React.memo(Layout, propsAreEqual));
