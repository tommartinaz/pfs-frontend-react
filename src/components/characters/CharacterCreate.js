import React from 'react';
import { connect } from 'react-redux';
import { createCharacter } from '../../actions';
import CharacterForm from './CharacterForm';

const CharcterCreate = props => {
    const onSubmit = formValues => {
        props.createCharacter({ ...formValues, playerId: 'bd14ca5e-12a7-41ee-a161-597ec87a8204' });
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