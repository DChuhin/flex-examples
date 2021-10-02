import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import FlexExample from 'flex/FlexExample';
import { DEFAULT_EXAMPLE, FLEX_EXAMPLES } from 'config/constants';
import NavBar from 'router/NavBar';

const AppRouter = () => (
  <BrowserRouter>
    <NavBar />
    <div className="app-content">
      <Switch>
        <Route key="redirect" path={'/'} exact>
          <Redirect to={DEFAULT_EXAMPLE.name} />
        </Route>
        <Route key="default" path={DEFAULT_EXAMPLE.name} exact>
          <FlexExample description={DEFAULT_EXAMPLE.description} />
        </Route>
        {FLEX_EXAMPLES.map(example => (
          <Route key={`route-${example.name}`} path={`/${example.name}`} exact>
            <FlexExample className={example.name} description={example.description} items={example.items} />
          </Route>
        ))}
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;