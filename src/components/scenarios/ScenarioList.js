import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchScenarios } from '../../actions';

class ScenarioList extends Component {
    state = {
        selectedSeason: 'All'
    };
    componentDidMount() {
        this.props.fetchScenarios();
    }

    buildSeasonSelector() {
        let seasons = ['All'];
        for(let i = 0; i < 11; i++){
            seasons.push(i);
        }
        return seasons.map(season => {
            return (
                <option key={season} value={season}>
                    {season === 'All' ? 'All Seasons' : `Season ${season}`}
                </option>
            )
        })
    }

    handleSeasonSelect = ({ target: { value }}) => {
        this.setState({ selectedSeason: value })
    }

    renderList() {
        const { scenarios } = this.props;
        let filteredScenarios = scenarios;
        if(this.state.selectedSeason !== 'All') {
            filteredScenarios = scenarios.filter(scenario => scenario.season === parseInt(this.state.selectedSeason, 10));
        }
        return filteredScenarios.map(scenario => {
            return (
                <tr key={scenario.id}>
                    <td className="center aligned">{scenario.season}-{scenario.scenarioNumber}</td>
                    <td>{scenario.title}</td>
                    <td className="center aligned">{scenario.lowLevel} - {scenario.highLevel}</td>
                    <td>{scenario.description}</td>
                    <td style={{display: 'flex', justifyContent: 'center'}}>
                        <div>
                            <Link to={`/scenarios/${scenario.id}/edit`}>
                                <i className="blue edit outline icon" />
                            </Link>
                        </div>
                        <div>
                            <Link to={`/scenarios/${scenario.id}/delete`}>
                                <i className="red cut icon" />
                            </Link>
                        </div>
                    </td>
                </tr>
            );
        });
    }

    render() {
        return (
            <>
                <select value={this.state.selectedSeason} onChange={this.handleSeasonSelect}>
                    {this.buildSeasonSelector()}
                </select>
                <table className="ui celled table">
                    <thead>
                        <tr className="single line">
                            <th className="center aligned">Scenario Number</th>
                            <th>Title</th>
                            <th className="center aligned">Level range</th>
                            <th className="nine wide">Description</th>
                            <th className="center aligned">Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderList()}
                    </tbody>
                </table>
            </>
        );
    }
}

const mapStateToProps = state => ({
    scenarios: Object.values(state.scenarios)
});

export default connect(mapStateToProps, { fetchScenarios })(ScenarioList);