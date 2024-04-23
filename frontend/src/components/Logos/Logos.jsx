import React from "react";
import "./styles.css"
import { aik_large, dif_large } from "../Images";

const Logos = () => {
    return (
        <section className="logos">
            <section className="inner">
                <img src={dif_large} alt="DIF" />
                <img src={aik_large} alt="AIK" />
            </section>
        </section>
    );
}

export default Logos

