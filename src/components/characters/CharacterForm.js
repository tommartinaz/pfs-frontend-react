import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { races, classes, alignments } from '../../data';

class CharacterForm extends Component {
    renderInput = ({ input, label }) => {
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} autoComplete="off" />
            </div>
        );
    }

    renderSelector = ({ input, label, selector }) => {
        const list = selector.map(el => {
            return (
                <option key={el} value={el}>{el}</option>
            )
        })
        return (
            <div className="field">
                <label>{label}</label>
                <select {...input}>
                    {list}
                </select>
            </div>
        )
    }
    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    }

    render() {
        const { handleSubmit, pristine, reset } = this.props;
        return (
            <form className="ui form" onSubmit={handleSubmit(this.onSubmit)}>
                <div className="fields">
                    <div className="two wide field">
                        <Field name="characterNumber" component={this.renderInput} label="Character Number" />
                    </div>
                    <div className="five wide field">
                        <Field
                            name="name"
                            component={this.renderInput}
                            label="Enter Name"
                            />
                    </div>
                    <div className="two wide field">
                        <Field name="level" component={this.renderInput} type="number" label="Level" />
                    </div>
                </div>
                <div className="fields">
                    <div className="three wide field">
                        <Field name="race" component={this.renderSelector} label='Race' selector={races} />
                    </div>
                    <div className="three wide field">
                        <Field name="characterClass" component={this.renderSelector} label='Class' selector={classes} />
                    </div>
                    <div className="three wide field">
                        <Field name="alignment" component={this.renderSelector} label='Alignment' selector={alignments} />
                    </div>
                </div>
                <button className="ui button primary" disabled={pristine}>Save</button>
                <button className="ui button" onClick={reset} disabled={pristine}>Reset</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'characterForm'
})(CharacterForm);