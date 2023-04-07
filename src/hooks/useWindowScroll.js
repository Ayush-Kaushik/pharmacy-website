import {useState, useEffect} from 'react';

const useWindowScroll = () => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.pageYOffset;

        if (offset > 10) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    });

    return scrolled;
};

export default useWindowScroll;