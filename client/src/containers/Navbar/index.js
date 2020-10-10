import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./style.css";

export default class Navbar extends Component {

    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {

        const { activeItem } = this.state;

        return (
            <Menu pointing secondary>
                <Menu.Item
                    as={Link}
                    to="/mealplanner"
                    name="mealplanner"
                    active={activeItem === "mealplanner"}
                    content="Meal Planner"
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={Link}
                    to="/bmi"
                    name="bmi"
                    active={activeItem === "bmi"}
                    content="BMI Calculator"
                    onClick={this.handleItemClick}
                />
            </Menu>
        );
    }

}