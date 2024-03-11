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
            {/*<p className="p-text about__note">
                📌 Birthday! 🎂🥳
            </p>*/}
            <div style={{marginTop: "2rem"}} />
            <SectionTitle raw="About Me">
                About <span>Me</span>
            </SectionTitle>

            <motion.p
                className="p-text about__text"
                whileInView={text_fade_in.whileInView}
                transition={text_fade_in.transition}
            >
                👋 Hey there, I'm Jenna! My name is Jenna, and I'm here to tell you a bit about myself.
                <br />
                Picture this: Jenna, that's me. Yep, that's right, I'm Jenna, and I'm ready to spill the beans about who I am.
                <br />
                So buckle up, because here comes Jenna, telling you all about Jenna.
            </motion.p>
        </>
    );
};

export default AppWrap(About, "about");
