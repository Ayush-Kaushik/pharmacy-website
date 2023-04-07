import React from 'react';
import {Link} from "react-router-dom";
import useWindowScroll from "../../hooks/useWindowScroll";

const TopNavigation = () => {
    const isScrolled = useWindowScroll();

    return (
        <div className={`navbar ${isScrolled ? "scroll" : ""}`}>
            <div className={"container flex"}>
                <h3 className="logo">{"Lormel Pharmacy & Clinic."}</h3>
                <nav>
                    <ul>
                        <li>
                            <Link to={"/"}>{"Home"}</Link>
                        </li>
                        <li>
                            <Link to={"/clinic"}>{"Clinic"}</Link>
                        </li>
                        <li>
                            <Link to={"/pharmacy"}>{"Pharmacy"}</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default TopNavigation;