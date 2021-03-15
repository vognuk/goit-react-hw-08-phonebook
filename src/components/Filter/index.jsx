import React from 'react'
import s from './Filter.module.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import * as selectors from '../../redux/contactsSelectors'
import * as action from '../../redux/actions'

const Filter = ({ initialValue, onFilterChange }) => {

  return (
    <label className={s.label}>
      Filter contacts:
      <input
        className={s.input}
        type='text'
        name='filter'
        placeholder='Find contacts by name'
        value={initialValue}
        onChange={e => onFilterChange(e.target.value)}
      ></input>
    </label >
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
  filter: PropTypes.func,
};

const mapStateToProps = state => ({
  initialValue: selectors.getFilter(state),
});

const mapDispatchToProps = {
  onFilterChange: action.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
