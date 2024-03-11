import React from "react";
import {motion} from "framer-motion";
import {media} from "../../../../constants";

import {AppWrap} from "../../../components/index.js";
import "./Experience.scss";
import SectionTitle from "../../../components/SectionTitle";


// https://www.firstinspires.org/sites/default/files/uploads/resource_library/brand/first-brand-guidelines-2020.pdf
// https://info.firstinspires.org/hubfs/2023%20Season/2023%20season%20assets/frc-chargedup-assets/firstenergize-frc-chargedup-styleguide.pdf
// https://info.firstinspires.org/hubfs/2022%20Season%20Assets/free-season-assets/ft%20-%20freight%20frenzy/firstforward-ftc-freightfrenzy-styleguide.pdf

const experience = [
    {
        year: "2024",
        experiences: [
            {
                title: "placeholder title",
                description: "placeholder description",
                iconUrl: ""
            }
        ]
    }
];

const Experience = () => {
    return (
        <>
            <SectionTitle raw="Experience">
                <span>Exp</span>erience
            </SectionTitle>

            <div className="app__exp-years">
                {experience.map((year) => {
                    return (
                        <motion.div
                            className="app__exp-year"
                            key={year.year}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.5}}
                        >
                            <h2 className="app__exp-year-text"><span>\</span>\ {year.year}</h2>

                            <div className="app__exp-year-experiences">
                                {year.experiences.map((experience, index) => {
                                    return (
                                        <motion.div key={index} className="app__exp-experience">
                                            <a href={experience.url} target="_blank" rel="noopener noreferrer">
                                                <img src={experience.iconUrl} alt={experience.title} />
                                            </a>
                                            <div>
                                                <h3>{experience.title}</h3>
                                                <p className="p-text">{experience.description}</p>
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </>
    );
};

export default AppWrap(Experience, "experience");
