import React, { Component } from "react";
import { Card, Input, Button } from "semantic-ui-react";

import "./style.css";

class BMICard extends Component {
    render() {
        return (
            <Card>
                <Card.Content>
                    <Card.Header>Weight (lbs):</Card.Header>
                    <Card.Description>
                        <Input />
                    </Card.Description>
                    <Card.Header>Height (ft):</Card.Header>
                    <Card.Description>
                        <Input />
                    </Card.Description>
                    <Card.Header>Height (in):</Card.Header>
                    <Card.Description>
                        <Input />
                    </Card.Description>
                    <Card.Content extra>
                        <Button content="Get Your BMI" size="small" color="blue" />
                    </Card.Content>
                </Card.Content>
            </Card>
        );
    }
};

export default BMICard;

