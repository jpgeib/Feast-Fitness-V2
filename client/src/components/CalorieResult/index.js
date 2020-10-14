import React from "react";
import { Header } from "semantic-ui-react";

import "./style.css";

const CalorieResult = () => {
    return (
        <div id="calorie-result">
            <Header as="h3">Your Suggested Daily Calorie Intake:</Header>
            <p id="recommended"></p>
            <p id="calories-left"></p>
        </div>
    );
}

export default CalorieResult;