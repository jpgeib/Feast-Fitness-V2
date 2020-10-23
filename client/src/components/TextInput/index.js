import React, { Component } from "react";
import { Label, Input } from "semantic-ui-react";

export default class TextInput extends Component {
    render() {
        return (
            <div>
                <Label>{this.props.label}</Label>
                <Input type="text" placeholer={this.props.placeholer} />
            </div>
        );
    }
};