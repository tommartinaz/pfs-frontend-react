import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacter, editCharacter } from '../../actions';
import CharacterForm from './CharacterForm';

class CharacterEdit extends Component {
    componentDidMount() {
        this.props.fetchCharacter(this.props.match.params.id);
    }

    onSubmit = formValues => {
        this.props.editCharacter(formValues, this.props.match.params.id);
    }

    onCancel = () => {
        console.log("CANCEL", this.props);
    }

    render() {
        const { character } = this.props;
        if(!character) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h3>Edit the Character</h3>
                <CharacterForm
                    onSubmit={this.onSubmit}
                    initialValues={character}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    character: state.characters[ownProps.match.params.id]
})

export default connect(mapStateToProps, { fetchCharacter, editCharacter })(CharacterEdit);