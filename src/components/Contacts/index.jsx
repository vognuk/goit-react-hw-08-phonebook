import React, { Component } from 'react'
import s from './Contacts.module.css'
import ContactsAnimation from './ContactsAnimation.module.css'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class Contacts extends Component {
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
};

export default Contacts;
