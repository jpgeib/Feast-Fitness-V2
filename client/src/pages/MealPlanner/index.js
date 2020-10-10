import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";

import "./style.css";

class MealPlanner extends Component {
    render() {
        return(
            <Grid>
                <Grid.Column>
                    <Header as="h1">MealPlanner</Header>
                </Grid.Column>
            </Grid>
        )
    }
}

export default MealPlanner;