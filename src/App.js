import React, { Component, Suspense, lazy } from 'react'
import Container from './components/Container'

import { connect } from 'react-redux'

import ContactsView from './views/ContactsView'

import { Switch, Route, Redirect } from 'react-router-dom'
import { authOperations } from './redux/auth'
import AppBar from './components/AppBar'
import operations from './redux/contacts/contactsOperations'

import routes from './routes/routes'
import PrivateRoute from './routes/PrivateRoute'
import PublicRoute from './routes/PublicRoute'

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const TodosView = lazy(() => import('./views/ContactsView'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurretnUser();
    // this.props.initContacts();
  }

  filterContacts = e => {
    this.props.filterContacts(e.target.value);
  };

  render() {
    const { state } = this.props;
    return (
      <Container>
        <AppBar />
        <Suspense fallback={<p>Loading...</p>}> {/*fallback={<Preloader />}>*/}
          <Switch>
            <Route
              exact
              path={routes.homeView}
              component={HomeView} />
            <PublicRoute
              restricted
              redirectTo='/contacts'
              path={routes.loginPage}
              component={LoginView}
            />
            <PublicRoute
              restricted
              redirectTo='/contacts'
              path={routes.registerPage}
              component={RegisterView}
            />
            <PrivateRoute
              path={routes.contactsPage}
              component={ContactsView}
            />
            <Redirect to={routes.homeView} />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    // onGetCurretnUser: authOperations.getCurrentUser,
  }
};



const mapDispatchToProps = dispatch => {
  return {
    onGetCurretnUser: authOperations.getCurrentUser,
    initContacts: () => dispatch(operations.fetchContacts()),
    // delContact: id => dispatch(operations.delContact(id)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
