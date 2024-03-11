import React from "react";
import "./AppWrap.scss";

const AppWrap = (Component, idName, classNames) => function HOC(props) {
    return (
        <div id={idName} className={`wrapper__container ${classNames}`}>
            <div className="wrapper">
                <Component {...props} />
            </div>
        </div>
    );
};

export default AppWrap;
