/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { loadState } from './store/localStorage';
import configureStore, { history } from './store';
import { DefaultLayout } from './templates';
import 'react-toastify/dist/ReactToastify.css';

const store = configureStore(loadState());

const toast = () => (
  <ToastContainer
    position='top-right'
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />
);

// eslint-disable-next-line react/prop-types
const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route
          path='/'
          component={(props) => (
            <DefaultLayout toasty={() => toast()} {...props} />
          )}
        />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default App;
