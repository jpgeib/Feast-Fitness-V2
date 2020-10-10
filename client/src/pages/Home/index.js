import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";

import "./style.css";

class Home extends Component {
    render() {
        return(
            <Grid>
                <Grid.Column>
                    <Header as="h1">Home</Header>
                </Grid.Column>
            </Grid>
        )
    }
}

export default Home;