/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
// eslint-disable-next-line import/no-extraneous-dependencies
import 'regenerator-runtime/runtime';
import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import throttle from 'lodash.throttle';
import sagas from './sagas';
// import { saveState } from './localStorage';
import createRootReducer from '../reducers/main';

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware();

  let composeEnhancers = null;

  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    composeEnhancers = compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        sagaMiddleware
      ),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : {}
    );
  } else {
    composeEnhancers = compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        sagaMiddleware
      )
    );
  }

  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState || {},
    composeEnhancers
  );

  store.subscribe(
    throttle(() => {
      // saveState({
      //   locale: store.getState().locale ? store.getState().locale : {},
      //   node: store.getState().node ? store.getState().node : {},
      // });
    }, 1000)
  );

  store.runSaga = sagaMiddleware.run;
  store.runSaga(sagas);

  return store;
}
