import React from "react";
import Box from "../Box";
import { aik_large, dif_large } from "../Images";

import "./styles.css"

const Logos = () => {
    return (
        <Box>
            <section className="logos">
                <img src={dif_large} alt="DIF" />
                <img src={aik_large} alt="AIK" />
            </section>
        </Box>
    );
}

export default Logos
