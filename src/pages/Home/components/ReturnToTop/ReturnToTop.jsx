import React, {useEffect, useState} from "react";
import {media} from "../../../../constants/index.js";
import {motion} from "framer-motion";

import "./ReturnToTop.scss";

const ReturnToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    function topFunction() {
        document.body.scrollIntoView(); // Safari
        document.documentElement.scrollIntoView(); // Chrome, Firefox, IE, Opera
    }

    useEffect(() => {
        window.onscroll = function () {
            scrollFunction()
        };


        function scrollFunction() {
            if (document.body.scrollTop > 3 || document.documentElement.scrollTop > 3) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }
    }, []);

    return (
        isVisible && (
            <motion.button
                className="return-to-top"
                onClick={topFunction}
                title="Return to top"
                whileInView={{y: [50, 0]}}
                initial={{y: 50}}
                whileHover={{scale: 1.1}}
                whileTap={{scale: [1, 0.95], borderRadius: "100%"}}
            >
                <img src={media.arrow_up} alt="Arrow up" />
            </motion.button>
        )
    )
};

export default ReturnToTop;
