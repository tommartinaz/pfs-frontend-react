import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCharacters } from '../../actions';
import { fetchAlignments } from '../../actions/alignments';
import { fetchClasses } from '../../actions/classes';
import { fetchRaces } from '../../actions/races';

class CharacterList extends Component {
    componentDidMount() {
        this.props.fetchCharacters();
        this.props.fetchAlignments();
        this.props.fetchClasses();
        this.props.fetchRaces();
    }

    renderCharacters() {
        const { characters, races, alignments, classes } = this.props;
        if(!Object.keys(races).length || !Object.keys(alignments).length || !Object.keys(classes).length) {
            return null;
        }
        return characters.map(character => {
            return (
                <tr key={character.id}>
                    <td>{character.characterNumber}</td>
                    <td>{character.name}</td>
                    <td>{character.level}</td>
                    <td>{alignments[character.alignmentId].name}</td>
                    <td>{races[character.raceId].name}</td>
                    <td>{classes[character.classId].name}</td>
                    <td>
                        <Link to={`/characters/${character.id}/edit`}>
                            <i className="blue edit outline icon" />
                        </Link>
                        <Link to={`/characters/${character.id}/delete`}>
                            <i className="red cut icon" />
                        </Link>
                    </td>
                </tr>
            );
        });
    }
    render() {
        const { characters } = this.props;

        const renderedElement = characters.length ? (
            <table className="ui celled table center aligned">
                    <thead>
                        <tr className="single line">
                            <th>Character Number</th>
                            <th>Name</th>
                            <th>Level</th>
                            <th>Alignment</th>
                            <th>Race</th>
                            <th>Class</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderCharacters()}
                    </tbody>
                </table>
        ) : <div>You have no characters.</div>
        return (
            <>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Link to="/characters/new" className="ui button green">Create new character</Link>
                </div>
                {renderedElement}
            </>
        )
    }
}

const mapStateToProps = state => ({
    characters: Object.values(state.characters),
    alignments: state.alignments,
    races: state.races,
    classes: state.classes
});

export default connect(mapStateToProps, { fetchCharacters, fetchAlignments, fetchClasses, fetchRaces })(CharacterList);