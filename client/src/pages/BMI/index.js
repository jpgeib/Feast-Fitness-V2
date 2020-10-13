import React, { Component } from "react";
import { Grid, Header, Card, Input } from "semantic-ui-react";

import "./style.css";

class BMI extends Component {
    render() {
        return (
            <div id="bmi-page">
                <Grid id="bmi-header-container">
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header as="h1">Track Your Calories!</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid id="bmi-container">
                    <Grid.Row>
                        <Grid.Column width={6}>

                        </Grid.Column>
                        <Grid.Column width={10}>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>

        )
    }
}

export default BMI;