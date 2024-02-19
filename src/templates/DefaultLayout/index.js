/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { COLORS } from '../../constants/colors';
import getGridClass from '../../hooks/getGridClass';
import routes from '../../routes/app';
import { GlobalStyles, Container } from './styles';
import './fonts.css';

const Layout = (props) => {
  // Tema Global
  const { size } = getGridClass();
  const theme = { colors: { ...COLORS }, size };

  // Loader para lazy load dos components
  const loading = () => <div />;

  const { toasty: Toast } = props;

  return (
    <ThemeProvider theme={theme}>
      <Toast />
      <GlobalStyles />
      <Suspense fallback={loading()}>
        <Container>
          <Switch>
            {routes.map((route) =>
              route.component ? (
                <Route
                  key={route.name}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={() => <route.component {...props} />}
                />
              ) : null
            )}
            <Redirect from='/' to='/home' />
          </Switch>
        </Container>
      </Suspense>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

Layout.defaultProps = {
  history: {
    push: () => null,
  },
};

export default Layout;
