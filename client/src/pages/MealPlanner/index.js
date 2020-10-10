import React, { Component } from React;
import { Grid, Header } from "semantic-ui-react";

import "./style.css";

class MealPlanner extends Component {
    render() {
        return(
            <Grid>
                <Header as="h1">MealPlanner</Header>
            </Grid>
        )
    }
}

export default MealPlanner;