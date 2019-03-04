import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchScenario } from '../../actions';

class Scenario extends Component {
    componentDidMount() {
        this.props.fetchScenario(this.props.match.params.id);
    }
    render() {
        const { scenario, match } = this.props;
        const { id } = match.params;
        if(!scenario) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <div className="field">
                    {scenario.title}
                </div>

                <div className="fields">
                    <div className="two wide field">
                        {scenario.season} - {scenario.scenarioNumber}
                    </div>
                    <div className="two wide field">
                        Levels {scenario.lowLevel} - {scenario.highLevel}
                    </div>
                </div>
                <div className="field">
                    {scenario.description}
                </div>
                <Link to={`/scenarios/${id}/edit`} className="ui button primary">Edit</Link>
                <Link to={`/scenarios/${id}/delete`} className="ui button negative">Delete</Link>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    scenario: state.scenarios[ownProps.match.params.id]
})
export default connect(mapStateToProps, { fetchScenario })(Scenario);