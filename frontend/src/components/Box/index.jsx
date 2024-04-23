import React from "react";
import "./styles.css"

const Box = ({ children }) => {
    return (
        <section className="box">
            {children}
        </section>
    );
}

export default Box