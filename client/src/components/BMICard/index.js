import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import TextInput from "../TextInput";

import "./style.css";

class BMICard extends Component {
    render() {
        return (
            <Card>
                <Card.Content>
                    <div className="row">
                        <TextInput
                            label="Weight (lbs)"
                            placeholder="Enter weight..."
                            onChange={this.weightChange}
                        />
                    </div>
                    <div className="row">
                        <TextInput
                            label="Height (ft)"
                            placeholder="Enter height..."
                            onChange={this.heightChangeFeet}
                        />
                    </div>
                    <div className="row">
                        <TextInput
                            label="Height (in)"
                            placeholder="Enter height..."
                            onChange={this.heightChangeInch}
                        />
                    </div>
                    <div className="row">

                    </div>
                </Card.Content>
            </Card>
        );
    }
};

export default BMICard;

