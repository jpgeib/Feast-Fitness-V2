import React, { Component } from "react";
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