import React, { Component } from 'react' //, { Suspense, lazy } 
import Container from './components/Container'
import Form from './components/Form'
import Contacts from './components/Contacts'
import Filter from './components/Filter'
import { connect } from 'react-redux'
// import * as action from './redux/actions'
import * as selectors from './redux/contactsSelectors'
import operations from './redux/contactsOperations'
// import { getAllContacts, getLoading } from './redux/contactsSelectors'
import routes from './routes'
import HomeView from './views/HomeView'
import LoginView from './views/LoginView'
import RegisterView from './views/RegisterView'
import ContactsView from './views/ContactsView'
import { Switch, Route, Redirect } from 'react-router-dom'
import { authOperations } from './redux/auth'
import AppBar from './components/AppBar'

class App extends Component {

  componentDidMount() {
    // this.props.onGetCurretnUser();
    // this.props.initContacts();
  }

  filterContacts = e => {
    this.props.filterContacts(e.target.value);
  };

  render() {
    const { state, contacts, name, number } = this.props;
    console.log(state);
    return (
      <Container>
        <AppBar />
        {/* <Suspense fallback={<Preloader />}> */}
        <Switch>
          {/* <Route path={routes.homeView} component={HomeView} /> */}
          <Route path={routes.loginPage} exact component={LoginView} />
          <Route path={routes.registerPage} component={RegisterView} />
          <Route path={routes.contactsPage} component={ContactsView} />

          <Redirect to={routes.homeView} />
        </Switch>
        {/* </Suspense> */}

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
