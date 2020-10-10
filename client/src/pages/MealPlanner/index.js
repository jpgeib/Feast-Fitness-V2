import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import MealrSearchForm from "../../components/MealSearchForm";

import "./style.css";

class MealPlanner extends Component {
    render() {
        return (
            <div id="meal-page">
                <Grid id="meal-header-container">
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header as="h1">Hungry? You Came to the Right Place!</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid id="meal-container">
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header as="h2">Choose One or More Methods for Searching:</Header>
                        </Grid.Column>
                        <Grid.Column width={16}>
                            <MealrSearchForm />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default MealPlanner;