import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createScenario } from '../../actions';
import ScenarioForm from './ScenarioForm';

class ScenarioCreate extends Component {
    onSubmit = formValues => {
        this.props.createScenario(formValues);
    }
    render() {
        return (
            <div>
                <h3>Create a Scenario</h3>
                <ScenarioForm
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

export default connect(null, { createScenario })(ScenarioCreate);