import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCharacter, fetchCharacter } from '../../actions';
import Modal from '../Modal';
import history from '../../history';

class CharacterDelete extends Component {
    componentDidMount() {
        this.props.fetchCharacter(this.props.match.params.id);
    }
    renderActions() {
        const { id } = this.props.match.params;
        return (
            <>
                <button className="ui button negative" onClick={() => this.props.deleteCharacter(id)}>Delete</button>
                <button className="ui button" onClick={() => history.goBack()}>Cancel</button>
            </>
        );
    }

    renderContent() {
        const { character } = this.props;
        return !character ? 'No character to delete' :
            `Are you sure you want to delete ${character.name}?`;
    }

    render() {
        return (
            <Modal
                title="Delete Character"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.goBack()}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    character: state.characters[ownProps.match.params.id]
});

export default connect(mapStateToProps, { deleteCharacter, fetchCharacter })(CharacterDelete);