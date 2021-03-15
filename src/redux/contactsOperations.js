import axios from 'axios'
import {
    initContactsRequest,
    initContactsSuccess,
    initContactsError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    delContactRequest,
    delContactSuccess,
    delContactError,
} from './actions'

// axios.defaults.baseURL = 'http://localhost:3000';

const fetchContacts = () => dispatch => {
    dispatch(initContactsRequest());
    axios
        .get()//'/contacts'
        .then(({ data }) => dispatch(initContactsSuccess(data)))
        .catch(error => dispatch(initContactsError(error)));
};

const addContact = contact => dispatch => {
    dispatch(addContactRequest());
    axios
        .post('/contacts', contact)
        .then(({ data }) => console.log(data) || dispatch(addContactSuccess(data)))
        .catch(error => dispatch(addContactError(error)));
};

const delContact = id => dispatch => {
    dispatch(delContactRequest());
    axios
        .delete(`/contacts/${id}`)
        .then(() => dispatch(delContactSuccess(id)))
        .catch(error => dispatch(delContactError(error)));
};

const operations = {
    addContact,
    delContact,
    fetchContacts,
};

export default operations;
