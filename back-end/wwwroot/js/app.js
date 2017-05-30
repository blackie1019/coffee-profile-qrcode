// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';

injectTapEventPlugin();

const render = Component => {
	ReactDOM.render(
    <AppContainer>
    <Component/>
  </AppContainer>, document.getElementById('app'));
};

render(Root);

if (module.hot) {
	module.hot.accept('./containers/Root', () => {
		render(Root);
	});
}
