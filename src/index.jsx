// import React from 'react';
// import ReactDOM from 'react-dom';
// import RootContainer from './containers/root';

// import './styles/styles.scss';

// ReactDOM.render(
//  <RootContainer />,
//  document.getElementById('main'),
// );

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers/reducer';
import App from './components/App';

const store = createStore(todoApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main'),
);
