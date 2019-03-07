import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import ScenarioList from './scenarios/ScenarioList';
import ScenarioEdit from './scenarios/ScenarioEdit';
import ScenarioCreate from './scenarios/ScenarioCreate';
import Scenario from './scenarios/Scenario';
import Header from './Header';
import history from '../history';
import CharacterList from './characters/CharacterList';
import CharacterEdit from './characters/CharacterEdit';
import CharacterCreate from './characters/CharacterCreate';
import CharacterDelete from './characters/CharacterDelete';
import ScenarioDelete from './scenarios/ScenarioDelete';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <>
                    <Header />
                    <Switch>
                        <Redirect path="/" exact to="/characters" />
                        <Route path="/scenarios" exact component={ScenarioList} />
                        <Route path="/scenarios/new" component={ScenarioCreate} />
                        <Route path="/scenarios/:id" exact component={Scenario} />
                        <Route path="/scenarios/:id/edit" component={ScenarioEdit} />
                        <Route path="/scenarios/:id/delete" component={ScenarioDelete} />
                        <Route path="/characters" exact component={CharacterList} />
                        <Route path="/characters/new" component={CharacterCreate} />
                        <Route path="/characters/:id/edit" component={CharacterEdit} />
                        <Route path="/characters/:id/delete" component={CharacterDelete} />
                    </Switch>
                </>
            </Router>
        </div>
    )
};

export default App;