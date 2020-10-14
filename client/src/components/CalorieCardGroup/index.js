import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import BreakfastCard from "./BreakfastCard";
import LunchCard from "./LunchCard";
import DinnerCard from "./DinnerCard";
import SnackCard from "./SnackCard";
import ExerciseCard from "./ExerciseCard";

import "./style.css";

class CalorieCardGroup extends Component {
    render() {
        return (
            <Card.Group itemsPerRow={5}>
                <BreakfastCard />
                <LunchCard />
                <DinnerCard />
                <SnackCard />
                <ExerciseCard />
            </Card.Group>
        );
    }
}

export default CalorieCardGroup;