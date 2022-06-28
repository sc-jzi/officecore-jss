import React from 'react';

const  GoogleMap = (): JSX.Element => {
    return (
        <div className="col-md-12" style={{padding: "0", margin: "0"}}>
            <div id="map" className="gmaps margin-bottom-40" style={{height: "500px", position: "relative", overflow: "hidden", transform: "translateZ(0px)", backgroundColor: "rgb(229, 227, 223)" }}>
                <iframe width="100%" style={{height: "500px"}} frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=Sitecore%20UK%20Ltd.%2C%20London%20E1W%201UN%2C%20United%20Kingdom&amp;key=AIzaSyABDFeZiHB1dYtYG_GYL_1XjFtrsGxNmQA"></iframe>
            </div>
        </div>
    );
  };

  export default GoogleMap;