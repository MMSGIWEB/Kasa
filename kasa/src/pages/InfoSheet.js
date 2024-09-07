import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fiche from "./Fiche";
import appts from '../datas/logements.json'

function InfoSheet() {
    return (
        <>
            {appts.map((appt) => {
                <Fiche />
            })}
        </>
    )
}

export default InfoSheet