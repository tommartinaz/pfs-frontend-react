import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchScenario, deleteScenario } from '../../actions';
import Modal from '../Modal';
import history from '../../history';

class ScenarioDelete extends Component {
    componentDidMount() {
        this.props.fetchScenario(this.props.match.params.id);
    }

    renderActions() {
        const { id } = this.props.match.params;
        return (
            <>
                <button className="ui button negative" onClick={() => this.props.deleteScenario(id)}>Delete</button>
                <button className="ui button" onClick={() => history.goBack()}>Cancel</button>
            </>
        );
    }

    renderContent() {
        const { scenario } = this.props;
        return !scenario ? 'No scenario to delete' :
            `Are you sure you want to delete ${scenario.title}?`;
    }

    render() {
        return (
            <Modal
                title="Delete Scenario"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.goBack()}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    scenario: state.scenarios[ownProps.match.params.id]
});

export default connect(mapStateToProps, { deleteScenario, fetchScenario })(ScenarioDelete);