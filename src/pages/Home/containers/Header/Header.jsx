import React from "react";
import {motion} from "framer-motion";

import "./Header.scss";
import {media} from "../../../../constants";

const Header = () => {
    return (
        <>
            <div id="header" className="header app__container">
                <div className="header__container">
                    <img className="header__image" src={media.placeholder} alt="Jenna" />
                    <div className="header__text-container">
                        <motion.h1
                            className="header__text-big"
                            animate={{
                                y: [75, 0], // up
                                opacity: [0, 100],
                            }}
                            transition={{
                                ease: "easeOut",
                                duration: 1.1,
                                delay: 0.60,
                            }}
                        >
                            Hello
                        </motion.h1>
                        <motion.h1
                            className="header__text-small"
                            animate={{
                                y: [30, 0], // up
                                opacity: [0, 100],
                            }}
                            transition={{
                                ease: "easeOut",
                                duration: 0.90,
                                delay: 1.10,
                            }}
                        >
                            This page is a work in progress.
                        </motion.h1>

                        <motion.div
                            className="header__text-line"
                            initial={{width: 0, opacity: 0.5}}
                            animate={{width: ["0%", "150%"], opacity: [0.5, 1]}}
                            transition={{duration: 1}}
                        />
                    </div>
                </div>
            </div>

            <div className="header__shadow"></div>
        </>
    );
};

export default Header;
