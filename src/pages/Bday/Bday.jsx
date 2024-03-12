import React, {useState, useEffect} from "react";
import "./Bday.scss";
import Confetti from "react-confetti";

const Bday = () => {
    const [countdown, setCountdown] = useState("Loading...");
    const [celebrate, setCelebrate] = useState(false);

    useEffect(() => {
        document.title = "Jenna 🎂 " + countdown;
    }, [countdown]);

    useEffect(() => {
        const timer = setInterval(() => {
            const bday = new Date(new Date().getFullYear(), 2, 13);
            const now = new Date();
            const distance = bday - now;

            if (distance <= 0) {
                setCelebrate(true);
                setCountdown("🥳🎂 Happy birthday! 🎉🎁");
                clearInterval(timer);
            } else {
                setCelebrate(false);
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setCountdown("T- " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="c__container">
            <h2 className="ctext">🎂 Birthday countdown 🎂</h2>
            <p className="ctext">{countdown}</p>
            {celebrate && <Confetti numberOfPieces={300} wind={0.01} />}
        </div>
    );
};

export default Bday;