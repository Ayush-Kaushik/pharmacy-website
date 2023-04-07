import React, {useState, useEffect} from 'react';
import {HERO_SUBTITLE, HERO_TITLE} from "../../content";
import {ReactComponent as Doctors} from "../../assets/Doctors.svg";
import {ReactComponent as FemaleDoctor} from "../../assets/Female_Doctor.svg";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import useWindowSize from "../../hooks/useWindowSize";

function Hero() {
    const dimensions = useWindowSize();
    const [banner, setBanner] = useState(null);

    useEffect(() => {
        if (dimensions.width >= 950) {
            setBanner(<Doctors/>);
        } else if (dimensions.width < 950 && dimensions.width > 600) {
            setBanner(<FemaleDoctor/>);
        } else {
            setBanner(<div/>);
        }

    }, [dimensions.width]);


    return (
        <div className="hero-layout">
            <div className={"container grid"}>
                <div className="text-content">
                    <h1>{HERO_TITLE}</h1>
                    <p>{HERO_SUBTITLE}</p>
                    {/* <button>{CTA}<FontAwesomeIcon icon={faPlayCircle}/></button> */}
                </div>

                <div className={"image-content"}>
                    {banner}
                </div>
            </div>
        </div>
    );
}

export default Hero;