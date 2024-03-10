import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";

import "./Header.scss";

const texts = [
    // "🎁 Happy holidays! 🎄",
    "🌟 Crafting code and chasing dreams.",
    "💡 Ctrl + Alt + Defeat is not in my vocabulary.",
    "✨ Let's build something magic together!",
    "🐞 Debugger of life's quirks and quantum glitches.",
    "🖋 Committed to pixels and a passionate relationship with my IDE.",
    "🌈 Transforming errors into applause-worthy features.",
    "🔮 Embracing a world of brackets, semicolons, and creative chaos.",
    "🦄 Breaking bugs, stereotypes, and coding norms.",
    "🚀 Building bridges between ideas and the realm of possibilities.",
    "☕ I don't sweat, I debug in style.",
    "🔁 Living in loops, logic, and infinite curiosity.",
    "🌙 Debugger by day, dreamer by night. What's your superpower?",
    "🛠️ Breaking things to uncover better ways of building them.",
    "🎯 Making the complex simple, one line at a time.",
    "🔥 Writing code that sets keyboards on fire.",
    "🔓 Hacking the boundaries of reality with lines of code.",
    "🌀 The loop is where the magic happens—join me on this coding journey.",
    "🚀 Code is my canvas; elegance is my masterpiece.",
    "🚀 Launching into the universe of code, propelled by creativity.",
    "🌟 Navigating the digital matrix with a keyboard as my compass.",
    "💭 If you think programming is boring, it's because you're not doing it right!",
    "👋 Hello, World!",
];

const Header = () => {
    useEffect(() => {
        // change title when component mounts
        document.title = "jerrydev • Jerry";
    }, []);

    const [headerText, setHeaderText] = useState("");
    const [textIndex, setTextIndex] = useState(Math.floor(Math.random() * texts.length));
    // const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isBlinking, setIsBlinking] = useState(false);

    useEffect(() => {
        const typeText = () => {
            setIsBlinking(false);
            if (!isDeleting) {
                setHeaderText((prevText) => prevText + texts[textIndex][charIndex]);
                setCharIndex((prevIndex) => prevIndex + 1);
            } else {
                setHeaderText((prevText) => prevText.slice(0, -1));
                setCharIndex((prevIndex) => prevIndex - 1);
            }
        };

        if (!isDeleting && charIndex < texts[textIndex].length) {
            const timeout = setTimeout(typeText, 48); // typing delay
            return () => clearTimeout(timeout);
        } else if (isDeleting && charIndex > 0) {
            const timeout = setTimeout(typeText, 18); // untyping delay
            return () => clearTimeout(timeout);
        } else {
            setIsBlinking(true);
            if (isDeleting) {
                const timeout = setTimeout(() => {
                    setTextIndex(Math.floor(Math.random() * texts.length)); // generate a random index
                    setIsDeleting(!isDeleting);
                    setCharIndex(0);
                }, 200); // delay between texts after untyping
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => {
                    setIsDeleting(!isDeleting);
                }, 2800); // delay between texts after typing
                return () => clearTimeout(timeout);
            }
        }
    }, [textIndex, charIndex, isDeleting]);

    return (
        <>
            <div id="header" className="app__header app__container">
                <div className="app__text-container">
                    <motion.h1
                        className="app__header-text-big"
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
                        className="app__header-small"
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
                        className="app__text-container-line"
                        initial={{width: 0, opacity: 0.5}}
                        animate={{width: ["0%", "150%"], opacity: [0.5, 1]}}
                        transition={{duration: 1}}
                    />
                </div>
                {/*<motion.p className="app__typing-texts text">*/}
                {/*    {headerText}&thinsp;<span id="caret" className={isBlinking ? "blink" : ""}>|</span>*/}
                {/*</motion.p>*/}
            </div>

            <div className="app__header_shadow"></div>
        </>
    );
};

export default Header;
