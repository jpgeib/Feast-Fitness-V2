import React from "react";
import { Card, Input, Button } from "semantic-ui-react";

import "./style.css";

const LunchCard = () => {
    return (
        <Card>
            <Card.Content>
                <Card.Header>Lunch</Card.Header>
                <Card.Description>
                    <Input label="Food" />
                    <Input label="Calories" />
                    <Button content="Save" size="small" color="blue" />
                    <Button content="clear" size="small" color="blue" />
                </Card.Description>
            </Card.Content>
        </Card>
    );
}

export default LunchCard;