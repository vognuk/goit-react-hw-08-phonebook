import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import * as selectors from '../redux/contacts/contactsSelectors'
import operations from '../redux/contacts/contactsOperations'
import authOperations from '../redux/auth/authOperations'
import Form from '../components/Form'
import Contacts from '../components/Contacts'
import Filter from '../components/Filter'

class ContactsView extends Component {
    componentDidMount() {

        this.props.initContacts();
    }

    static propTypes = {
        onDelete: PropTypes.func,
        contacts: PropTypes.arrayOf(
            PropTypes.exact({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                number: PropTypes.string.isRequired,
            })
        ),
    };

    state = {}

    render() {
        const { contacts, onDelete } = this.props;
        console.log('Контакти, що приходять в ContactsView: ', contacts);
        const { state, name, number } = this.props;
        return (<div>
            <Form
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
            />
        </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        contacts: selectors.getFilteredContacts(state),
        // initialValue: selectors.getFilter(state),
        // onGetCurretnUser: authOperations.getCurrentUser,
        // contacts: selectors.getFilteredContacts(state),
    }
};



const mapDispatchToProps = dispatch => {
    return {
        initContacts: () => dispatch(operations.fetchContacts()),
        delContact: id => dispatch(operations.delContact(id)),
        // contacts: () => dispatch(authOperations.fetchContacts()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
