import React, { Component, Suspense, lazy } from 'react' //, { Suspense, lazy } 
import Container from './components/Container'
// import Form from './components/Form'
// import Contacts from './views/ContactsView'
// import Filter from './components/Filter'
import { connect } from 'react-redux'
// import * as action from './redux/actions'
import * as selectors from './redux/contacts/contactsSelectors'
import operations from './redux/contacts/contactsOperations'
import { getAllContacts, getLoading } from './redux/contacts/contactsSelectors'

// import HomeView from './views/HomeView'
// import LoginView from './views/LoginView'
// import RegisterView from './views/RegisterView'
import ContactsView from './views/ContactsView'

import { Switch, Route, Redirect } from 'react-router-dom'
import { authOperations } from './redux/auth'
import AppBar from './components/AppBar'

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
    // const { state, contacts, name, number } = this.props;
    console.log('state in App.js:', state);
    return (
      <Container>
        <AppBar />
        <Suspense fallback={<p>Загружаем...</p>}> {/*fallback={<Preloader />}>*/}
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
            // contacts={this.props.contacts}
            // onDelete={this.props.delContact}
            />
            <Redirect to={routes.homeView} />
          </Switch>
        </Suspense>

        {/* <Form
          name={name}
          number={number}
          contacts={contacts}
          onChange={this.handleChange}
          onSubmit={this.checkContact}
        ></Form>

        <Filter
          value={this.props.initialValue}

          onChangeFilter={this.props.filter}
        />

        <Contacts
          contacts={this.props.contacts}
          onDelete={this.props.delContact}
        /> */}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    // contacts: selectors.getFilteredContacts(state),
    // initialValue: selectors.getFilter(state),
    onGetCurretnUser: authOperations.getCurrentUser,
  }
};



const mapDispatchToProps = dispatch => {
  return {
    // initContacts: () => dispatch(operations.fetchContacts()),
    // delContact: id => dispatch(operations.delContact(id)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
