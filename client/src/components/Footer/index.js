import React, { Component } from "react";
import { Image, Grid, Header } from "semantic-ui-react";
import ProfilePic from "../../assets/images/james-profile.jpg";

import "./style.css";

class Footer extends Component {
    render() {
        return(
            <>
                <Grid id="dev-container">
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header id="dev-header" as="h1">Developed By:</Header>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Image id="dev-image" src={ProfilePic} size="medium" circular fluid />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </>
        );
    }
};

export default Footer;