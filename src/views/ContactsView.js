import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import s from '../components/Contacts/Contacts.module.css'
import ContactsAnimation from '../components/Contacts/ContactsAnimation.module.css'

import { connect } from 'react-redux'
import operations from '../redux/contacts/contactsOperations'
import * as selectors from '../redux/contacts/contactsSelectors'
import Form from '../components/Form'
// import Contacts from './views/ContactsView' //???
import Filter from '../components/Filter'

class ContactsView extends Component {
    static propTypes = {
        onDelete: PropTypes.func.isRequired,
        contacts: PropTypes.arrayOf(
            PropTypes.exact({
                id: PropTypes.number.isRequired,
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
            <TransitionGroup
                component="ul"
                className={s.list}
            >
                {contacts.map((elem, id) => ( //contacts
                    <CSSTransition
                        key={id}
                        timeout={250}
                        classNames={ContactsAnimation}
                    >
                        <li className={s.item} key={id}>
                            {`${elem.name}: ${elem.number}`}
                            <button
                                className={s.button}
                                onClick={() => onDelete(elem.id)}
                            >
                                Delete
              </button>
                        </li>
                    </CSSTransition>
                ))}
            </TransitionGroup>
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

            {/* <Contacts
                contacts={this.props.contacts}
                onDelete={this.props.delContact}
            /> */}
        </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        contacts: selectors.getFilteredContacts(state),
        initialValue: selectors.getFilter(state),
        // onGetCurretnUser: authOperations.getCurrentUser,
    }
};



const mapDispatchToProps = dispatch => {
    return {
        initContacts: () => dispatch(operations.fetchContacts()),
        delContact: id => dispatch(operations.delContact(id)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);

// export default Contacts;
