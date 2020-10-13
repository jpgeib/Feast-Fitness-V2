import React from "react";
import { Header } from "semantic-ui-react";

import "./style.css";

const BMIResult = () => {
    return(
        <div id="BMI-result">
            <Header as="h3">Your BMI Index:</Header>
            <p id="BMI-text"></p>
        </div>
    );
}

export default BMIResult;