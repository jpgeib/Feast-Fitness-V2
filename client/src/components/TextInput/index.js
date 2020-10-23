import React, { Component } from "react";
import { Label, Input } from "semantic-ui-react";

export default class TextInput extends Component {

    state = {
        value: "",
        weight: "",
        feet: "",
        inch: ""
    }

    handleChange = this.handleChange.bind(this);
    weightChange = this.weightChange.bind(this);
    heightChangeFeet = this.heightChangeFeet.bind(this);
    heightChangeInch = this.heightChangeInch.bind(this);

    handleChange(event) {
        let inputValue = event.target.value;
        this.setState({ value: inputValue });
        this.props.onChange(inputValue);
    }

    weightChange(weightValue) {
        this.setState({ weight: weightValue });
    }

    heightChangeFeet(feetValue) {
        this.setState({ feet: feetValue });
    }

    heightChangeInch(inchValue) {
        this.setState({ inch: inchValue });
    }

    render() {
        return (
            <div>
                <Label>{this.props.label}</Label>
                <Input
                    value={this.state.value}
                    type="text"
                    placeholder={this.props.placeholder}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
};