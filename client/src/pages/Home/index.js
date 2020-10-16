import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, Header, Image, Button } from "semantic-ui-react";
import HomeSlideShow from "../../components/HomeSlideShow";
import Silverware from "../../assets/images/fork-spoon.png";
import HeartRate from "../../assets/images/heart-rate.png"

import "./style.css";

class Home extends Component {
    render() {
        return (
            <div id="home-page">
                <Grid id="home-container">
                    <Grid.Row>
                        <Grid id="home-image-container">
                            <Grid.Row centered>
                                <Grid.Column width={16}>
                                    <Header as="h1">Welcome to Feast and Fitness</Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <HomeSlideShow />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <Image src={Silverware} size="medium" />
                                            </Grid.Column>
                                            <Grid.Column width={16}>
                                                <Header as="h2">Eat</Header>
                                            </Grid.Column>
                                            <Grid.Column width={16}>
                                                <Header as="h3">Choose a healthy meal option that suits your dietary needs from our recipe search engine!</Header>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <Image src={HeartRate} size="medium" />
                                            </Grid.Column>
                                            <Grid.Column width={16}>
                                                <Header as="h2">Watch What You Eat</Header>
                                            </Grid.Column>
                                            <Grid.Column width={16}>
                                                <Header as="h3">Then, to make sure you're meeting your dietary needs, track your meals and caloric intake with our calorie tracker!</Header>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Row>


                    <Grid.Row>
                        <Button
                            as={Link}
                            to="/mealplanner"
                            content="Not sure where to start? Click here!"
                            id="home-btn"
                            size="large"
                            color="blue" />
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default Home;