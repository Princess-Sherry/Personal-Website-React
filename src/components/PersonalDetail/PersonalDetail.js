import React from "react";
import PersonalDetailItem from "./components/PersonalDetailItem";

const PersonalDetail = () => (
    <table>
        <tbody>
            <PersonalDetailItem category="Age" detail="14" />
            <PersonalDetailItem category="Residence" detail="Japn" />
            <PersonalDetailItem category="Address" detail="Azabu-Juban１Chome-4-6" />
            <PersonalDetailItem category="Email" detail="sailormoon@gmail.com" />
            <PersonalDetailItem category="Phone" detail="(850) 898-9559" />
        </tbody>
    </table>
)

export default PersonalDetail;