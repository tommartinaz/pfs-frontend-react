import React from 'react';
import { connect } from 'react-redux';
import { createCharacter } from '../../actions';
import CharacterForm from './CharacterForm';

const CharcterCreate = props => {
    const onSubmit = formValues => {
        props.createCharacter({ ...formValues, playerId: 'db4f9f61-1d04-449b-a55c-1de1a3c451b5' });
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

export default connect(null, { createCharacter })(CharcterCreate);