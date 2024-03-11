import React from "react";
import {motion} from "framer-motion";

import {AppWrap} from "../../../components/index.js";
import "./About.scss";
import SectionTitle from "../../../components/SectionTitle";

const text_fade_in = {
    whileInView: {
        y: [25, 0],
        opacity: [0, 1]
    },
    transition: {
        duration: 0.5,
        ease: "easeOut",
    }
};

const About = () => {
    return (
        <>
            {/*<p className="p-text app__about_note">
                📌 Birthday! 🎂🥳
            </p>*/}
            <div style={{marginTop: "2rem"}} />
            <SectionTitle raw="About Me">
                About <span>Me</span>
            </SectionTitle>

            <motion.p
                className="p-text app__about-text"
                whileInView={text_fade_in.whileInView}
                transition={text_fade_in.transition}
            >
                👋 Hey there, I'm Jenna - ...?, 🍁Canada...?!
                <br /><br />
                💡 ...?
                <br /><br />
                🔍 ...?
                <br /><br />
                🎮 ...?
            </motion.p>
        </>
    );
};

export default AppWrap(About, "about");
