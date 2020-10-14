import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import BMICard from "../../components/BMICard";
import BMIResult from "../../components/BMIResult";
import CalorieResult from "../../components/CalorieResult";
import CalorieCardGroup from "../../components/CalorieCardGroup";

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
                            <BMICard />
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <BMIResult />
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <CalorieResult />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <CalorieCardGroup />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>

        )
    }
}

export default BMI;