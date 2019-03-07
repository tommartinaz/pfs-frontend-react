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

    renderCharacters(characters) {
        const { races, alignments, classes } = this.props;
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

    renderCharactersTable() {
        const { characters } = this.props;
        if(characters.length) {
            const myCharacters = characters.filter(character => {
                return character.playerId === this.props.userId
            });
            if (myCharacters.length) {
                return (
                    <table className="ui celled table center aligned">
                        <thead>
                            <tr className="single line">
                                <th className="sorted ascending">Character Number</th>
                                <th>Name</th>
                                <th>Level</th>
                                <th>Alignment</th>
                                <th>Race</th>
                                <th>Class</th>
                                <th>Manage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderCharacters(myCharacters)}
                        </tbody>
                    </table>
                );
            } else {
                return <div>You have no characters.</div>
            }
        } else {
            return null;
        }
    }
    render() {
        if(this.props.isSignedIn) {
            return (
                <div>
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <Link to="/characters/new" className="ui button green">Create new character</Link>
                    </div>
                    {this.renderCharactersTable()}
                </div>
            );
        } else {
            return (
                <div>Please sign in to see your characters</div>
            );

        }
    }
}

const mapStateToProps = state => ({
    characters: Object.values(state.characters),
    alignments: state.alignments,
    races: state.races,
    classes: state.classes,
    userId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
});

export default connect(mapStateToProps, { fetchCharacters, fetchAlignments, fetchClasses, fetchRaces })(CharacterList);