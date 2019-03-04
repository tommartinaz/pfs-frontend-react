import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class ScenarioForm extends Component {
    renderInput = ({ input, label, meta }) => {
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        )
    }

    renderTextArea = ({ input, label, meta }) => {
        return (
            <div className="field">
                <textarea {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        )
    }

    renderError({ touched, error }) {
        if(touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    // onCancelClick = () => {
    //     console.log("CANCEL")
    //     // TODO: route back one page
    // }

    render() {
        const { handleSubmit, pristine, reset, invalid } = this.props;
        return (
            <>
                <form className="ui form error" onSubmit={handleSubmit(this.onSubmit)}>
                    <Field name="title" component={this.renderInput} label="Enter Title" />
                    <div className="fields">
                        <div className="four wide field">
                            <Field name="season" component={this.renderInput} label="Enter Season" />
                        </div>
                        <div className="four wide field">
                            <Field name="scenarioNumber" component={this.renderInput} label="Scenario Number" />
                        </div>
                        <div className="four wide field">
                            <Field name="lowLevel" component={this.renderInput} label="Low Level" />
                        </div>
                        <div className="four wide field">
                            <Field name="highLevel" component={this.renderInput} label="High Level" />
                        </div>
                    </div>
                    <Field name="description" component={this.renderTextArea} label="Description" />
                    <button className="ui button primary" disabled={pristine || invalid}>Submit</button>
                    <button className="ui button" onClick={reset} disabled={pristine}>Clear form</button>
                </form>
            </>
        )
    }
}

const validate = formValues => {
    const { title, season, scenarioNumber, lowLevel, highLevel, description } = formValues;
    const errors = {};
    if(!title) {
        errors.title = 'A title is required';
    }
    if(!season || isNaN(season)) {
        errors.season = 'Requires a number';
    }
    if(!scenarioNumber || isNaN(scenarioNumber)) {
        errors.scenarioNumber = 'Requires a number';
    }
    if(!lowLevel || isNaN(lowLevel)) {
        errors.lowLevel = 'Requires a number';
    }
    if(!highLevel || isNaN(highLevel)) {
        errors.season = 'Requires a number';
    }
    if(!description) {
        errors.description = 'A description is required';
    }
    return errors;
}

export default reduxForm({
    form: 'scenarioForm',
    validate
})(ScenarioForm);