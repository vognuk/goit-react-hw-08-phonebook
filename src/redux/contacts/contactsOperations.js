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
} from './contactsActions'
import token from '../auth/authOperations';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com'


// axios.put(
//     // `${base_url}/user`,
//     null,
//     {
//         // params: params,
//         headers: {
//             Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUwNjdhZjYwN2Y5YjAwMTc0NWYzOWYiLCJpYXQiOjE2MTU5Nzc0Mzl9.ZVlV0SwSO84V0tt-T_n7caYwNfPdnUIbsY3i-K4mIXo"
//         }
//     }
// );

const fetchContacts = () => async dispatch => {
    dispatch(initContactsRequest());
    // token.set(localStorage.getItem('token'));
    // token.set(localStorage.getItem('token'));
    await axios
        .get('/contacts') //, localStorage.getItem('token')
        .then(({ data }) => dispatch(initContactsSuccess(data)))
        .catch(error => dispatch(initContactsError(error.massage)));
};

const addContact = contact => dispatch => {
    dispatch(addContactRequest());
    axios
        .post('/contacts', contact)
        .then(({ data }) => console.log(data) || dispatch(addContactSuccess(data)))
        .catch(error => dispatch(addContactError(error.massage)));
};

const delContact = id => dispatch => {
    dispatch(delContactRequest());
    axios
        .delete(`/contacts/${id}`)
        .then(() => dispatch(delContactSuccess(id)))
        .catch(error => dispatch(delContactError(error.massage)));
};

const operations = {
    addContact,
    delContact,
    fetchContacts,
};

export default operations;
