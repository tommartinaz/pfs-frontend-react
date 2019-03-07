import React from 'react';
import { connect } from 'react-redux';
import { createCharacter } from '../../actions';
import CharacterForm from './CharacterForm';

const CharcterCreate = props => {
    const onSubmit = formValues => {
        props.createCharacter({ ...formValues });
    };
    return (
        <div>
            <h3>Create a Character</h3>
            <CharacterForm
                onSubmit={onSubmit}
            />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps, { createCharacter })(CharcterCreate);