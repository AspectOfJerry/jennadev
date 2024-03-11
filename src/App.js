import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

// Global
import {Navbar} from "./pages/components/index.js";
import OpeningAnimation from "./pages/components/OpeningAnimation"

// pages/Header (main)
import {
    AppHeader,
    AppAbout,
    AppSocials,
    AppExperience,
    AppFooter,
} from "./pages/Home/containers/index.js";

// pages/NotFound (404)
import {NotFound} from "./pages/NotFound/index.js";

import "./App.scss";

// pages/Countdown
import {Countdown} from "./pages/Countdown/index.js";
import {AppReturnToTop} from "./pages/Home/components";


const theme_group = {
    localStorageKey: "color-mode",
    themes: [
        {
            name: "Pink",
            className: "theme_default",
            mode: "light"
        },
        {
            name: "Deep Space",
            className: "theme_deep-space",
            mode: "dark"
        },
        {
            name: "Cloudy",
            className: "theme_cloudy",
            mode: "light"
        },
        {
            name: "Blue",
            className: "theme_blue",
            mode: "light"
        }
    ]
};

const App = () => {
    const [isReady, setIsReady] = useState(true);
    const getInitialColorMode = (themeGroup) => {
        const persisted_theme = window.localStorage.getItem(themeGroup.localStorageKey);
        const has_persisted_theme = typeof persisted_theme === "string";

        // Check if the device is a mobile device based on the screen width
        const isMobile = window.innerWidth <= 768;

        const is_dark_mode = window.matchMedia("(prefers-color-scheme: dark)").matches;

        // automatically set light/dark theme based on system
        const system_theme = is_dark_mode
            ? themeGroup.themes[1] // index 1 is dark mode
            : themeGroup.themes[0]; // index 0 is default (light) mode

        if (has_persisted_theme) {
            const persistedTheme = themeGroup.themes.find((theme) => theme.className === persisted_theme);
            if (persistedTheme) {
                setIsReady(true);
                return persistedTheme;
            }
        }

        // Only automatically set the dark mode for mobile devices
        if (isMobile) {
            setIsReady(true);
            return system_theme;
        } else {
            setIsReady(true);
            return themeGroup.themes[0]; // index 0 is default (light) mode
        }
    };

    const [theme, setTheme] = useState(() => getInitialColorMode(theme_group));

    useEffect(() => {
        document.documentElement.className = theme.className;
    }, [theme]);

    // opening animation timer
    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsReady(true);
        }, 5000); // Show the animation for 5 seconds

        return () => clearTimeout(timeout);
    }, []);

    const toggleTheme = (themeGroup) => {
        const currentIndex = themeGroup.themes.findIndex(
            (item) => item.className === theme.className
        );
        const nextIndex = (currentIndex + 1) % themeGroup.themes.length;
        const nextTheme = themeGroup.themes[nextIndex];

        window.localStorage.setItem(themeGroup.localStorageKey, nextTheme.className);

        setTheme(nextTheme);
        document.documentElement.className = nextTheme.className; // update theme
    };

    useEffect(() => {
        const persisted_theme = window.localStorage.getItem(theme_group.localStorageKey);
        const has_persisted_theme = typeof persisted_theme === "string";

        if (!has_persisted_theme) {
            window.localStorage.setItem(theme_group.localStorageKey, theme_group.themes[0].className);
        }
    }, []);

    return (
        isReady ? (
            <BrowserRouter> <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Navbar toggleTheme={() => toggleTheme(theme_group)} themes={theme_group.themes} theme={theme}
                                    links={[
                                        {name: "About", link: "#about"},
                                        {name: "Socials", link: "#socials"},
                                        {name: "Experience", link: "#experience"},
                                    ]}
                                    extLinks={[]}
                                    forceShrink={false}
                            />
                            <AppReturnToTop />
                            <AppHeader />
                            <AppAbout />
                            <AppSocials theme={theme.mode} />
                            <AppExperience />
                            <AppFooter /> </>
                    }
                />

                <Route path="/countdown" element={
                    <>
                        <Navbar
                            toggleTheme={() => toggleTheme(theme_group)}
                            themes={theme_group.themes}
                            theme={theme}
                            links={[]}
                            extLinks={[{name: "Countdown 🎂", link: "https://jenna.jerrydev.net/countdown"}]}
                            forceShrink={true}
                        />
                        <Countdown themeType={theme.theme} />
                    </>
                } />

                <Route path="/ping" element={<p>pong</p>} />

                <Route
                    path="*"
                    element={
                        <>
                            <Navbar
                                toggleTheme={() => toggleTheme(theme_group)}
                                themes={theme_group.themes}
                                theme={theme}
                                links={[{name: "Take me home", link: "/"}]}
                                extLinks={[{name: "Status page", link: "https://status.jerrydev.net"}]}
                                forceShrink={false}
                            />
                            <NotFound />
                        </>
                    }
                />
            </Routes> </BrowserRouter>
        ) : (<OpeningAnimation onAnimationEnd={() => setIsReady(true)} />)
    );
};

export default App;
