import React, { Component } from React;
import { Grid, Header } from "semantic-ui-react";

import "./style.css";

class Home extends Component {
    render() {
        return(
            <Grid>
                <Header as="h1">Home</Header>
            </Grid>
        )
    }
}

export default Home;