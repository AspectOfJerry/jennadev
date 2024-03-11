import React, {useEffect, useRef, useState} from "react";

import "./Navbar.scss";
import {media} from "../../../constants/index.js";
import {HiMenuAlt4, HiX} from "react-icons/hi";
import {motion} from "framer-motion";

const Navbar = ({toggleTheme, themes, theme, links, extLinks, forceShrink, icon}) => {
    icon = icon || media.favicon;
    const [showMenu, setShowMenu] = useState(false);
    const [isShrunk, setShrunk] = useState(!!forceShrink);
    const scrollThreshold = 32;

    const menuRef = useRef(null);

    useEffect(() => {
        if (forceShrink) return;
        let isScrolling = false;

        const handleScroll = () => {
            if (!isScrolling) {
                window.requestAnimationFrame(() => {
                    setShrunk(
                        document.body.scrollTop > scrollThreshold ||
                        document.documentElement.scrollTop > scrollThreshold
                    );
                    isScrolling = false;
                });
            }

            isScrolling = true;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [forceShrink]);

    // Add this useEffect hook
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <motion.nav
            className={`app__navbar${isShrunk ? " app__navbar-shrunk" : ""}`}
            initial={{y: -96}}
            animate={{y: [-96, 0], filter: ["brightness(1.25)", "brightness(1)"]}}
            transition={{delay: 0.10, type: "spring", stiffness: 100, damping: 30}}
        >
            <div className="app__navbar-icon">
                <a href="/">
                    <img src={icon} alt="jerrydev icon" />
                </a>
            </div>

            <motion.ul
                className="app__navbar-nav-links"
                initial={{opacity: 1, y: 0}}
                animate={{opacity: [0, 1], y: [-25, 0]}}
                transition={{delay: 0.80, type: "spring", stiffness: 100, damping: 25}}
            >
                {links.map((dest, index) => (
                    <li className="text" key={index}>
                        <a className="text-underline" href={dest.link}>{dest.name}</a>
                    </li>
                ))}
            </motion.ul>
            <motion.ul
                className="app__navbar-ext-links"
                initial={{opacity: 1, y: 0}}
                animate={{opacity: [0, 1], y: [-25, 0]}}
                transition={{delay: 0.95, type: "spring", stiffness: 100, damping: 25}}
            >
                {extLinks.map((dest, index) => (
                    <li className="text" key={index}>
                        <a className="text-underline" href={dest.link} target="_blank" rel="noreferrer">{dest.name}</a>
                    </li>
                ))}
            </motion.ul>

            <div className="app__navbar-theme-toggle">
                <button onClick={() => toggleTheme(Object.values(themes))}>
                    <div className="theme-container">
                        <div className={`theme-circle ${theme.className}`} />
                        <div className="text theme-name">{theme.name}</div>
                    </div>
                </button>
            </div>
            {/* MOBILE */}
            <div ref={menuRef} className={`${showMenu ? "app__navbar-menu" : "app__navbar-menu-hidden"}`}>
                <HiMenuAlt4 onClick={() => setShowMenu(true)} />

                <div>
                    <HiX onClick={() => setShowMenu(false)} />
                    <ul className="app__navbar-nav-links">
                        {links.map((dest, index) => (
                            <li className="text" key={index}>
                                <a className="text-underline" onClick={() => setShowMenu(false)} href={dest.link}>
                                    {dest.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ul className="app__navbar-ext-links">
                        {extLinks.map((dest, index) => (
                            <li className="text" key={index}>
                                <a className="text-underline" onClick={() => setShowMenu(false)} href={dest.link} target="_blank" rel="noreferrer">
                                    {dest.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
