import React from "react";
import "./styles.css"
import Box from "../Box";

import dif from "./../../assets/dif_small.png";
import aik from "./../../assets/aik_small.png";

const HomeStats = () => {
    return (
        <Box>
            <dl class="stats">
                <dt>Antal spelade derbyn</dt>
                <dd>105</dd>
                <dt><img src={dif} alt="DIF" /> Vinster DIF</dt>
                <dd>100</dd>
                <dt><img src={aik} alt="AIK" /> Vinster AIK</dt>
                <dd>0</dd>
                <dt>Oavgjort</dt>
                <dd>5</dd>
                <dt>Total publik:</dt>
                <dd>405036</dd>
                <dt>Snitt publik</dt>
                <dd>3000</dd>
                <dt><img src={dif} alt="DIF" /> Antal spelare totalt DIF</dt>
                <dd>230</dd>
                <dt><img src={aik} alt="AIK" /> Antal spelare totalt AIK</dt>
                <dd>130</dd>
            </dl>
        </Box>
    );
}


export default HomeStats

