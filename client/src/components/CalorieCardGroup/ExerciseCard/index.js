import React from "react";
import { Card, Input, Button } from "semantic-ui-react";

import "./style.css";

const ExerciseCard = () => {
    return (
        <Card>
            <Card.Content>
                <Card.Header>Exercise</Card.Header>
                <Card.Description>
                    <Input label="Workout" />
                    <Input label="Calories Burnt" />
                    <Button content="Save" size="small" color="blue" />
                    <Button content="clear" size="small" color="blue" />
                </Card.Description>
            </Card.Content>
        </Card>
    );
}

export default ExerciseCard;