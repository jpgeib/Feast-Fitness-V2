import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";

import "./style.css";

class BMI extends Component {
    render() {
        return(
            <Grid>
                <Grid.Column>
                    <Header as="h1">BMI</Header>
                </Grid.Column>
            </Grid>
        )
    }
}

export default BMI;