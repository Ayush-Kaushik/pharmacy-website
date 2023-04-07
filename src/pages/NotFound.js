import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import useWindowSize from "../hooks/useWindowSize";
import {ReactComponent as NotFoundImage} from "../assets/NotFound.svg";
import {ReactComponent as NotFoundSmallImage} from "../assets/NotFoundSmall.svg";

const NotFound = () => {
    const dimensions = useWindowSize();
    const [banner, setBanner] = useState(null);

    useEffect(() => {
        if (dimensions.width >= 950) {
            setBanner(<NotFoundImage/>);
        } else if (dimensions.width < 950 && dimensions.width > 600) {
            setBanner(<NotFoundSmallImage/>);
        } else {
            setBanner(<NotFoundSmallImage/>);
        }

    }, [dimensions.width]);


    return (
        <div style={{
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "center",
            "alignItems": "center"
        }}>
            <h2>{"OOPS! lets get you back to the"} <Link to={"/"}>{"homepage"}</Link></h2>
            {banner}
            <h2>{"Page not found"}</h2>
        </div>
    )
};

export default NotFound;