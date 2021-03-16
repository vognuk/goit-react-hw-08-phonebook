import React from 'react'
import AppBar from './AppBar'
import { connect } from 'react-redux'
import { authSelectors, authOperations } from '../redux/auth'
import defaultAvatar from '../images/defaultAvatar.jpg'

const styles = {
    avatar: {
        width: '25px',
        height: '25px',
        borderRadius: '50%',
    },
};

const UserMenu = ({ avatar, name, onLogout }) => {
    return (
        <div>
            <img alt="" src={avatar} style={styles.avatar} />
            <span>
                Wellcome {name}
            </span>
            <button type='button' onClick={onLogout}>
                Logout
        </button>
        </div>
    );
};

const mapStateToProps = state => ({
    name: authSelectors.getUsername(state),
    avatar: defaultAvatar,
});

const mapDispatchToProps = ({
    onLogout: authOperations.logOut,
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);