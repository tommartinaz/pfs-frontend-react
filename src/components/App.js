import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import ScenarioList from './scenarios/ScenarioList';
import ScenarioEdit from './scenarios/ScenarioEdit';
import ScenarioCreate from './scenarios/ScenarioCreate';
import Scenario from './scenarios/Scenario';
import Header from './Header';
import history from '../history';
import CharacterList from './characters/CharacterList';
import CharacterEdit from './characters/CharacterEdit';
import CharacterCreate from './characters/CharacterCreate';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <>
                    <Header />
                    <Switch>
                        <Route path="/scenarios" exact component={ScenarioList} />
                        <Route path="/scenarios/new" component={ScenarioCreate} />
                        <Route path="/scenarios/:id" exact component={Scenario} />
                        <Route path="/scenarios/:id/edit" component={ScenarioEdit} />
                        <Route path="/characters" exact component={CharacterList} />
                        <Route path="/characters/new" component={CharacterCreate} />
                        <Route path="/characters/:id/edit" component={CharacterEdit} />
                    </Switch>
                </>
            </Router>
        </div>
    )
};

export default App;