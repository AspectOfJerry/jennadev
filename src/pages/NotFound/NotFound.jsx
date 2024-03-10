import React, {useEffect, useRef, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import "./NotFound.scss";

const NotFound = () => {
    const [fadeOut, setFadeOut] = useState(false);
    const [buttonPos, setButtonPos] = useState({x: 0, y: 0});

    useEffect(() => {
        document.title = "jerrydev • 404";
    }, []);

    const handleRedirect = () => {
        setFadeOut(true);
        setTimeout(() => {
            window.location.href = "/";
        }, 2350);
    };

    const buttonRef = useRef(null);

    const handleMouseMove = (e) => {
        // Disable on mobile devices
        if (window.innerWidth < 768) {
            return;
        }

        const buttonRect = buttonRef.current.getBoundingClientRect();
        const x = e.clientX - buttonRect.left - buttonRect.width / 2;
        const y = e.clientY - buttonRect.top - buttonRect.height / 2;
        const distance = Math.hypot(x, y);
        const threshold = 150;

        if (distance < threshold) {
            const angle = Math.atan2(y, x);
            const moveFactor = 5;
            const moveDistance = (threshold - distance) * moveFactor;
            setButtonPos({
                x: -Math.cos(angle) * moveDistance,
                y: -Math.sin(angle) * moveDistance
            });
        } else {
            setButtonPos({x: 0, y: 0});
        }
    };

    return (
        <>
            <div id="NotFound" className="nf" onMouseMove={handleMouseMove}>
                <AnimatePresence>
                    {fadeOut && (
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.50, ease: "easeInOut"}}
                            className="nf__fade-overlay"
                        >
                            <p className="nf__fade-overlay-text">You feel a strange shift in reality as the world around you transforms...</p>
                        </motion.div>
                    )}
                </AnimatePresence>
                <h1 className="nf__nf-text ctext">
                    oh no... Error 404 <br /> <br />
                    Whoops! It seems you've stumbled into the digital wilderness. <br />
                    The only way out is to press the mystical button below that says "Take me home". <br />
                    Rumor has it, it's the secret passage to a realm of bug-free adventures and endless wonders. <br />
                    Good luck, brave explorer!
                </h1>
                <p
                    className="nf__redirect-text"
                    onClick={handleRedirect}
                    ref={buttonRef}
                    style={{
                        transform: `translate(${buttonPos.x}px, ${buttonPos.y}px)`
                    }}
                >
                    &gt;&nbsp;Take me home&nbsp;&lt;
                </p>
            </div>
        </>
    );
};

export default NotFound;