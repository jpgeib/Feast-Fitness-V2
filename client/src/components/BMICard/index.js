import React, { Component } from "react";
import { Card, Button, Header } from "semantic-ui-react";
import TextInput from "../TextInput";

import "./style.css";

class BMICard extends Component {

    state={
        bmi: "",
        bmiClass: ""
    }

    computeBMI() {
        let bmiValue = (this.state.weight / this.state.height) / this.state.height;
        this.setState({ bmi: bmiValue });
        let bmiClass = this.getBMI(bmiValue);
        this.setState({ bmiClass: bmiClass });
    }

    getBMI(bmi) {
        if (bmi < 18.5) {
            return "Underweight";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            return "Normal weight";
        } else if (bmi >= 25 && bmi < 29.9) {
            return "Overweight";
        } else if (bmi >= 30) {
            return "Obesity";
        }
    }

    render() {
        return (
            <Card>
                <Card.Content>
                    <div className="row">
                        <TextInput
                            label="Weight (kg)"
                            placeholder="Enter weight..."
                            onChange={this.weightChange}
                        />
                    </div>
                    <div className="row">
                        <TextInput
                            label="Height (m)"
                            placeholder="Enter height..."
                            onChange={this.heightChange}
                        />
                    </div>
                    <div className="row">
                        <Button label="Submit" onClick={this.computeBMI} />
                    </div>
                    <div className="row">
                        <Header as="h3">BMI: {this.state.bmi}</Header>
                    </div>
                    <div className="row">
                        <Header as="h3">{this.state.bmiClass}</Header>
                    </div>
                </Card.Content>
            </Card>
        );
    }
};

export default BMICard;

