import React, {useState, useEffect} from 'react';
import {motion} from "framer-motion";

const greetings = ["Hello", "Bonjour", "Hola", "你好", "안녕하세요", "Hello"];
// const fonts = ["Arial", "Verdana", "Courier", "Times New Roman", "Georgia", "Comic Sans MS"];

const OpeningAnimation = ({onAnimationEnd}) => {
    const [greetingIndex, setGreetingIndex] = useState(0);
    // const [fontIndex, setFontIndex] = useState(0);

    useEffect(() => {
        if (greetingIndex < greetings.length) {
            const timeout = setTimeout(() => {
                setGreetingIndex(greetingIndex + 1);
            }, 500); // greeting delay

            return () => clearTimeout(timeout);
        } else {
            onAnimationEnd();
        }
    }, [greetingIndex, onAnimationEnd]);

    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         setFontIndex((fontIndex + 1) % fonts.length);
    //     }, 250); // font delay

    //     return () => clearTimeout(timeout);
    // }, [fontIndex]);

    return (
        <motion.div>
            {greetings[greetingIndex]}
        </motion.div>
    );
};

export default OpeningAnimation;
