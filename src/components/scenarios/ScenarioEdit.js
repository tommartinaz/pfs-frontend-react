import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchScenario, editScenario } from '../../actions';
import ScenarioForm from './ScenarioForm';

class ScenarioEdit extends Component {
    componentDidMount() {
        this.props.fetchScenario(this.props.match.params.id);
    }

    onSubmit = formValues => {
        this.props.editScenario(formValues, this.props.match.params.id);
    }

    render() {
        const { scenario } = this.props;
        if(!scenario) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h3>Edit the Scenario</h3>
                <ScenarioForm
                    onSubmit={this.onSubmit}
                    initialValues={scenario}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    scenario: state.scenarios[ownProps.match.params.id]
})

export default connect(mapStateToProps, { fetchScenario, editScenario })(ScenarioEdit);