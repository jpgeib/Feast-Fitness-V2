import React, { Component } from "react";
import { Card, Input, Button, Header } from "semantic-ui-react";

import "./style.css";

class CalorieCardGroup extends Component {
    render() {
        return (
            <Card>
                <Card.Content>
                    <Card.Header>Breakfast</Card.Header>
                    <Card.Description>
                        <Input label="Food" />
                        <Input label="Calories" />
                        <Button content="Save" size="small" color="blue" />
                        <Button content="clear" size="small" color="blue" />
                    </Card.Description>
                    <Card.Header>Lunch</Card.Header>
                    <Card.Description>
                        <Input label="Food" />
                        <Input label="Calories" />
                        <Button content="Save" size="small" color="blue" />
                        <Button content="clear" size="small" color="blue" />
                    </Card.Description>
                    <Card.Header>Dinner</Card.Header>
                    <Card.Description>
                        <Input label="Food" />
                        <Input label="Calories" />
                        <Button content="Save" size="small" color="blue" />
                        <Button content="clear" size="small" color="blue" />
                    </Card.Description>
                    <Card.Header>Snacks</Card.Header>
                    <Card.Description>
                        <Input label="Food" />
                        <Input label="Calories" />
                        <Button content="Save" size="small" color="blue" />
                        <Button content="clear" size="small" color="blue" />
                    </Card.Description>
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

}

export default CalorieCardGroup;