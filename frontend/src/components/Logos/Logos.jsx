import React from "react";
import "./styles.css"

import dif from "./../../assets/dif.png";
import aik from "./../../assets/aik.png";

const Logos = () => {
    return (
        <section className="logos">
            <section className="inner">
                <img src={dif} alt="DIF" />
                <img src={aik} alt="AIK" />
            </section>
        </section>
    );
}

export default Logos

