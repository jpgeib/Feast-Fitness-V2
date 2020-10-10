import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from "../../pages/Home";
import MealPlanner from "../../pages/MealPlanner";
import BMI from "../../pages/BMI";


class App extends Component {
    render() {
        return (
            <>
                <Route exact path="/" component={Home} />
                <Route exact path="/mealplanner" component={MealPlanner} />
                <Route exact path="bmi" component={BMI} />
            </>
        );

    }
}

export default App;