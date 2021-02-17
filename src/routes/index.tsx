import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from '../Pages/Home';
import Repository from '../Pages/repository';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/repository/:repository+" component={Repository} />
        </Switch>
    );
}

export default Routes;