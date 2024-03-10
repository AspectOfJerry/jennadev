import React from "react";

import "./Footer.scss";


const sites = [
    {title: "Hypixel Skyblock mod (forge-1.8.9)", url: "https://bap.jerrydev.net"},
    {title: "Discord bot (decommissioned)", url: "https://bot.jerrydev.net"},
    {title: "Status page", url: "https://status.jerrydev.net"},
    {title: "Countdown", url: "/countdown"},
    {title: "404", url: "/404"},
    {title: "Have a suggestion? Message me or open an issue on GitHub", url: "https://github.com/AspectOfJerry/jerrydev/issues"}
];

const texts = [
    {title: "", url: ""}
];

const Footer = () => {
    return (
        <>
            <div className="app__footer_shadow"></div>

            <div className="app__footer app__footer_bg">
                <div className="app__footer-sites">
                    <h4 className="bold-text">Links</h4>
                    {sites.map((site) => {
                        return (
                            <a className="p-text" href={site.url} key={site.title}>{site.title}</a>
                        )
                    })}
                </div>
            </div>
            <div className="copyright app__footer_bg">
                <p>Copyright © 2022 Jerry</p>
            </div>
        </>
    );
};

// no wrapping footer
export default Footer;
