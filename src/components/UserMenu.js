import React from 'react'
import AppBar from './AppBar'

const UserMenu = () => {
    return (
        <div>
            <img alt="" /> {/*src={avatar}*/}
            <span>
                Wellcome
        </span>
            <button type='button' onClick="onLogout">
                Logout
        </button>
        </div>
    );
};

export default UserMenu;
