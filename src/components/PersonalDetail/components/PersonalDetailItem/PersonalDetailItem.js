import React from "react";
import './PersonalDetailItem.css';

const PersonalDetailItem = ({category, detail}) => (
    <tr>
        <td>{category}</td>
        <td>{detail}</td>
    </tr>
)

export default PersonalDetailItem;