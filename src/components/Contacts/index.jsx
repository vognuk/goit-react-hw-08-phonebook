import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import s from './Contacts.module.css'
import ContactsAnimation from './ContactsAnimation.module.css'
import * as selectors from '../../redux/contacts/contactsSelectors'
import operations from '../../redux/contacts/contactsOperations'
import { connect } from 'react-redux'

const Contacts = ({ contacts, onDelete }) => {
    // console.log('Контакти, що приходять в Contacts: ', initContacts);

    return (<div>
        <TransitionGroup
            component="ul"
            className={s.list}
        >
            {contacts.map((elem, id) => (
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
    </div>
    );
};

Contacts.propTypes = {
    onDelete: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
};

const mapStateToProps = state => {
    return {
        // contacts: selectors.getFilteredContacts(state),
        initialValue: selectors.getFilter(state),
        // onGetCurretnUser: authOperations.getCurrentUser,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        initContacts: () => dispatch(operations.fetchContacts()),
        // delContact: id => dispatch(operations.delContact(id)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
