import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCharacters } from '../../actions';

class CharacterList extends Component {
    componentDidMount() {
        this.props.fetchCharacters();
    }

    renderCharacters() {
        return this.props.characters.map(character => {
            return (
                <tr key={character.id}>
                    <td>{character.characterNumber}</td>
                    <td>{character.name}</td>
                    <td>{character.level}</td>
                    <td>{character.alignment}</td>
                    <td>{character.race}</td>
                    <td>{character.characterClass}</td>
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
        return (
            <>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Link to="/characters/new" className="ui button green">Create new character</Link>
                </div>
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
            </>
        )
    }
}

const mapStateToProps = state => ({
    characters: Object.values(state.characters)
});

export default connect(mapStateToProps, { fetchCharacters })(CharacterList);