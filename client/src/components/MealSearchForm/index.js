import React, { Component } from "react";
import { Grid, Form, Button, Header } from "semantic-ui-react";
import { Field, reduxForm, reduxform } from "redux-form";
import { required } from "redux-form-validators";

import "./style.css";

class MealFormSearch extends Component {

    renderSearch = ({ input, meta }) => {
        return (
            <Form.Input
                {...input}
                error={meta.touched && meta.error}
                autoComplete="off"
                placeholder="E.g. Chicken, Potato, Basil, etc."
            />
        );
    }

    onSubmit = () => {
        const { reset } = this.props;
        this.props.onSubmit();
        reset("mealSearch");
    }

    handleInputChange = (e) => {
        console.log(e.target.value);
        let [name, value] = e.target.value;
        this.setState({ [name]: value });
    }

    render() {
        const { handleSubmit, invalid, submitting, submitFailed } = this.props;
        return (
            <>
                <Form id="search-form" onSubmit={handleSubmit(this.onSubmit)} method="POST">
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Header as="h3">Search:</Header>
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <Field
                                    name="search"
                                    component={this.renderSearch}
                                    validate={
                                        required({ msg: "You must provide a search term." })
                                    }
                                    onChange={this.handleInputChange}
                                />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Header as="h3">Diet Options:</Header>
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <Field name="dietOptions" component="select">
                                    <option />
                                    <option>Balanced</option>
                                    <option>High-Fiber</option>
                                    <option>High-Protein</option>
                                    <option>Low-Carb</option>
                                    <option>Low-Fat</option>
                                    <option>Low-Sodium</option>
                                </Field>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Header as="h3">Health Options:</Header>
                            </Grid.Column>
                            <Grid.Column width={16}>
                            <Field name="healthOptions" component="select">
                                    <option />
                                    <option>Dairy-Free</option>
                                    <option>Gluten-Free</option>
                                    <option>Keto</option>
                                    <option>Kosher</option>
                                    <option>Paleo</option>
                                    <option>Peanut-Free</option>
                                    <option>Pescatarian</option>
                                    <option>Pork-Free</option>
                                    <option>Shellfish-Free</option>
                                    <option>Vegan</option>
                                </Field>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                                <Grid.Column width={8}>
                                    <Button content="Search" size="medium" color="blue" />
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Button content="Clear Results" size="medium" color="blue" />
                                </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Form>
            </>
        );
    }
}

export default reduxForm({ form: "mealSearch" })(MealFormSearch);