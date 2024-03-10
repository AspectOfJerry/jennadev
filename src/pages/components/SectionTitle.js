import React from "react";
import {motion} from 'framer-motion';

const SectionTitle = ({raw, children}) => {
    return (
        <div style={{position: "relative"}}>
            <motion.h2
                className="title-text"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}} // Fade in the title text
                transition={{duration: 0.75, ease: "easeInOut"}}
                exit={{opacity: 1}}
                style={{marginLeft: "3%"}}
            >
                {children}
            </motion.h2>
        </div>
    );
};

export default SectionTitle;
