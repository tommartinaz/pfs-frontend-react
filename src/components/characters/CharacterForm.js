import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { fetchAlignments } from '../../actions/alignments';
import { fetchClasses } from '../../actions/classes';
import { fetchRaces } from '../../actions/races';

class CharacterForm extends Component {
    componentDidMount() {
        this.props.fetchAlignments();
        this.props.fetchClasses();
        this.props.fetchRaces();
    }
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
                <option key={el.id} value={el.id}>{el.name}</option>
            )
        })
        return (
            <div className="field">
                <label>{label}</label>
                <select {...input}>
                    <option value='' />
                    {list}
                </select>
            </div>
        )
    }
    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    }

    render() {
        const { handleSubmit, pristine, reset, alignments, races, classes } = this.props;
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
                        <Field name="raceId" component={this.renderSelector} label='Race' selector={races} />
                    </div>
                    <div className="three wide field">
                        <Field name="classId" component={this.renderSelector} label='Class' selector={classes} />
                    </div>
                    <div className="three wide field">
                        <Field name="alignmentId" component={this.renderSelector} label='Alignment' selector={alignments} />
                    </div>
                </div>
                <button className="ui button primary" disabled={pristine}>Save</button>
                <button className="ui button" onClick={reset} disabled={pristine}>Reset</button>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    alignments: Object.values(state.alignments),
    races: Object.values(state.races),
    classes: Object.values(state.classes)
})

export default connect(mapStateToProps, { fetchAlignments, fetchClasses, fetchRaces })(reduxForm({
    form: 'characterForm'
})(CharacterForm));